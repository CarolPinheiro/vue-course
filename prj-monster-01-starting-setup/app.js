function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null
        }
    },
    computed: {
        monsterHealthBar() {
            return { width: this.monsterHealth + '%' }
        },
        playerHealthBar() {
            return { width: this.playerHealth + '%' }
        },
        specialAttackController() {
            return this.currentRound % 3 !== 0 || this.currentRound === 0
        }

    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.attackPlayer()

        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 17)
            this.playerHealth -= attackValue
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(8, 20)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer()
        }
    },
})

app.mount('#game')