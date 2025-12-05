import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

interface FlipCardProps {
    title: string;
    focus: string;
    instructions: string;
    guideLink: string;
}

const FlipCard = ({ title, focus, instructions, guideLink }: FlipCardProps) => (
    <div className="group h-64 w-full perspective-1000 cursor-pointer">
        <div className="relative h-full w-full transition-all duration-500 transform-style-3d flip-card-inner">
            {/* Front */}
            <div className="absolute inset-0 h-full w-full backface-hidden rounded-xl bg-card border border-border p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-extrabold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{focus}</p>
                <p className="mt-4 text-xs text-muted-foreground/50 uppercase tracking-widest">Survolez pour voir</p>
            </div>
            {/* Back */}
            <div className="absolute inset-0 h-full w-full backface-hidden rounded-xl bg-primary text-primary-foreground p-6 rotate-y-180 flex flex-col items-center justify-center text-center shadow-lg overflow-y-auto relative overflow-hidden">
                {/* Animated Sparkle */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 transform group-hover:scale-110">
                    <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                </div>

                <p className="text-sm mb-4 leading-relaxed">{instructions}</p>
                <Link to={guideLink} className="inline-flex items-center text-xs font-bold uppercase tracking-wider hover:underline mt-auto bg-primary-foreground/10 px-3 py-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                    Voir le guide <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
            </div>
        </div>
    </div>
);

const Exercises = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container px-4 py-24 mx-auto max-w-5xl">
                <div className="text-center mb-12 slide-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
                        🧘 Posture Optimale et Vie Pleine
                    </h1>
                    <p className="text-xl text-muted-foreground">Guide pour Débutants</p>
                </div>

                <div className="space-y-12">
                    {/* Introduction */}
                    <section className="slide-up" style={{ animationDelay: "0.1s" }}>
                        <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-accent">
                            👋 Bienvenue dans votre Parcours de Bien-être
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Si vous cherchez à améliorer votre posture, à réduire les douleurs et à vous sentir plus énergique au quotidien, vous êtes au bon endroit ! Ce guide est conçu pour les <strong>débutants</strong> qui recherchent des exercices doux, efficaces et axés sur la <strong>mobilité</strong>, la <strong>force centrale</strong> et la <strong>cohérence</strong>. N'oubliez pas : la meilleure posture est celle qui bouge.
                        </p>
                    </section>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {/* Section 1: Mobilité */}
                        <AccordionItem value="mobilite" className="border-none">
                            <AccordionTrigger className="text-2xl font-extrabold text-primary hover:no-underline hover:text-primary/80">
                                🚀 La Base – Mobilité et Ouverture
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-6 pb-2">
                                    <p className="mb-6 text-muted-foreground">
                                        Une posture rigide est une posture faible. Ces exercices sont conçus pour relâcher les tensions accumulées et restaurer l'amplitude des mouvements de vos articulations clés. Effectuez chaque étirement lentement et consciemment.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FlipCard
                                            title="Ouverture des Pectoraux"
                                            focus="Contrecarre l'arrondissement des épaules"
                                            instructions="Placez votre avant-bras dans un cadre de porte (coude à 90°). Avancez doucement jusqu'à ce que vous sentiez un étirement dans la poitrine. Répétez des deux côtés. Maintenir 30s."
                                            guideLink="/guides#apertura-pectorales"
                                        />
                                        <FlipCard
                                            title="Rotation Épaules/Cou"
                                            focus="Soulagement des tensions cervicales"
                                            instructions="Tournez lentement la tête d'un côté à l'autre. Ensuite, roulez vos épaules vers l'avant puis vers l'arrière, avec des mouvements amples. Maintenir 30s."
                                            guideLink="/guides#rotacion-hombros"
                                        />
                                        <FlipCard
                                            title="Chat-Vache"
                                            focus="Assouplit la colonne vertébrale"
                                            instructions="À quatre pattes, inspirez en arquant le dos (Vache) et expirez en arrondissant le dos et en rentrant le nombril (Chat). Effectuez 10 répétitions lentes."
                                            guideLink="/guides#gato-vaca"
                                        />
                                        <FlipCard
                                            title="Rotation du Tronc"
                                            focus="Mobilité du bas du dos et des hanches"
                                            instructions="Allongez-vous sur le dos. Bras en croix. Laissez tomber doucement vos genoux pliés d'un côté, en gardant les épaules fermement au sol. Répétez des deux côtés."
                                            guideLink="/guides#giro-tronco"
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Section 2: Core */}
                        <AccordionItem value="core" className="border-none">
                            <AccordionTrigger className="text-2xl font-extrabold text-primary hover:no-underline hover:text-primary/80">
                                💪 Le Pouvoir Central – Renforcement du Core
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-6 pb-2">
                                    <p className="mb-6 text-muted-foreground">
                                        Une posture forte se construit à partir du centre. Le renforcement du "Core" (abdominaux, lombaires et fessiers) est essentiel pour soutenir votre colonne vertébrale et prévenir les douleurs lombaires.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FlipCard
                                            title="Activation Abdominale"
                                            focus="Abdominal profond (ceinture naturelle)"
                                            instructions="Allongez-vous sur le dos, genoux fléchis. Essayez de rapprocher le nombril de la colonne vertébrale sans bouger le bassin. Maintenez 5-10 secondes et relâchez. 3 séries de 10."
                                            guideLink="/guides#activacion-abdominal"
                                        />
                                        <FlipCard
                                            title="Pont Fessier"
                                            focus="Fessiers et lombaires"
                                            instructions="Allongez-vous sur le dos. Soulevez les hanches jusqu'à ce que le corps forme une ligne droite, en serrant les fessiers en haut. Redescendez lentement. 3 séries de 10-15."
                                            guideLink="/guides#puente-gluteos"
                                        />
                                        <FlipCard
                                            title="Planche sur Genoux"
                                            focus="Stabilité générale du Core"
                                            instructions="Appuyez-vous sur les avant-bras et les genoux. Maintenez le corps en ligne droite. Gardez l'abdomen contracté. Tenez 20-30 secondes."
                                            guideLink="/guides#plancha-rodillas"
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Section 3: Force Fonctionnelle */}
                        <AccordionItem value="force" className="border-none">
                            <AccordionTrigger className="text-2xl font-extrabold text-primary hover:no-underline hover:text-primary/80">
                                🏃‍♀️ Force Fonctionnelle pour la Vie Quotidienne
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-6 pb-2">
                                    <p className="mb-6 text-muted-foreground">
                                        Ce sont des mouvements composés qui imitent les actions quotidiennes, développant la force dont vous avez besoin pour vous lever, marcher et bouger facilement.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FlipCard
                                            title="Squats de Base"
                                            focus="Renforcement jambes et fessiers"
                                            instructions="Pieds largeur épaules. Descendez comme pour vous asseoir, poitrine droite. Genoux alignés avec les pieds. 3 séries de 10-12."
                                            guideLink="/guides#sentadillas"
                                        />
                                        <FlipCard
                                            title="Pompes au Mur"
                                            focus="Renforcement poitrine et bras"
                                            instructions="Face au mur, mains appuyées. Rapprochez votre poitrine du mur en pliant les coudes, puis poussez. Version douce et contrôlée. 3 séries de 10-12."
                                            guideLink="/guides#flexiones-pared"
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Section 4: Habitudes */}
                        <AccordionItem value="habitudes" className="border-none">
                            <AccordionTrigger className="text-2xl font-extrabold text-primary hover:no-underline hover:text-primary/80">
                                ✅ L'Habitude – Cohérence Quotidienne
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-6 pb-2">
                                    <p className="mb-6 text-muted-foreground">
                                        La meilleure routine est celle qui est faite. Intégrez ces habitudes simples pour vous assurer que votre posture se maintienne en dehors de la salle de sport.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <FlipCard
                                            title="Marche Consciente"
                                            focus="Posture dynamique"
                                            instructions="Marchez 15-30 min/jour. Épaules en arrière, regard droit, légère tension abdominale. Imaginez un fil vous tirant vers le haut."
                                            guideLink="/guides#marche-consciente"
                                        />
                                        <FlipCard
                                            title="Pauses Actives"
                                            focus="Contre la sédentarité"
                                            instructions="Levez-vous toutes les 30-60 min. Bougez 2 min : étirements, marche, ou mouvements simples. Changez de position souvent."
                                            guideLink="/guides#pauses-actives"
                                        />
                                        <FlipCard
                                            title="Hydratation"
                                            focus="Santé des disques"
                                            instructions="Buvez 1.5-2L d'eau par jour. Les disques vertébraux ont besoin d'eau pour amortir les chocs. Gardez une bouteille à portée de main."
                                            guideLink="/guides#hydratation"
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Important Warning */}
                    <section className="slide-up" style={{ animationDelay: "0.6s" }}>
                        <Card className="border-destructive/50 bg-destructive/5">
                            <CardHeader>
                                <CardTitle className="text-xl font-extrabold flex items-center gap-2 text-destructive">
                                    💡 Important !
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Écoutez votre corps :</strong> Ne faites jamais un exercice qui provoque une douleur aiguë.</li>
                                    <li><strong>Consultation :</strong> Si vous avez une blessure ou une douleur chronique, consultez un professionnel de la santé ou un physiothérapeute avant de commencer tout programme d'exercices.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Exercises;
