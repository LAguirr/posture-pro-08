import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Target } from "lucide-react";

interface HeroSectionProps {
  onStartQuestionnaire: () => void;
}

const HeroSection = ({ onStartQuestionnaire }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Coach Postural Intelligent
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Maîtrisez vos{" "}
            <span className="gradient-text">Mouvements</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Analyse personnalisée, conseils d'experts et prévention des blessures 
            pour optimiser votre performance sportive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="glow" 
              size="xl" 
              onClick={onStartQuestionnaire}
              className="group"
            >
              Commencer l'analyse
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Découvrir les exercices
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <FeatureCard 
              icon={<Target className="w-8 h-8" />}
              title="Analyse Personnalisée"
              description="Questionnaire intelligent adapté à votre profil sportif"
            />
            <FeatureCard 
              icon={<Activity className="w-8 h-8" />}
              title="Guides Détaillés"
              description="Instructions pas à pas pour chaque mouvement"
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8" />}
              title="Prévention Active"
              description="Conseils ciblés pour éviter les blessures"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Défiler</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="glass-effect rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
    <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default HeroSection;
