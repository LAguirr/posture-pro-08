# Décacoach - Analyse et Correction Posturale

Bienvenue sur le projet **Décacoach**. Cette application web interactive aide les utilisateurs à analyser leur posture, identifier les zones à risque et obtenir des recommandations d'exercices personnalisées basées sur leur profil (niveau, sport, objectifs, blessures).

## 🚀 Instructions pour lancer le projet

Pour exécuter ce projet localement sur votre machine, suivez ces étapes :

### Prérequis
Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine.

### Installation et Lancement

1.  **Cloner le dépôt** (si ce n'est pas déjà fait) :
    ```bash
    git clone <VOTRE_URL_GIT>
    cd decacoach
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

4.  **Accéder à l'application** :
    Ouvrez votre navigateur et allez à l'adresse indiquée dans le terminal (généralement `http://localhost:8080` ou `http://localhost:5173`).

## 💡 Feedback sur l'implémentation

### Choix Techniques
Le choix s'est porté sur une **application React** (avec Vite et TypeScript).
*   **Pourquoi React ?** : React a été choisi pour sa robustesse, son écosystème riche et sa capacité à gérer efficacement l'état de l'application (comme les réponses au questionnaire et le profil utilisateur). Il permet une structure modulaire et réutilisable des composants.
*   **Autres technologies** : Tailwind CSS pour le stylisme rapide et responsive, et Framer Motion / CSS natif pour les animations.

### Difficultés Rencontrées
Les principaux défis lors du développement ont été :
1.  **Animations et Fluidité** : Créer une expérience utilisateur immersive avec des transitions douces (comme les "flip cards" et les apparitions au défilement) a demandé un travail minutieux sur les animations CSS et la gestion des délais. L'objectif était de rendre l'interface "vivante" sans compromettre la performance.
2.  **Intégration Vidéo Dynamique** : Assurer que la bonne vidéo s'affiche en fonction du niveau de l'utilisateur (Débutant, Intermédiaire, Avancé) a nécessité une structuration précise des données et une logique conditionnelle dans les composants.

## 🌐 Lien vers l'application

Vous pouvez accéder à la version déployée et fonctionnelle de l'application ici :

👉 **[https://decacoach.vercel.app/](https://decacoach.vercel.app/)**
