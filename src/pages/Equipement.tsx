import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag } from "lucide-react";

// Data structure for equipment categories
const equipmentData = [
    {
        id: "mobilite",
        title: "🧘 Mobilité & Souplesse",
        description: "Des accessoires pour approfondir vos étirements et relâcher les tensions.",
        products: [
            {
                id: "tapis-yoga",
                name: "Tapis de Yoga Confort 8mm",
                description: "Indispensable pour tous les exercices au sol. Épaisseur idéale pour protéger les genoux et le dos.",
                price: "25,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-yoga/c3-tapis-de-yoga/_/N-1g434e9"
            },
            {
                id: "brique-yoga",
                name: "Brique de Yoga Liège",
                description: "Vous aide à atteindre le sol si vous manquez de souplesse. Idéal pour l'ouverture des pectoraux.",
                price: "10,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-yoga/c3-briques-sangles-accessoires-yoga/_/N-185w8p3"
            },
            {
                id: "rouleau-massage",
                name: "Rouleau de Massage (Foam Roller)",
                description: "Pour l'automassage du dos et des jambes. Excellent pour la récupération et la mobilité thoracique.",
                price: "15,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/c3-auto-massage/_/N-1k5z6z6"
            },
            {
                id: "balle-massage",
                name: "Balle de Massage",
                description: "Ciblez les points de tension précis (trigger points) dans les pectoraux et les épaules.",
                price: "5,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/c3-auto-massage/_/N-1k5z6z6"
            },
            {
                id: "sangle-yoga",
                name: "Sangle de Yoga",
                description: "Prolongez vos bras pour des étirements plus profonds sans compromettre votre posture.",
                price: "6,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-yoga/c3-briques-sangles-accessoires-yoga/_/N-185w8p3"
            }
        ]
    },
    {
        id: "core",
        title: "💪 Renforcement du Core",
        description: "Matériel pour stabiliser la colonne et renforcer la sangle abdominale.",
        products: [
            {
                id: "swiss-ball",
                name: "Swiss Ball (Ballon de Gym)",
                description: "Instabilité contrôlée pour engager les muscles profonds. Parfait pour s'asseoir ou s'exercer.",
                price: "18,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-pilates/c3-ballons-pilates/_/N-1g65l6v"
            },
            {
                id: "coussin-equilibre",
                name: "Coussin d'Équilibre (Balance Pad)",
                description: "Ajoute de la difficulté à vos planches et exercices debout. Renforce les chevilles et le core.",
                price: "20,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-pilates/c3-accessoires-pilates/_/N-1on75w"
            },
            {
                id: "apis-sol",
                name: "Tapis de Sol Fitness",
                description: "Plus dense qu'un tapis de yoga, idéal pour le gainage et les exercices d'appuis.",
                price: "12,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-fitness-cardio/c3-tapis-de-sol/_/N-1q6n9o"
            },
            {
                id: "mini-bande",
                name: "Mini Bande Élastique (Loop)",
                description: "Indispensable pour activer les fessiers lors du pont fessier ou des pas latéraux.",
                price: "5,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-fitness-cardio/c3-elastiques-de-musculation/_/N-1286k31"
            }
        ]
    },
    {
        id: "force",
        title: "🏋️ Force Fonctionnelle",
        description: "Pour développer la force nécessaire aux gestes du quotidien.",
        products: [
            {
                id: "elastique",
                name: "Bandes Élastiques (3 Résistances)",
                description: "Polyvalentes pour tout le corps. Idéales pour les squats et le renforcement des épaules.",
                price: "7,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-fitness-cardio/c3-elastiques-de-musculation/_/N-1286k31"
            },
            {
                id: "halteres",
                name: "Haltères Vinyle (2x1kg)",
                description: "Ajoutez une charge légère pour vos fentes ou mouvements de bras.",
                price: "10,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/c3-halteres/_/N-1845p6"
            },
            {
                id: "kettlebell",
                name: "Kettlebell 4kg",
                description: "Parfait pour les squats gobelet et le renforcement fonctionnel des jambes et du dos.",
                price: "15,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/c3-kettlebells/_/N-1845p6"
            },
            {
                id: "poignees-pompes",
                name: "Poignées de Pompes",
                description: "Soulagez vos poignets et augmentez l'amplitude de mouvement lors des pompes.",
                price: "10,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/c3-accessoires-bodybuilding/_/N-1845p6"
            }
        ]
    },
    {
        id: "habitudes",
        title: "✅ Habitudes & Quotidien",
        description: "Des objets pour vous accompagner chaque jour vers une meilleure posture.",
        products: [
            {
                id: "chaussures-marche",
                name: "Chaussures Marche Active",
                description: "Souples et confortables pour vos 30 minutes de marche quotidienne.",
                price: "35,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-marche-sportive/c3-chaussures-marche-sportive/_/N-1g434e9"
            },
            {
                id: "gourde",
                name: "Gourde Inox 1L",
                description: "L'alliée de vos disques intervertébraux. Garde l'eau fraîche toute la journée.",
                price: "12,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-randonnee-trek/c3-gourdes-poches-a-eau/_/N-1g434e9"
            },
            {
                id: "montre",
                name: "Montre Connectée / Podomètre",
                description: "Pour suivre vos pas et programmer vos rappels de 'Pauses Actives'.",
                price: "25,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-electronique/c3-montres-connectees/_/N-1g434e9"
            },
            {
                id: "coussin-ergo",
                name: "Coussin Ergonomique Assise",
                description: "Améliore votre posture assise et soulage le coccyx lors des longues journées de travail.",
                price: "20,00 €",
                link: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-pilates/c3-accessoires-pilates/_/N-1on75w"
            }
        ]
    }
];

const Equipement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container px-4 py-24 mx-auto max-w-6xl">
                <div className="text-center mb-16 slide-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
                        🛍️ Équipement Recommandé
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Une sélection de produits Decathlon pour optimiser votre routine posturale.
                    </p>
                </div>

                <div className="space-y-20">
                    {equipmentData.map((category, catIndex) => (
                        <section key={category.id} id={category.id} className="slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                            <div className="mb-8 border-b pb-4">
                                <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                                    {category.title}
                                </h2>
                                <p className="text-muted-foreground mt-2">{category.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.products.map((product, prodIndex) => (
                                    <Card key={product.id} id={product.id} className="group hover:shadow-lg transition-all duration-300 border-primary/10 overflow-hidden flex flex-col h-full">
                                        <div className="aspect-video bg-secondary/20 relative overflow-hidden flex items-center justify-center">
                                            <ShoppingBag size={48} className="text-muted-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="flex justify-between items-start gap-2 text-lg">
                                                <span>{product.name}</span>
                                                <span className="text-base font-bold text-primary whitespace-nowrap">{product.price}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-muted-foreground">{product.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild className="w-full bg-[#0082C3] hover:bg-[#0082C3]/90 text-white">
                                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                    Voir sur Decathlon <ExternalLink size={16} />
                                                </a>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Equipement;
