// declarartion
//nom du joueur
const playerName = document.querySelector('.player-charactere-name');
//nom de l'enemy
const enemyName = document.querySelector('.enemy-charactere-name')
    //bouton d'atatck
const buttonAttack1 = document.querySelector('.attack1');
const buttonAttack2 = document.querySelector('.attack2');
const buttonAttack3 = document.querySelector('.attack3');
//h2 texte
const currentAttack = document.querySelector('#currentattack')
    //barres HP
const hpPlayerBar = document.querySelector('.hp-player')
const hpEnemyBar = document.querySelector('.hp-enemy')
    //Personnage
const player = document.querySelector('.player')
console.log(hpEnemyBar);
const enemy = document.querySelector('.enemy')


//fonctionnement attaque joueur

buttonAttack1.addEventListener('click', (e) => {

    //texte signale l'attaque
    currentAttack.innerHTML = `${playerName.innerHTML} lance ${e.target.id}`;
    //mouvement du joueur
    playerAttackMove();
    //degat sur l'enemy
    hpEnemyBar.style.width = '80%'
        //joueur revient a sa position
    resetPlayerPosition();
    //texte h2 suprimmer
    resetAttackText();
    //boutton d'ataque desactivé 
    disableButton();
    // on passe au tour de l'enemy
    playerTurn = 0;
    enemyTurn = 1;
    enemyAttack();
});

//fonctionnement attaque Enemy
function enemyAttack() {
    if (enemyTurn == 1) {

    }
}