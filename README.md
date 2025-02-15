# Automata Frontend Exercise
## Rock, Paper, Scissors, Lizard, Spock

## Overview
This is a modern take on the classic "Rock, Paper, Scissors" game, with two additional choices: **Lizard** and **Spock**.
The extended rules create more possible outcomes, adding depth and strategy to the game.

## Purpose
The purpose of this exercise is to provide you the opportunity to demonstrate how you solve problems and express code. We know that
in person code exercises are highly pressured and artificial, hence why we asked you to perform this exercise at home. The expectation
is that you will use the tools you are comfortable with (stackoverflow, ChatGPT, etc), but you are able to explain and extend the code
(as if this was your job). We don't expect you to be able to remember every method of every class, but we would like to have a
conversation regarding your code.

## Basic Rules
The game is played between two players. Each player chooses one of the five options:
- **Rock**
- **Paper**
- **Scissors**
- **Lizard**
- **Spock**

The winner is determined by the following rules:

| **Choice**   | **Wins Against** | **Reason**                       |
|--------------|------------------|----------------------------------|
| **Scissors** | Paper, Lizard    | Cuts Paper, Decapitates Lizard   |
| **Paper**    | Rock, Spock      | Covers Rock, Disproves Spock     |
| **Rock**     | Scissors, Lizard | Crushes Scissors, Crushes Lizard |
| **Lizard**   | Paper, Spock     | Eats Paper, Poisons Spock        |
| **Spock**    | Scissors, Rock   | Smashes Scissors, Vaporizes Rock |
If both players choose the same option, the game results in a **tie**.

## Features
- **Interactive Gameplay**: Players can select their choice, and the winner is determined based on the rules.
- **Responsive Design**: The game works seamlessly on desktop and mobile devices.
- **Clear Visual Feedback**: Winning and losing outcomes are displayed in an engaging and intuitive way.
- **Scoreboard**: Tracks the points of the user and the computer across multiple rounds.
- **Data Persistence**: Retains the game state and scoreboard within the same browser session.
- **Custom Username**: Allows the user to set a username, which is displayed during the game and on the scoreboard.
- **Restart**: Allows the user to restart the game, clearing the scoreboard and resetting the game state.

## Suggestions

When working on this project, we encourage you to treat the code as if it is intended for a real production environment. Here are some tips to guide you:

- **Code Quality**: Write clean, readable, and maintainable code.
- **Scalability**: Structure your code to allow for easy feature additions or modifications in the future.
- **Version Control**: Use meaningful commit messages that explain the purpose of each change.

---
## Getting Started

### Installation
### Prerequisites

Make sure you have pnpm installed on your system. If not, you can install it with:

```bash
npm install -g pnpm
```

1. Install dependencies:
```bash
pnpm install
```

2. Install required shadcn components:
```bash
npx shadcn@canary init
npx shadcn@canary add card button input alert avatar badge separator alert-dialog
```

3. Start the development server:
```bash
pnpm dev
```
