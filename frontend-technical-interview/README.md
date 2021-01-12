# Entretient technique pour dévelopeur frontend React

L'objectif de ces exercices est de confronter un candidat au poste de développeur fontend React à des cas d'usages / bugs usuels dans un environement simplifé.

On estime entre une et deux heures le temps nécessaire pour réaliser tous les excercices. Cela comprend le temps nécessaire de découverte de l'application.

## Les règles du TicTacToe

Le TicTacToe (ou Morpion) est un jeu ou deux personnes doivent poser des pions pour essayer de réaliser des lignes horizontales, vertivales ou diagonales. Le joueur en réussissant une à gagner la partie.

Le joueur utilisant les pions "x" commence toujours.

## Exercices

Les exercices peuvent tous être résolus indépendamment les un des autres. L'ordre proposé permer de découvrir progressivement l'application.

Dans la section "Comment réaliser ces exercices", vous trouverez de l'aide pour démarrer les exercices.

### Exercice 1 (niveau 1) : 🎨 Le style c'est la vie

Mettre en évidence la case survolée par le joueur en cours. Lorsqu'il survole une case changer la couleur du fond de la case par `#3E5770`.

Mais attention, uniquement lorsque qu'une partie est en cours !

### Exercice 2 (niveau 2) : ♻ Et si on rejouait ?

Ajouter en dessous du plateau de jeu un boutton permettant de recommencer une partie sans avoir à rafraîchir la page.

### Exercice 3 (niveau 2) : ♟ Echec et mat... ou pas

Lorsque toutes les cases du plateau de jeu sont remplies:

- soit l'un des deux joueurs a gagné,
- soit c'est c'est match nul.

Modifier l'application pour afficher le message "_C'est un match nul! Une autre partie ?_" en dessous du plateau de jeu en cas d'égalité.

### Exercice 4 (niveau 3) : 🔎 Prouve moi que j'ai gagné !

Dans le cas où un joueur gagne la partie, mettre en évidence les cases qui lui ont permis de gagner. Pour cela changer la couleur des cases gagnantes pour y mettre un fond de la couleur `#2a9d8f`.

### Exercice 5 (niveau 3) : ↘ Tout va de travers !

Vous l'avez peut-être remarqué : l'application ne détecte pas les diagonales lors d'une partie. Ajouter la détection des diagonales dans le moteur de résolution victoire du jeu.

## Comment réaliser ces exercices

Pour realiser ces exercices, vous pouvez :
- forker le repository github et travailler sur votre version,
- cloner le projet directement sur votre machine,
- [lancer le projet dans CodeSandbox](https://githubbox.com/gogaille/job/blob/main/frontend-technical-interview).

Quand vous aurez terminé, il suffit de nous partager le code source modifié : soit un repository git, soit un lien de votre projet CodeSandbox (boutton "Share" bleu en haut à droite de l'interface).
