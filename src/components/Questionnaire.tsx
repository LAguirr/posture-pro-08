import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { UserProfile, QuestionnaireStep } from "@/types/questionnaire";
import { sportsList, objectivesList, injuryZonesList, movements } from "@/data/movements";
import { cn } from "@/lib/utils";

interface QuestionnaireProps {
  onComplete: (profile: UserProfile) => void;
  onBack: () => void;
}

const steps: QuestionnaireStep[] = ["level", "sports", "objectives", "injuries", "movement"];

const Questionnaire = ({ onComplete, onBack }: QuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Partial<UserProfile>>({
    level: undefined,
    sports: [],
    objectives: [],
    injuryZones: [],
    selectedMovement: undefined,
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(profile as UserProfile);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const canProceed = () => {
    const step = steps[currentStep];
    switch (step) {
      case "level":
        return !!profile.level;
      case "sports":
        return profile.sports && profile.sports.length > 0;
      case "objectives":
        return profile.objectives && profile.objectives.length > 0;
      case "injuries":
        return profile.injuryZones && profile.injuryZones.length > 0;
      case "movement":
        return !!profile.selectedMovement;
      default:
        return false;
    }
  };

  return (
    <section className="min-h-screen py-20 hero-gradient">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8 slide-up">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              Questionnaire de <span className="gradient-text">Profilage</span>
            </h2>
            <p className="text-muted-foreground">
              Étape {currentStep + 1} sur {steps.length}
            </p>
            <Progress value={progress} variant="gradient" className="mt-4" />
          </div>

          {/* Step content */}
          <Card variant="gradient" className="p-8 scale-in">
            {steps[currentStep] === "level" && (
              <LevelStep
                selected={profile.level}
                onSelect={(level) => setProfile({ ...profile, level })}
              />
            )}
            {steps[currentStep] === "sports" && (
              <MultiSelectStep
                title="Quels sports pratiquez-vous ?"
                subtitle="Sélectionnez un ou plusieurs sports"
                options={sportsList}
                selected={profile.sports || []}
                onSelect={(sports) => setProfile({ ...profile, sports })}
              />
            )}
            {steps[currentStep] === "objectives" && (
              <MultiSelectStep
                title="Quels sont vos objectifs ?"
                subtitle="Sélectionnez un ou plusieurs objectifs"
                options={objectivesList}
                selected={profile.objectives || []}
                onSelect={(objectives) => setProfile({ ...profile, objectives })}
              />
            )}
            {steps[currentStep] === "injuries" && (
              <MultiSelectStep
                title="Avez-vous des zones sensibles ?"
                subtitle="Sélectionnez les zones à protéger"
                options={injuryZonesList}
                selected={profile.injuryZones || []}
                onSelect={(injuryZones) => setProfile({ ...profile, injuryZones })}
              />
            )}
            {steps[currentStep] === "movement" && (
              <MovementStep
                selected={profile.selectedMovement}
                onSelect={(selectedMovement) => setProfile({ ...profile, selectedMovement })}
              />
            )}
          </Card>

          {/* Navigation */}
          <div className="flex justify-end mt-6">
            <Button
              variant="hero"
              size="lg"
              onClick={handleNext}
              disabled={!canProceed()}
              className="group"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  Voir mes conseils
                  <Check className="w-5 h-5" />
                </>
              ) : (
                <>
                  Continuer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LevelStep = ({
  selected,
  onSelect
}: {
  selected?: string;
  onSelect: (level: "beginner" | "intermediate" | "advanced") => void;
}) => {
  const levels = [
    { id: "beginner", label: "Débutant", description: "Je débute ou reprends le sport", icon: "🌱" },
    { id: "intermediate", label: "Intermédiaire", description: "Je pratique régulièrement depuis quelques mois", icon: "🌿" },
    { id: "advanced", label: "Avancé", description: "Je m'entraîne intensément depuis des années", icon: "🌳" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-extrabold mb-2">Quel est votre niveau sportif ?</h3>
      <p className="text-muted-foreground mb-6">
        Cela nous aidera à adapter les conseils à votre expérience
      </p>
      <div className="grid gap-4">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => onSelect(level.id as "beginner" | "intermediate" | "advanced")}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 text-left",
              selected === level.id
                ? "border-primary bg-primary/10 glow-box"
                : "border-border hover:border-primary/50 hover:bg-secondary/50"
            )}
          >
            <span className="text-3xl">{level.icon}</span>
            <div>
              <h4 className="font-extrabold text-lg">{level.label}</h4>
              <p className="text-muted-foreground text-sm">{level.description}</p>
            </div>
            {selected === level.id && (
              <Check className="w-6 h-6 text-primary ml-auto" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const MultiSelectStep = ({
  title,
  subtitle,
  options,
  selected,
  onSelect,
}: {
  title: string;
  subtitle: string;
  options: { id: string; label: string; icon: string }[];
  selected: string[];
  onSelect: (selected: string[]) => void;
}) => {
  const toggleOption = (id: string) => {
    if (id === "aucune") {
      onSelect(selected.includes(id) ? [] : [id]);
    } else {
      const newSelected = selected.filter(s => s !== "aucune");
      if (newSelected.includes(id)) {
        onSelect(newSelected.filter((s) => s !== id));
      } else {
        onSelect([...newSelected, id]);
      }
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => toggleOption(option.id)}
            className={cn(
              "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300",
              selected.includes(option.id)
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 hover:bg-secondary/50"
            )}
          >
            <span className="text-2xl">{option.icon}</span>
            <span className="font-medium text-sm text-center">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const MovementStep = ({
  selected,
  onSelect,
}: {
  selected?: string;
  onSelect: (movement: string) => void;
}) => {
  return (
    <div>
      <h3 className="text-2xl font-extrabold mb-2">Quel mouvement souhaitez-vous maîtriser ?</h3>
      <p className="text-muted-foreground mb-6">
        Choisissez l'exercice pour lequel vous voulez des conseils
      </p>
      <div className="grid gap-3">
        {movements.map((movement) => (
          <button
            key={movement.id}
            onClick={() => onSelect(movement.id)}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 text-left",
              selected === movement.id
                ? "border-primary bg-primary/10 glow-box"
                : "border-border hover:border-primary/50 hover:bg-secondary/50"
            )}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-extrabold text-lg">
              {movement.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="font-extrabold">{movement.name}</h4>
              <p className="text-muted-foreground text-sm">{movement.category} • {movement.difficulty === "beginner" ? "Débutant" : movement.difficulty === "intermediate" ? "Intermédiaire" : "Avancé"}</p>
            </div>
            {selected === movement.id && (
              <Check className="w-6 h-6 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
