import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserProfile } from "@/types/questionnaire";
import { movements, equipment } from "@/data/movements";
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Wind, 
  Target, 
  ShieldAlert,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultsSectionProps {
  profile: UserProfile;
  onRestart: () => void;
}

const ResultsSection = ({ profile, onRestart }: ResultsSectionProps) => {
  const movement = movements.find((m) => m.id === profile.selectedMovement);
  const relevantEquipment = equipment.filter((e) => 
    e.relevantFor.includes(profile.selectedMovement)
  );

  if (!movement) return null;

  // Get personalized warnings based on user's injury zones
  const personalizedWarnings = profile.injuryZones
    .filter((zone) => zone !== "aucune" && movement.safetyWarnings[zone])
    .map((zone) => ({
      zone,
      warning: movement.safetyWarnings[zone],
    }));

  return (
    <section className="min-h-screen py-20 hero-gradient">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 slide-up">
            <Button variant="ghost" onClick={onRestart} className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nouvelle analyse
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl btn-gradient flex items-center justify-center">
                <span className="text-3xl font-black">{movement.name.charAt(0)}</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Guide : <span className="gradient-text">{movement.name}</span>
                </h1>
                <p className="text-muted-foreground">
                  Profil : {profile.level === "beginner" ? "Débutant" : profile.level === "intermediate" ? "Intermédiaire" : "Avancé"}
                </p>
              </div>
            </div>
          </div>

          {/* Personalized Warnings */}
          {personalizedWarnings.length > 0 && (
            <Card variant="glow" className="mb-6 border-destructive/50 scale-in">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <ShieldAlert className="w-5 h-5" />
                  Avertissements personnalisés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalizedWarnings.map(({ zone, warning }) => (
                    <div 
                      key={zone}
                      className="flex gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                    >
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive capitalize mb-1">
                          Zone sensible : {zone}
                        </p>
                        <p className="text-sm text-foreground/80">{warning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Instructions */}
          <Card variant="gradient" className="mb-6 scale-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Instructions pas à pas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{movement.description}</p>
              <ol className="space-y-3">
                {movement.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full btn-gradient flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <p className="pt-0.5">{instruction}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Breathing Tips */}
          <Card variant="gradient" className="mb-6 scale-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-accent" />
                Conseils de respiration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {movement.breathingTips.map((tip, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p>{tip}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Common Errors */}
          <ErrorsVisualization errors={movement.commonErrors} />

          {/* Muscles Targeted */}
          <Card variant="gradient" className="mb-6 scale-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle>Muscles ciblés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {movement.musclesTargeted.map((muscle) => (
                  <span 
                    key={muscle}
                    className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm font-medium"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Equipment Recommendations */}
          {relevantEquipment.length > 0 && (
            <Card variant="glow" className="scale-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🛡️ Équipement recommandé
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Pour pratiquer en toute sécurité
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {relevantEquipment.map((item) => (
                    <div 
                      key={item.id}
                      className="p-4 rounded-xl border border-border bg-secondary/30 hover:border-primary/50 transition-all"
                    >
                      <h4 className="font-bold mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.safetyBenefit}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Voir sur Decathlon
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Restart button */}
          <div className="mt-8 text-center">
            <Button variant="hero" size="lg" onClick={onRestart}>
              Analyser un autre mouvement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ErrorsVisualization = ({ errors }: { errors: string[] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card variant="gradient" className="mb-6 scale-in" style={{ animationDelay: "0.3s" }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          Erreurs courantes à éviter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-3">
          {errors.slice(0, expanded ? errors.length : 4).map((error, index) => (
            <div 
              key={index}
              className="flex gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
            >
              <span className="text-yellow-500 font-bold">✗</span>
              <p className="text-sm">{error}</p>
            </div>
          ))}
        </div>
        {errors.length > 4 && (
          <Button 
            variant="ghost" 
            className="mt-4 w-full"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Voir moins <ChevronUp className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Voir plus ({errors.length - 4} de plus) <ChevronDown className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsSection;
