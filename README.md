# 🎲 Yatzy Game (JavaScript)

Yatzy dice game in vanilla JavaScript. Roll dice, pick categories, get points.

---

## 📖 About the Game

Yatzy is a dice game. Goal is to score high by picking the right categories for your dice rolls.

- One game with 15 categories
- Each category used once
- Game ends when all categories are filled

---

## 🎮 How to Play (Rules Used in This Project)

### 🎲 Dice & Rounds
- You roll **5 dice**
- You have **up to 3 rolls per round**
- After each roll, you may **hold dice** you want to keep
- Held dice are not rolled again
- After choosing a category, the round resets

---

### 🧮 Scoring Categories

#### Upper Section
| Category | Rule |
|--------|------|
| Ones – Sixes | Sum of dice with that value |

**Upper Bonus**
- If the total upper score is **63 or more**, you receive a **+50 bonus**
- Bonus is added automatically to the total score
- You can select categories out of order (modern rules)

---

#### Lower Section
| Category | Rule |
|--------|------|
| Pair | Highest pair |
| Two Pairs | Two different pairs |
| Three of a Kind | Three equal dice |
| Four of a Kind | Four equal dice |
| Full House | One pair + three of a kind |
| Small Straight | 1–2–3–4–5 |
| Large Straight | 2–3–4–5–6 |
| Yatzy | Five equal dice (50 points) |
| Chance | Sum of all dice |

---

### 🏁 Game Over
- The game ends when **all categories are used**
- A **Game Over screen** appears
- Final score includes:
  - All selected category scores
  - Upper section bonus (if earned)

---

## 🧠 Technical Highlights

- Clear separation of concerns:
  - `YatzyLogic` — game rules & scoring
  - `YatzyDOM` — rendering & UI updates
- No frameworks — **pure JavaScript**
- Fully deterministic scoring logic
- Responsive layout with adaptive dice scaling
- Clean state reset and restart handling

---

## 🚀 How to Run

Simply open `index.html` in a browser  
(or use a local server for ES modules)

---

## 👤 Author

**Created by:**  
**Amadi Masuev**

This project was designed and implemented as a complete, structured Yatzy game with clean architecture and classic rules.

---

## ✅ Status

✔ Project complete  
✔ Fully playable  
✔ Ready for deployment

