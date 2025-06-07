# Cocktail Party App 🍸

Application pour gérer les commandes de cocktails lors d'une soirée.

## Interfaces

- `Invite.html` : interface invité
- `Barman.html` : interface barman

## Fonctionnalités

- Commandes en temps réel (Firebase)
- Suivi, archive, statistiques
- Mobile-friendly

## Déploiement

Hébergé avec GitHub Pages.

## Configuration

Les deux pages utilisent Firebase pour stocker les commandes. Mettez à jour la configuration avec vos propres identifiants si nécessaire. La configuration actuelle est la suivante :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAJgaCZPrOPTs8HKg3m0R18HMTelswptPc",
  authDomain: "cocktail-party-app.firebaseapp.com",
  projectId: "cocktail-party-app",
  databaseURL: "https://cocktail-party-app.firebaseio.com",
  storageBucket: "cocktail-party-app.appspot.com",
  messagingSenderId: "640315174912",
  appId: "1:640315174912:web:fccbf0b5a1db5beaee68e5",
  measurementId: "G-DF8F0YDD21"
};
```

## Développement

Le fichier `.gitignore` évite d'archiver `node_modules` et autres fichiers
temporaires. Placez vos dépendances dans ce dossier si vous ajoutez un outillage
JavaScript.
