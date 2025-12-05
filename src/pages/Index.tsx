import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Questionnaire from "@/components/Questionnaire";
import ResultsSection from "@/components/ResultsSection";
import { UserProfile } from "@/types/questionnaire";

type AppState = "home" | "questionnaire" | "results";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("home");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleStartQuestionnaire = () => {
    setAppState("questionnaire");
  };

  const handleQuestionnaireComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setAppState("results");
  };

  const handleRestart = () => {
    setUserProfile(null);
    setAppState("home");
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {appState === "home" && (
        <HeroSection onStartQuestionnaire={handleStartQuestionnaire} />
      )}
      
      {appState === "questionnaire" && (
        <Questionnaire 
          onComplete={handleQuestionnaireComplete}
          onBack={handleRestart}
        />
      )}
      
      {appState === "results" && userProfile && (
        <ResultsSection 
          profile={userProfile}
          onRestart={handleRestart}
        />
      )}
    </main>
  );
};

export default Index;
