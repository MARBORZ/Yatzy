export class YatzyLogic{
    constructor(){
        this.dice = [];
        this.heldDice = [];

        this.rollLeft = 3
        this.gameOver = false
        
        this.UPPER_BONUS_THRESHOLD = 63;
        this.UPPER_BONUS_SCORE = 50;

        this.scoreCategories = {
            ones:  { score: null, used: false },
            twos:  { score: null, used: false },
            threes:{ score: null, used: false },
            fours: { score: null, used: false },
            fives: { score: null, used: false },
            sixes: { score: null, used: false },

            pair:         { score: null, used: false },
            twoPairs:     { score: null, used: false },
            threeOfKind:  { score: null, used: false },
            fourOfKind:   { score: null, used: false },
            fullHouse:    { score: null, used: false },
            smallStraight:{ score: null, used: false },
            largeStraight:{ score: null, used: false },
            yatzy:        { score: null, used: false },
            chance:       { score: null, used: false },
        };

        this.scorers = {
            ones:  () => this.scoreOnes(),
            twos:  () => this.scoreTwos(),
            threes:() => this.scoreThrees(),
            fours: () => this.scoreFours(),
            fives: () => this.scoreFives(),
            sixes: () => this.scoreSixes(),

            pair:         () => this.scorePair(),
            twoPairs:     () => this.scoreTwoPairs(),
            threeOfKind:  () => this.scoreThreeOfKind(),
            fourOfKind:   () => this.scoreFourOfKind(),
            fullHouse:    () => this.scoreFullHouse(),
            smallStraight:() => this.scoreSmallStraight(),
            largeStraight:() => this.scoreLargeStraight(),
            yatzy:        () => this.scoreYatzy(),
            chance:       () => this.scoreChance(),
        };
    }

    roll() {
        if (this.gameOver) return;
        if (this.rollLeft === 0) return;

        for(let i = 0; i < this.dice.length; i++){
            this.dice[i] = Math.floor(Math.random() * 6) + 1;
        }

        if(this.dice.length === 0 && this.heldDice.length === 0){
            this.dice = Array.from({length: 5}, () => {
                return Math.floor(Math.random() * 6) + 1
            })
        }

        this.rollLeft--
    }

    getAllDice(){
        return [...this.dice, ...this.heldDice];
    }

    resetRound(){
        this.rollLeft = 3;
        this.heldDice = [];
        this.dice = [];
    }

    previewScore(category){
        const cat = this.scoreCategories[category]
        if(!cat) return 0;
        if (cat.used) return cat.score ?? 0;

        return this.scorers[category]?.() ?? 0;
    }
    
    getTotalScores(){
        const baseScore = Object.values(this.scoreCategories)
        .filter(cat => cat.used)
        .reduce((sum, cat) => sum + (cat.score ?? 0), 0);

        return baseScore + this.getUpperBonus();
    }

    getUpperSection(){
        const upperCategories = ['ones','twos','threes','fours','fives','sixes'];

        return upperCategories
        .map(key => this.scoreCategories[key])
        .filter(cat => cat.used)
        .reduce((sum,cat) => sum + (cat.score ?? 0), 0)
    }

    getUpperBonus(){
        const upperScore = this.getUpperSection()

        if (upperScore >= this.UPPER_BONUS_THRESHOLD){
            return this.UPPER_BONUS_SCORE
        }

        return 0
    }

    scoreUpper(value){
        const counts = this.getCounts()
        return counts[value - 1] * value
    }
    
    scoreOnes(){ return this.scoreUpper(1); }
    scoreTwos(){ return this.scoreUpper(2); }
    scoreThrees(){ return this.scoreUpper(3); }
    scoreFours(){ return this.scoreUpper(4); }
    scoreFives(){ return this.scoreUpper(5); }
    scoreSixes(){ return this.scoreUpper(6); }


    holdDie(index){
        if(!this.canToggleHold()) return;

        const value = this.dice[index]
        if(value === undefined) return;
        this.heldDice.push(value)
        this.dice.splice(index, 1)
    }

    unholdDie(index){
        if (!this.canToggleHold()) return;

        const value = this.heldDice[index];
        if (value === undefined) return;

        this.dice.push(value);
        this.heldDice.splice(index, 1);
    }

    canToggleHold(){
        return !this.gameOver && this.rollLeft > 0
    }

    getCounts(){
        const counts = Array(6).fill(0)

        for(const value of this.getAllDice()){
            counts[value - 1]++
        }

        return counts
    }

    scorePair(){
        const counts = this.getCounts()
        for(let i = 5; i >= 0; i--){
            if(counts[i] >= 2){
                return (i + 1) * 2
            }
        }
        return 0
    }

    scoreTwoPairs(){
        const counts = this.getCounts()
        const pairs = []

        for(let i = 5; i >= 0; i--){
            if(counts[i] >= 2){
                pairs.push((i + 1) * 2)
            } 


            if(pairs.length === 2){
                return pairs[0] + pairs[1]
            }
        }

        return 0
    }

    scoreThreeOfKind(){
        const counts = this.getCounts()
        for(let i = 5; i >= 0; i--){
            if(counts[i] >= 3){
                return (i + 1) * 3
            }
        }
        return 0
    }

    scoreFourOfKind(){
        const counts = this.getCounts()
        for(let i = 5; i >= 0; i--){
            if(counts[i] >= 4){
                return (i + 1) * 4
            }
        }
        return 0
    }

    scoreFullHouse(){
        const counts = this.getCounts()
        let twoValue;
        let threeValue;

        for(let i = 5; i >= 0; i--){
            if(counts[i] === 2){
                twoValue = (i + 1) * 2
            } 
            if(counts[i] === 3){
                threeValue = (i + 1) * 3
            }
        }

        if(threeValue && twoValue){
            return threeValue + twoValue
        }
        return 0
    }

    scoreSmallStraight(){
        const counts = this.getCounts()
        for(let i = 0; i <= 4; i++){
            if (counts[i] === 0) {
                return 0;
            }
        }
        return 15
    }
    
    scoreLargeStraight(){
        const counts = this.getCounts();
        for (let i = 1; i <= 5; i++) {
            if (counts[i] === 0) {
                return 0;
            }
        }

        return 20;
    }

    scoreYatzy(){
        const counts = this.getCounts();
        for (let i = 0; i < 6; i++) {
            if (counts[i] === 5) {
                return 50;
            }
        }

        return 0;
    }

    scoreChance(){
        return this.getAllDice().reduce((sum, value) => sum + value, 0);
    }

    selectCategory(category){
        const cat = this.scoreCategories[category];
        if(!cat || cat.used) return;

        const scorer = this.scorers[category]
        if(!scorer) return;
        
        const points = scorer()

        cat.score = points
        cat.used = true

        if(this.checkGameOver()){
            this.gameOver = true
        }


        this.resetRound()

    }

    checkGameOver(){
        const categories = Object.values(this.scoreCategories)
        return categories.every(cat => cat.used === true)
    }
    
    resetGame(){
        this.resetRound()
        this.gameOver = false

        for(const key in this.scoreCategories){
            this.scoreCategories[key].score = null
            this.scoreCategories[key].used = false
        }
    }
}