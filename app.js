function generateRandonNumber(min, max) {
    return Math.floor(Math.random() * (max - min))+min;
}

const app = Vue.createApp(
    {
        data(){
            return {
                monsterHealth : 100,
                playerHealth : 100,
                currentRound : 0,
                winner:'',
                logMessages:[]
            }
        },
        watch:{
            playerHealth(value){
                if (value <= 0 && this.monsterHealth <= 0){
                    this.winner = 'draw'
                } else if(value <= 0){
                    this.winner = 'monster'
                }
            },
            monsterHealth(value){
                if (value <= 0 && this.playerHealth <= 0){
                    this.winner = 'draw'
                } else if(value <= 0){
                    this.winner = 'player'
                }
            }
        },
        computed:{
            monsterBarStyles(){
                if(this.monsterHealth <0){
                    return {width: '0%' }
                }
                return {width: this.monsterHealth + '%' }
            },
            playerBarStyles(){
                if(this.playerHealth <0){
                    return {width: '0%' }
                }
                return {width: this.playerHealth + '%' }
            },
            isSpecialAttackAllowed(){
                return this.currentRound % 3 !== 0
            }
        },
        methods:{
            attackMonster(){
                this.currentRound++
                const attackValue = generateRandonNumber(5,12)
                this.monsterHealth = this.monsterHealth - generateRandonNumber(5,12);
                this.attackPlayer()
                this.addLogMessage('player', 'attack', attackValue )
            }, 
            attackPlayer(){
                const attackValue = generateRandonNumber(8,15)
                this.playerHealth = this.playerHealth - attackValue;
                this.addLogMessage('monster', 'attack', attackValue )
            },
            specialAttack(){
                this.currentRound ++
                const attackValue = generateRandonNumber(10,25)
                this.monsterHealth = this.monsterHealth - generateRandonNumber(10,25)
                this.addLogMessage('player', 'attack', attackValue )
                this.attackPlayer()
            },
            healPlayer(){
                this.currentRound++
                const healValue = generateRandonNumber(8,20)
                if ((this.playerHealth + healValue) > 100){
                    this.playerHealth = 100
                } else{
                    this.playerHealth += healValue
                }
                this.addLogMessage('player', 'heal', healValue )
                this.attackPlayer()
            },
            restartGame(){
                this.playerHealth=100
                this.monsterHealth=100
                this.currentRound=0
                this.winner=''
                this.logMessages = []
            },
            surrender(){
                this.winner = 'monster'
            },
            addLogMessage(who,what,value){
                this.logMessages.unshift({
                    actionBy:who,
                    actionType:what,
                    actionValue:value
                })
            }
        },
    }
);
app.mount('#game')