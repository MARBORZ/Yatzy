import { YatzyDOM } from "./yatzyDom.js";
import { YatzyLogic } from "./yatzyLogic.js";


const button = document.getElementById('btn-roll')
const yatzyLogic = new YatzyLogic()
const yatzyDOM = new YatzyDOM(yatzyLogic)

// SCOREBOARD
const restartButton = document.getElementById('btn-restart')
const btnNewRound = document.getElementById('btn-new-round');
const scoreItems = document.querySelectorAll('.score-list li[data-category]');

// UX CATEGORY
function UX(){
    yatzyLogic.roll()
}

// UI CATEGORY
const renderScoreboard = () => {
    scoreItems.forEach(item => {
        const category = item.dataset.category;

        if (!category) return;

        const cat  = yatzyLogic.scoreCategories[category];
        const span = item.querySelector('span');

        if(cat.used){
            span.textContent = cat.score;
            item.classList.add('disabled');
        }else {
            span.textContent = '—';
            item.classList.remove('disabled');
        }
    });

    // TOTAL
    const totalSpan = document.getElementById('total-score');
    if (totalSpan) {
        totalSpan.textContent = yatzyLogic.getTotalScores();
    }
    const upperSpan = document.getElementById('upper-score');
    const bonusSpan = document.getElementById('bonus-score');

    if (upperSpan) {
        upperSpan.textContent = yatzyLogic.getUpperSection();
    }

    if (bonusSpan) {
        bonusSpan.textContent = yatzyLogic.getUpperBonus();
    }
}
function renderStats(){
  const totalSpan = document.getElementById('total-score');
  const upperSpan = document.getElementById('upper-score');
  const bonusSpan = document.getElementById('bonus-score');
  const rollsSpan = document.getElementById('stats-rolls');

  if (totalSpan) totalSpan.textContent = yatzyLogic.getTotalScores();
  if (upperSpan) upperSpan.textContent = yatzyLogic.getUpperSection();
  if (bonusSpan) bonusSpan.textContent = yatzyLogic.getUpperBonus();
  if (rollsSpan) rollsSpan.textContent = yatzyLogic.rollLeft;
}
const gameOver = () => {
    const gameOverEl = document.getElementById('game-over');
    const finalScoreEl = document.getElementById('final-score');

    if (yatzyLogic.gameOver) {
        finalScoreEl.textContent = yatzyLogic.getTotalScores();
        gameOverEl.classList.remove('hidden');
    } else {
        gameOverEl.classList.add('hidden');
    }
};
function UI(){
    yatzyDOM.visual()
    renderStats()
    renderScoreboard()
    gameOver()

    // DISABLE ROLL IF GAMEOVER
    button.disabled = yatzyLogic.gameOver
}

restartButton.onclick = () => {
    yatzyLogic.resetGame();
    UI();
};

button.onclick = () => {
    // LOGIC
    UX()

    // DOM
    UI()
}

function bindScoreItemHandlers(){
    scoreItems.forEach(item => {
        item.onclick = () => {
            if (yatzyLogic.gameOver) return;
            if(item.classList.contains('disabled')) return;

            const category = item.dataset.category;
            yatzyLogic.selectCategory(category);
            UI()
        };

    });
}
bindScoreItemHandlers()

// TOGGLE SYSTEM FUNCTIONS
const toggleMouse = () => {
    scoreItems.forEach(item => {
    const category = item.dataset.category
    const span = item.querySelector('span');
    

    item.addEventListener('mouseenter', () => {
        if (yatzyLogic.gameOver) return;
        if (item.classList.contains('disabled')) return;

        const preview = yatzyLogic.previewScore(category);
        span.textContent = preview;
        span.style.opacity = '0.6';
    })

    item.addEventListener('mouseleave', () => {
        if (yatzyLogic.gameOver) return;
        if (item.classList.contains('disabled')) return;

        span.textContent = '—';
        span.style.opacity = '1';
    })
})
}
function toggleSystem(){
    // toggleBoard()
    toggleMouse()
}
toggleSystem()
btnNewRound.onclick = () => {
  yatzyLogic.resetGame();
  UI();
};

