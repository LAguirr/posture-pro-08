import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
                                <div className="pt-4">
                                    <p className="mb-6 text-muted-foreground">
                                        Une posture rigide est une posture faible. Ces exercices sont conçus pour relâcher les tensions accumulées et restaurer l'amplitude des mouvements de vos articulations clés. Effectuez chaque étirement lentement et consciemment.
                                    </p>

                                    <Card variant="gradient">
                                        <CardContent className="p-0">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="hover:bg-transparent">
                                                        <TableHead className="w-[30%] font-extrabold text-primary">Exercice</TableHead>
                                                        <TableHead className="w-[30%] font-extrabold text-primary">Bénéfice Clé</TableHead>
                                                        <TableHead className="font-extrabold text-primary">Instructions (Maintenir 30 secondes)</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Ouverture des Pectoraux sur un Cadre de Porte</TableCell>
                                                        <TableCell>Contrecarre l'arrondissement des épaules dû à la position assise.</TableCell>
                                                        <TableCell>Placez votre avant-bras dans un cadre de porte (coude à 90°). Avancez doucement jusqu'à ce que vous sentiez un étirement dans la poitrine. Répétez des deux côtés.</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Rotation des Épaules et du Cou</TableCell>
                                                        <TableCell>Soulagement des tensions cervicales et trapèzes.</TableCell>
                                                        <TableCell>Tournez lentement la tête d'un côté à l'autre. Ensuite, roulez vos épaules vers l'avant puis vers l'arrière, avec des mouvements amples.</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Chat-Vache (Mobilité Spinale)</TableCell>
                                                        <TableCell>Assouplit la colonne vertébrale et le tronc.</TableCell>
                                                        <TableCell>À quatre pattes, inspirez en arquant le dos (Vache) et expirez en arrondissant le dos et en rentrant le nombril (Chat). Effectuez 10 répétitions lentes.</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Rotation du Tronc Allongé</TableCell>
                                                        <TableCell>Mobilité du bas du dos et des hanches.</TableCell>
                                                        <TableCell>Allongez-vous sur le dos. Bras en croix. Laissez tomber doucement vos genoux pliés d'un côté, en gardant les épaules fermement au sol. Répétez des deux côtés.</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Section 2: Core */}
                        <AccordionItem value="core" className="border-none">
                            <AccordionTrigger className="text-2xl font-extrabold text-primary hover:no-underline hover:text-primary/80">
                                💪 Le Pouvoir Central – Renforcement du Core
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-4">
                                    <p className="mb-6 text-muted-foreground">
                                        Une posture forte se construit à partir du centre. Le renforcement du "Core" (abdominaux, lombaires et fessiers) est essentiel pour soutenir votre colonne vertébrale et prévenir les douleurs lombaires.
                                    </p>

                                    <Card variant="gradient">
                                        <CardContent className="p-0">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="hover:bg-transparent">
                                                        <TableHead className="w-[30%] font-extrabold text-primary">Exercice</TableHead>
                                                        <TableHead className="w-[30%] font-extrabold text-primary">Muscles Travaillés</TableHead>
                                                        <TableHead className="font-extrabold text-primary">Instructions (3 Séries de 10-15 Répétitions)</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Activation Abdominale (Transverse)</TableCell>
                                                        <TableCell>Abdominal profond (ceinture naturelle).</TableCell>
                                                        <TableCell>Allongez-vous sur le dos, genoux fléchis. Essayez de rapprocher le nombril de la colonne vertébrale sans bouger le bassin. Maintenez 5-10 secondes et relâchez.</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Pont Fessier (Hip Bridge)</TableCell>
                                                        <TableCell>Fessiers et lombaires (puissant pour contrer la position assise).</TableCell>
                                                        <TableCell>Allongez-vous sur le dos. Soulevez les hanches jusqu'à ce que le corps forme une ligne droite, en serrant les fessiers en haut. Redescendez lentement.</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Planche sur les Genoux (Modifiée)</TableCell>
                                                        <TableCell>Stabilité générale du Core et du dos.</TableCell>
                                                        <TableCell>Appuyez-vous sur les avant-bras et les genoux. Maintenez le corps en ligne droite de la tête aux genoux. <strong>Gardez l'abdomen contracté</strong>. Essayez de tenir 20-30 secondes.</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Section 3: Force Fonctionnelle */}
                        <AccordionItem value="force" className="border-none">
                            <AccordionTrigger className="text-2xl font-extrabold text-primary hover:no-underline hover:text-primary/80">
                                🏃‍♀️ Force Fonctionnelle pour la Vie Quotidienne
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-4">
                                    <p className="mb-6 text-muted-foreground">
                                        Ce sont des mouvements composés qui imitent les actions quotidiennes, développant la force dont vous avez besoin pour vous lever, marcher et bouger facilement.
                                    </p>

                                    <Card variant="gradient">
                                        <CardContent className="p-0">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="hover:bg-transparent">
                                                        <TableHead className="w-[30%] font-extrabold text-primary">Exercice</TableHead>
                                                        <TableHead className="w-[30%] font-extrabold text-primary">Focus Principal</TableHead>
                                                        <TableHead className="font-extrabold text-primary">Instructions (3 Séries de 10-12 Répétitions)</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Squats de Base (Flexions de Jambes)</TableCell>
                                                        <TableCell>Renforcement des jambes et des fessiers.</TableCell>
                                                        <TableCell>Pieds à la largeur des épaules. Descendez comme si vous alliez vous asseoir sur une chaise, en gardant la poitrine droite. Assurez-vous que vos genoux suivent l'alignement de vos pieds.</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-bold">Pompes contre le Mur</TableCell>
                                                        <TableCell>Renforcement de la poitrine, des épaules et des bras.</TableCell>
                                                        <TableCell>Placez-vous face à un mur à une longueur de bras. Appuyez les mains. Rapprochez votre poitrine du mur en pliant les coudes, puis poussez. C'est une version plus douce et contrôlée.</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Section 4: Habitudes */}
                        <AccordionItem value="habitudes" className="border-none">
                            <AccordionTrigger className="text-2xl font-extrabold text-primary hover:no-underline hover:text-primary/80">
                                ✅ L'Habitude – Cohérence Quotidienne
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-4">
                                    <p className="mb-6 text-muted-foreground">
                                        La meilleure routine est celle qui est faite. Intégrez ces habitudes simples pour vous assurer que votre posture se maintienne en dehors de la salle de sport.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Card className="bg-secondary/30 border-primary/20">
                                            <CardHeader>
                                                <CardTitle className="text-xl font-extrabold text-primary">🌟 Programme Suggéré</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Effectuez les exercices des sections de Mobilité, Core et Force, <strong>2 à 3 fois par semaine</strong>. Complétez avec les Habitudes tous les jours.</p>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg font-extrabold">Habitude : La Marche Consciente</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p><strong>Marchez 15-30 minutes par jour.</strong> Pendant ce temps, concentrez-vous à ramener légèrement vos épaules en arrière, à regarder droit devant vous et à maintenir une légère tension dans l'abdomen.</p>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg font-extrabold">Habitude : Pauses Actives</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Si vous travaillez assis, utilisez une minuterie pour <strong>vous lever et bouger toutes les 30-60 minutes</strong>. Faites 2 minutes d'étirements du cou ou la posture "Ouverture des Pectoraux".</p>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg font-extrabold">Habitude : L'Hydratation</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Boire suffisamment d'eau maintient l'élasticité de vos tissus conjonctifs et disques intervertébraux, essentiels pour une colonne vertébrale saine !</p>
                                            </CardContent>
                                        </Card>
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
