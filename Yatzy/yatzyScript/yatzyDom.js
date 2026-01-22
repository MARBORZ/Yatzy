export class YatzyDOM{
    constructor(yatzyLogic) {
        this.yatzyLogic = yatzyLogic || {dice: []}
        
        this.visual()
    }

    visual(){
        const dicePNG = {
            1: '1.png',
            2: '2.png',
            3: '3.png',
            4: '4.png',
            5: '5.png',
            6: '6.png',
        }
        const activeContainer = document.querySelector('.yatzy-container')
        const heldContainer = document.querySelector('.my-dice__dice');

        activeContainer.innerHTML = '';
        heldContainer.innerHTML = '';

        const activeUL = document.createElement('ul')
        activeUL.className = 'dice-list'


        const heldUL = document.createElement('ul');
        heldUL.className = 'held-dice-list';


        // ACTIVE DICE
        this.yatzyLogic.dice.forEach((num, index) => {
            if(!num) return;

            const li = document.createElement('li')
            const img = document.createElement('img')

            img.src = `./dice-png/${dicePNG[num]}`
            img.alt = `Dice ${num}`
            img.classList.add('img')

            img.onclick = () => {
                this.yatzyLogic.holdDie(index);
                this.visual()
            }

            li.appendChild(img)
            activeUL.appendChild(li)
        });

        // HELD DICE
        this.yatzyLogic.heldDice.forEach((num, index) => {
            if (!num) return;

            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = `./dice-png/${dicePNG[num]}`;
            img.alt = `Held dice ${num}`;
            img.classList.add('img', 'held');

            
            img.onclick = () => {
                this.yatzyLogic.unholdDie(index);
                this.visual();

                if (this.yatzyLogic.rollLeft === 0) return;
            };

            li.appendChild(img);
            heldUL.appendChild(li);
        });

        activeContainer.appendChild(activeUL);
        heldContainer.appendChild(heldUL);
    }
}