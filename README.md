# 🎲 Yatzy Game (Vanilla JavaScript)

This repository contains a browser-based implementation of the classic **Yatzy** dice game, built using **vanilla JavaScript**, HTML, and CSS.
The project focuses on clean architecture, clear separation of concerns, and readable, maintainable code.

## 📌 Overview

Yatzy is a turn-based dice game where the player rolls five dice and scores points in different categories.
This implementation was created as a learning-focused project, emphasizing **game logic design**, **state management**, and **DOM interaction without frameworks**.

## 🧠 Architecture

The project is divided into two main layers:

### Logic Layer (`YatzyLogic`)

Handles:

* Dice rolling and holding mechanics
* Roll limits per round
* Score calculation for all Yatzy categories
* Upper section bonus logic
* Overall game state (used categories, game over state)

### UI Layer (`YatzyDOM`)

Handles:

* Visual rendering of dice
* Scoreboard updates
* User interactions (clicks, holds, resets)
* Synchronization between logic and UI

This separation keeps the code modular, testable, and easy to extend.

## 🎮 Game Rules (Simplified)

* The player rolls **5 dice**
* Each round allows up to **3 rolls**
* Dice can be held between rolls
* One scoring category must be selected per round
* Each category can be used only once
* A bonus is awarded if the upper section reaches the required score
* The game ends when all categories are filled

## 🛠️ Technologies

* JavaScript (ES6+)
* HTML5
* CSS3
* No external libraries or frameworks

## 🚀 Features

* Interactive dice with hold/unhold functionality
* Full Yatzy scoring system
* Upper section bonus handling
* Dynamic scoreboard updates
* New game / reset functionality
* Clean, modular project structure

## 👤 Author

Developed by **Amadi Masuev**
This project is part of a personal portfolio and demonstrates solid fundamentals in JavaScript, frontend architecture, and game logic implementation.
