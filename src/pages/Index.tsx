import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Questionnaire from "@/components/Questionnaire";
import ResultsSection from "@/components/ResultsSection";
import { UserProfile } from "@/types/questionnaire";

type AppState = "home" | "questionnaire" | "results";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("home");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Handle browser back button
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.appState) {
        setAppState(event.state.appState);
      } else {
        setAppState("home");
      }
    };

    window.addEventListener("popstate", handlePopState);

    // Set initial state if not set
    if (!window.history.state) {
      window.history.replaceState({ appState: "home" }, "", "");
    }

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleStartQuestionnaire = () => {
    setAppState("questionnaire");
    window.history.pushState({ appState: "questionnaire" }, "", "#questionnaire");
  };

  const handleQuestionnaireComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setAppState("results");
    window.history.pushState({ appState: "results" }, "", "#results");
  };

  const handleRestart = () => {
    setUserProfile(null);
    setAppState("home");
    window.history.pushState({ appState: "home" }, "", "/");
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
