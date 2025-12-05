import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Guides = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState<string>("");

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            setActiveItem(id);
            // Optional: Scroll to the element after a short delay to allow accordion to open
            setTimeout(() => {
                const element = document.getElementById(id); // We might need to add IDs to the items or triggers
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container px-4 py-24 mx-auto max-w-4xl">
                <div className="text-center mb-12 slide-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
                        📝 Guide Détaillé des Exercices de Posture
                    </h1>
                </div>

                <div className="space-y-12">
                    {/* Section 1: Movilidad */}
                    <section className="slide-up" style={{ animationDelay: "0.1s" }}>
                        <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-primary">
                            🚀 La Base – Mobilité et Ouverture (Étirements)
                        </h2>
                        <p className="mb-6 text-muted-foreground">
                            Effectuez chaque étirement <strong>2 à 3 fois</strong> et maintenez la position finale pendant <strong>30 secondes</strong>.
                        </p>

                        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={activeItem} key={activeItem}>
                            <AccordionItem value="apertura-pectorales" className="border rounded-lg px-4 bg-card" id="apertura-pectorales">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Ouverture des Pectoraux dans l'Encadrement de Porte
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Étirer les muscles de la poitrine (pectoraux) qui ont tendance à se raccourcir en position assise, tirant les épaules vers l'avant.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Tenez-vous dans l'encadrement d'une porte.</li>
                                            <li>Placez votre avant-bras (coude et paume) sur le cadre, le coude plié à un angle de <strong>90 degrés</strong>.</li>
                                            <li>En gardant le pied opposé en avant, penchez doucement le corps vers l'avant, en passant le seuil de la porte.</li>
                                            <li>Arrêtez-vous lorsque vous ressentez un étirement doux mais ferme à l'avant de votre poitrine et de votre épaule.</li>
                                            <li>Maintenez la posture en respirant profondément.</li>
                                            <li>Revenez à la position initiale et répétez avec l'autre bras.</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Évitez de hausser l'épaule vers l'oreille. Gardez l'épaule détendue et basse.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#balle-massage" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Balle de Massage (pour les pectoraux)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="rotacion-hombros" className="border rounded-lg px-4 bg-card" id="rotacion-hombros">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Rotation des Épaules et du Cou
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Libérer la tension accumulée dans le cou et la partie supérieure des trapèzes.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Asseyez-vous ou tenez-vous debout, le dos droit et les épaules détendues.</li>
                                            <li><strong>Rotation des Épaules :</strong> Faites tourner lentement les épaules vers l'avant dans un mouvement circulaire (5 fois). Ensuite, faites une pause et faites tourner les épaules vers l'arrière, en vous concentrant sur le léger resserrement des omoplates (5 fois).</li>
                                            <li><strong>Rotation du Cou :</strong> Inclinez doucement l'oreille droite vers l'épaule droite (sans lever l'épaule). Maintenez la posture quelques secondes.</li>
                                            <li>Tournez la tête vers la gauche, en amenant l'oreille gauche vers l'épaule gauche. Maintenez.</li>
                                            <li>Pour un étirement doux supplémentaire, tournez le menton vers le bas en regardant le sol (évitez de tourner complètement le cou vers l'arrière si vous êtes débutant).</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Effectuez ces mouvements très lentement et de manière contrôlée. Ne forcez aucun point douloureux.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#sangle-yoga" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Sangle de Yoga (pour l'aide à l'étirement)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="gato-vaca" className="border rounded-lg px-4 bg-card" id="gato-vaca">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Chat-Vache (Mobilité Spinale)
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Échauffer et mobiliser toute la colonne vertébrale (bas, milieu et haut du dos).</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Commencez en position de "table" (à quatre pattes), les mains directement sous les épaules et les genoux sous les hanches.</li>
                                            <li><strong>Mouvement Vache (Inspirez) :</strong> Laissez tomber doucement l'abdomen vers le sol, levez le coccyx et regardez légèrement vers le haut. Cambrez le dos.</li>
                                            <li><strong>Mouvement Chat (Expirez) :</strong> Arrondissez lentement la colonne vers le plafond, en rentrant le coccyx et en laissant tomber la tête (regardez votre nombril). Sentez l'étirement dans le haut du dos.</li>
                                            <li>Alternez entre Vache et Chat de manière fluide et lente, en coordonnant le mouvement avec votre respiration (10 répétitions).</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Le mouvement doit partir du centre de votre colonne, pas seulement du cou.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#tapis-yoga" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Tapis de Yoga Confort
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="giro-tronco" className="border rounded-lg px-4 bg-card" id="giro-tronco">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Torsion du Tronc Allongé (Supine Spinal Twist)
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Augmenter la rotation et libérer la tension dans la zone lombaire et fessière.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Allongez-vous sur le dos, les bras étendus sur les côtés en forme de "T".</li>
                                            <li>Pliez les deux genoux et levez les pieds du sol.</li>
                                            <li>En gardant les épaules collées au sol, laissez tomber lentement les deux genoux vers le côté droit.</li>
                                            <li>Tournez doucement la tête vers la gauche (à l'opposé des genoux).</li>
                                            <li>Maintenez la posture pendant 30 secondes, en sentant l'étirement dans le bas du dos.</li>
                                            <li>Revenez au centre et répétez en laissant tomber les genoux vers le côté gauche et en tournant la tête vers la droite.</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Si vos genoux ne touchent pas le sol, ne vous inquiétez pas. Privilégiez le maintien de l'épaule opposée en contact avec le sol.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#rouleau-massage" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Rouleau de Massage (pour le dos)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Section 2: Core */}
                    <section className="slide-up" style={{ animationDelay: "0.2s" }}>
                        <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-primary">
                            💪 Le Pouvoir Central – Renforcement du Core
                        </h2>
                        <p className="mb-6 text-muted-foreground">
                            Effectuez <strong>3 séries</strong> de <strong>10 à 15 répétitions</strong> (ou maintenez le temps indiqué).
                        </p>

                        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={activeItem} key={`core-${activeItem}`}>
                            <AccordionItem value="activacion-abdominal" className="border rounded-lg px-4 bg-card" id="activacion-abdominal">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Activation Abdominale (Transverse)
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Renforcer le muscle abdominal le plus profond (transverse abdominal), qui agit comme un corset naturel.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Allongez-vous sur le dos, genoux pliés et pieds à plat sur le sol.</li>
                                            <li>Placez vos mains légèrement à l'intérieur des os de vos hanches, sur le bas-ventre.</li>
                                            <li>Expirez et, en même temps, "rentrez" le nombril vers la colonne vertébrale comme si vous essayiez de serrer une ceinture invisible.</li>
                                            <li>C'est un mouvement très petit qui ne doit pas faire bouger votre bassin ni votre dos.</li>
                                            <li>Maintenez cette contraction doucement activée pendant <strong>5 à 10 secondes</strong> tout en respirant normalement.</li>
                                            <li>Relâchez et répétez 10 fois.</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Cet exercice est une question de conscience, pas de force brute. Évitez d'utiliser les abdominaux superficiels (grand droit).
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#swiss-ball" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Swiss Ball (pour le core)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="puente-gluteos" className="border rounded-lg px-4 bg-card" id="puente-gluteos">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Pont Fessier (Hip Bridge)
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Renforcer les fessiers et les ischio-jambiers, fondamentaux pour la stabilité pelvienne et pour contrer la faiblesse due à la sédentarité.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Allongez-vous sur le dos, genoux pliés et pieds écartés à la largeur des hanches, près des fessiers.</li>
                                            <li>Pressez vos pieds contre le sol. Inspirez.</li>
                                            <li>Expirez et, en serrant les fessiers, soulevez lentement les hanches du sol jusqu'à ce que votre corps forme une ligne droite des épaules aux genoux.</li>
                                            <li>Maintenez la position haute pendant une seconde, en vous assurant que les fessiers sont fortement contractés.</li>
                                            <li>Redescendez lentement les hanches au sol.</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Évitez de trop cambrer le bas du dos. Concentrez-vous sur le travail des fessiers.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#mini-bande" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Mini Bande Élastique (pour l'activation)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="plancha-rodillas" className="border rounded-lg px-4 bg-card" id="plancha-rodillas">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Planche sur Genoux (Modifiée)
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Renforcer l'ensemble du core et apprendre à la colonne à maintenir une position neutre et stable.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Commencez à quatre pattes. Ensuite, descendez les avant-bras au sol (les coudes doivent être directement sous les épaules).</li>
                                            <li>Étendez les jambes vers l'arrière jusqu'à ce que vous soyez en appui sur les genoux.</li>
                                            <li>Le corps doit former une ligne droite de la tête aux genoux. <strong>Ne laissez pas vos hanches s'affaisser ni se lever trop haut</strong>.</li>
                                            <li>Contractez les abdominaux et serrez légèrement les fessiers.</li>
                                            <li>Maintenez cette position pendant <strong>15 à 30 secondes</strong> (ou aussi longtemps que vous pouvez maintenir une bonne forme).</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Imaginez que vous avez un plateau de boissons sur le dos, il doit rester plat et stable.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#coussin-equilibre" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Coussin d'Équilibre (pour la stabilité)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Section 3: Fuerza Funcional */}
                    <section className="slide-up" style={{ animationDelay: "0.3s" }}>
                        <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-primary">
                            🏃‍♀️ Force Fonctionnelle pour la Vie Quotidienne
                        </h2>
                        <p className="mb-6 text-muted-foreground">
                            Effectuez <strong>3 séries</strong> de <strong>10 à 15 répétitions</strong> de chaque exercice.
                        </p>

                        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={activeItem} key={`force-${activeItem}`}>
                            <AccordionItem value="sentadillas" className="border rounded-lg px-4 bg-card" id="sentadillas">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Squats Basiques
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Renforcer les jambes (quadriceps et ischio-jambiers) et les fessiers, améliorant la capacité à se lever et s'asseoir.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Tenez-vous debout, pieds écartés à la largeur des épaules ou légèrement plus larges.</li>
                                            <li>Gardez la poitrine haute et regardez devant vous.</li>
                                            <li>Commencez le mouvement en poussant les hanches vers l'arrière, comme si vous alliez vous asseoir sur une chaise.</li>
                                            <li>Descendez jusqu'à ce que les cuisses soient parallèles au sol (si vous pouvez maintenir la forme) ou aussi bas que confortable, en vous assurant que les genoux suivent la ligne de vos pieds.</li>
                                            <li>Poussez sur les talons pour revenir à la position initiale, en serrant les fessiers en haut.</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Essayez de ne pas laisser vos genoux s'effondrer vers l'intérieur. Gardez le poids réparti sur tout le pied.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#kettlebell" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Kettlebell (pour les squats)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="flexiones-pared" className="border rounded-lg px-4 bg-card" id="flexiones-pared">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Pompes au Mur
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Renforcer les muscles de la poitrine, des épaules et des triceps en toute sécurité, améliorant la force de poussée pour la vie quotidienne.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Tenez-vous face à un mur, à une distance légèrement supérieure à la longueur de votre bras.</li>
                                            <li>Placez les mains sur le mur, un peu plus écartées que la largeur des épaules.</li>
                                            <li>Gardez votre corps en ligne droite des talons à la tête (position de planche).</li>
                                            <li>Pliez lentement les coudes, en rapprochant la poitrine du mur.</li>
                                            <li>Poussez le mur avec force pour revenir à la position initiale, en étendant complètement les bras.</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Si vous voulez plus d'intensité, éloignez-vous du mur. Si vous en voulez moins, rapprochez-vous. Gardez le tronc ferme à tout moment.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#poignees-pompes" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Poignées de Pompes (pour les poignets)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Section 4: Habitudes */}
                    <section className="slide-up" style={{ animationDelay: "0.4s" }}>
                        <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-primary">
                            ✅ L'Habitude – Cohérence Quotidienne
                        </h2>
                        <p className="mb-6 text-muted-foreground">
                            Intégrez ces habitudes simples pour maintenir votre posture au quotidien.
                        </p>

                        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={activeItem} key={`habitudes-${activeItem}`}>
                            <AccordionItem value="marche-consciente" className="border rounded-lg px-4 bg-card" id="marche-consciente">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    La Marche Consciente
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Améliorer la posture dynamique et l'endurance posturale.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Marchez <strong>15 à 30 minutes</strong> par jour.</li>
                                            <li>Pendant la marche, concentrez-vous sur :
                                                <ul className="list-disc pl-6 mt-2">
                                                    <li>Ramener légèrement vos épaules en arrière et vers le bas.</li>
                                                    <li>Regarder droit devant vous (pas vos pieds ni votre téléphone).</li>
                                                    <li>Maintenir une légère tension dans l'abdomen (20-30%).</li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Imaginez qu'un fil tire le sommet de votre tête vers le ciel pendant que vous marchez.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#chaussures-marche" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Chaussures de Marche Active
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="pauses-actives" className="border rounded-lg px-4 bg-card" id="pauses-actives">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    Pauses Actives
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Briser le cycle de la sédentarité et réactiver la circulation.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                                            <li>Si vous travaillez assis, réglez une minuterie pour sonner toutes les <strong>30 à 60 minutes</strong>.</li>
                                            <li>Levez-vous et bougez pendant au moins 2 minutes.</li>
                                            <li>Faites quelques étirements simples comme l'Ouverture des Pectoraux ou des rotations du cou.</li>
                                            <li>Marchez un peu si possible.</li>
                                        </ol>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> "La meilleure posture est la suivante". Changez de position souvent.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#coussin-ergo" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Coussin Ergonomique (pour le bureau)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="hydratation" className="border rounded-lg px-4 bg-card" id="hydratation">
                                <AccordionTrigger className="text-xl font-bold text-accent hover:no-underline">
                                    L'Hydratation
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="mb-4"><strong>Objectif :</strong> Maintenir la santé des disques intervertébraux et des tissus.</p>
                                    <div className="pl-4 border-l-4 border-primary/20">
                                        <p className="mb-4">
                                            Les disques de votre colonne vertébrale sont composés majoritairement d'eau. Une bonne hydratation est essentielle pour qu'ils restent "repulpés" et absorbent les chocs efficacement.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                            <li>Buvez de l'eau régulièrement tout au long de la journée.</li>
                                            <li>Visez environ 1,5 à 2 litres par jour (ajustez selon votre activité et la chaleur).</li>
                                            <li>Commencez la journée par un grand verre d'eau.</li>
                                        </ul>
                                        <div className="bg-secondary/50 p-3 rounded-md italic text-sm">
                                            <strong>Conseil Clé :</strong> Gardez une bouteille d'eau à portée de main pour y penser.
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <Link to="/equipement#gourde" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                                <ShoppingBag size={16} />
                                                Équipement Recommandé : Gourde Inox (pour l'hydratation)
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Guides;
