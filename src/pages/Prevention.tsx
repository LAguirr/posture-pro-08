import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Heart, Zap, Moon, Footprints, Monitor, Scale, Wind, Activity, StretchHorizontal, Sparkles } from "lucide-react";

interface FlipCardProps {
    title: string;
    focus: string;
    instructions: string;
    icon: React.ReactNode;
}

const FlipCard = ({ title, focus, instructions, icon }: FlipCardProps) => (
    <div className="group h-64 w-full perspective-1000 cursor-pointer">
        <div className="relative h-full w-full transition-all duration-500 transform-style-3d flip-card-inner">
            {/* Front */}
            <div className="absolute inset-0 h-full w-full backface-hidden rounded-xl bg-card border border-border p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-primary p-3 bg-primary/10 rounded-full">
                    {icon}
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{focus}</p>
                <p className="mt-4 text-xs text-muted-foreground/50 uppercase tracking-widest">Survolez pour découvrir</p>
            </div>
            {/* Back */}
            <div className="absolute inset-0 h-full w-full backface-hidden rounded-xl bg-primary text-primary-foreground p-6 rotate-y-180 flex flex-col items-center justify-center text-center shadow-lg overflow-y-auto relative overflow-hidden">
                {/* Animated Sparkle */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 transform group-hover:scale-110">
                    <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                </div>

                <h4 className="text-lg font-bold mb-2">{title}</h4>
                <p className="text-sm leading-relaxed">{instructions}</p>
            </div>
        </div>
    </div>
);

const Prevention = () => {
    const tips = [
        {
            title: "Échauffement Progressif",
            focus: "Préparation musculaire",
            instructions: "Ne commencez jamais à froid. 5 à 10 minutes de mouvements doux augmentent la température corporelle et préparent vos articulations à l'effort.",
            icon: <Zap size={24} />
        },
        {
            title: "Écoute du Corps",
            focus: "Signaux d'alerte",
            instructions: "La douleur est une information, pas un obstacle à franchir. Si ça fait mal (douleur aiguë), arrêtez-vous immédiatement et analysez la cause.",
            icon: <Heart size={24} />
        },
        {
            title: "Hydratation",
            focus: "Santé des tissus",
            instructions: "Vos muscles et vos disques vertébraux sont composés majoritairement d'eau. Une bonne hydratation réduit les risques de crampes et de blessures.",
            icon: <Activity size={24} />
        },
        {
            title: "Sommeil Réparateur",
            focus: "Récupération",
            instructions: "C'est pendant la nuit que votre corps se répare. Un sommeil de qualité (7-9h) est le meilleur outil de prévention contre les blessures de fatigue.",
            icon: <Moon size={24} />
        },
        {
            title: "Chaussures Adaptées",
            focus: "Fondation",
            instructions: "Vos pieds portent tout votre corps. Portez des chaussures adaptées à votre activité et à votre morphologie pour assurer une base stable.",
            icon: <Footprints size={24} />
        },
        {
            title: "Ergonomie au Bureau",
            focus: "Posture statique",
            instructions: "Réglez votre écran à hauteur des yeux. Vos coudes et genoux doivent être à 90°. Levez-vous toutes les heures pour briser la sédentarité.",
            icon: <Monitor size={24} />
        },
        {
            title: "Technique avant Charge",
            focus: "Qualité du mouvement",
            instructions: "Ne cherchez pas à porter lourd ou aller vite avant de maîtriser le mouvement parfait. La mauvaise forme est la cause n°1 des blessures.",
            icon: <Scale size={24} />
        },
        {
            title: "Respiration Consciente",
            focus: "Oxygénation",
            instructions: "Ne bloquez jamais votre respiration pendant l'effort. Expirez sur la phase difficile du mouvement pour stabiliser votre tronc.",
            icon: <Wind size={24} />
        },
        {
            title: "Variété des Mouvements",
            focus: "Équilibre musculaire",
            instructions: "Répéter toujours les mêmes gestes crée des déséquilibres. Variez vos activités pour solliciter tous vos groupes musculaires.",
            icon: <Shield size={24} />
        },
        {
            title: "Retour au Calme",
            focus: "Transition",
            instructions: "Ne stoppez pas l'effort brutalement. Prenez le temps de faire redescendre le rythme cardiaque et d'étirer doucement les muscles sollicités.",
            icon: <StretchHorizontal size={24} />
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container px-4 py-24 mx-auto max-w-6xl">
                <div className="text-center mb-16 slide-up">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                        <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
                        🛡️ Prévention Active
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Les 10 commandements pour pratiquer en toute sécurité et durer dans le temps.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up" style={{ animationDelay: "0.2s" }}>
                    {tips.map((tip, index) => (
                        <FlipCard
                            key={index}
                            title={tip.title}
                            focus={tip.focus}
                            instructions={tip.instructions}
                            icon={tip.icon}
                        />
                    ))}
                </div>

                <section className="mt-20 slide-up" style={{ animationDelay: "0.4s" }}>
                    <Card className="border-primary/20 bg-primary/5 overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                <Activity className="w-6 h-6 text-primary" />
                                Pourquoi la prévention est-elle clé ?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-gray max-w-none">
                            <p className="text-lg text-muted-foreground">
                                La prévention n'est pas une perte de temps, c'est un investissement. En adoptant ces habitudes simples, vous réduisez drastiquement le risque de blessures chroniques (tendinites, mal de dos) et vous assurez une progression constante. N'attendez pas d'avoir mal pour prendre soin de vous.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    );
};

export default Prevention;
