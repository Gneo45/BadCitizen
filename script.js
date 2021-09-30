//----------------------------------------------------------------------------------------//
//--------------------------------SOMMAIRES------------------------------------//
//---------------------------------------------------------------------------------------//
//-VARIABLE:
//--------NOM DES JOUEURS
//--------STATS JOUEUR
//--------STATS ENNEMI
//--------BOUTTONS
//--------AFFICHAGE DES TEXTES
//--------AFFICHAGE PERSONNAGE
//--------SELECTION DES PERSONNAGE
//-UTILITIES
//-LISTE DES ENNEMIS
//-LISTE DES HEROS
//-FONCTIONS:
//--------randomEnemy (selectionne aleatoirement un ennemi)
//--------startGame (Phase de jeux 1er tour)
//--------buttonAttack (phase d'attaque du joueur)
//--------enemyTurn (phase d'attaque de l'ennemi)
//--------playerAttackMove (deplacement du joueur lors de l'attaque)
//--------enemyAttackMove (deplacement de l'ennemi lors de l'attaque)
//--------resetPlayerPosition (joueur revient a sa position après l'attaque)
//--------resetEnemyPosition (ennemi revient a sa position après l'attaque)
//--------resetAttackText (UI se vide apres l'attaque)
//--------resetCommentary (UI se vide apres l'attaque)
//--------disableButton (Boutton d'attaque désactivé en dehors de la phase d'attaque du joueur)
//--------enableButton(Boutton d'attaque activé phase d'attaque du joueur)
//--------ready (Texte UI)
//--------fight (Texte UI)
//--------removefight (Texte UI)
//--------setPlayerWin (Le joueur gagne)
//--------setEnemyWin (Le joueur perd)
//--------playerDeath (animation mort du joueur)
//--------enemyDeath (animation mort de l'ennemi)
//--------setGameOver (fin de parti )
//--------resetEnemy (remise a zero des stats ennemi pour ennemi suivant )
//--------gameLoose (Config UI en cas de defaite du joueur)
//--------heroSelection (Selection des heros ecran d'acueil)


//----------------------------------------------------------------------------------------//
//--------------------------------VARIABLE-------------------------------------------------//
//---------------------------------------------------------------------------------------//

//--------------------NOM DES JOUEURS-----------------//
const playerName = document.querySelector('.player-charactere-name');
const enemyName = document.querySelector('.enemy-charactere-name');
//----------------------STATS JOUEUR--------------------//
const hpContainer = document.querySelector('.hpCount')
const spContainer = document.querySelector('.spCount')
const hpPlayerBar2 = document.querySelector('.player-bar');
const playerMaxHP = document.querySelector('.playerMaxHP');
const playerMaxSP = document.querySelector('.playerMaxSP');
const hpPlayerBar = document.querySelector('.hp-player');
const spPlayerBar = document.querySelector('.sp-player');
let currentPlayerHP = document.querySelector('.currentPlayerHP');
let currentPlayerSP = document.querySelector('.currentPlayerSP');

//----------------------STATS ENNEMI---------------//
const hpEnemyBar2 = document.querySelector('.enemy-bar');
const enemyMaxHP = document.querySelector('.enemyMaxHP');
const enemyMaxSP = document.querySelector('.enemyMaxSP');
const hpEnemyBar = document.querySelector('.hp-enemy');
const spEnemyBar = document.querySelector('.sp-enemy');
let currentEnemyHP = document.querySelector('.currentEnemyHP');
let currentEnemySP = document.querySelector('.currentEnemySP');
//---------------------BOUTTONS----------------//
const startGameBtn = document.querySelector('.startGameBtn-Btn')
const divStartBtn = document.querySelector('.startGame')
const btnAttackContainer = document.querySelector('.player-attack');
const btnEnemyContainer = document.querySelector('.enemy-attack');
const buttonAttack = document.querySelectorAll('.attack-btn');
const buttonAttack1 = document.querySelector('.attack1');
const buttonAttack2 = document.querySelector('.attack2');
const buttonAttack3 = document.querySelector('.attack3');
//-----------------------AFFICHAGE DES TEXTES--------------------//
const phaseText = document.querySelector('.phasetext')
const currentAttack = document.querySelector('#currentattack');
const commentary = document.querySelector('#commentary')
const choixHeroTexte = document.querySelector('.choixHeros')
const gameTitle = document.querySelector('.gameTitle')
    //---------------------AFFICHAGE PERSONNAGE---------//
const player = document.querySelector('.player');
const enemy = document.querySelector('.enemy');


//-----------------SELECTION DES PERSONNAGE---------//
const hero1Face = document.querySelector('.hero1-face ')
const hero2Face = document.querySelector('.hero1-face ')
const hero3Face = document.querySelector('.hero1-face ')
const hero4Face = document.querySelector('.hero1-face ')
const heroSelection = document.querySelectorAll('.Selection')
const characterSelectionContainer = document.querySelector('.character-selection')
const characterContainer = document.querySelector('.charactere-container')
    //------------------UTILITIES------------------------//
let heroChoisi;
let ReadyToGo = 0;
let selectedEnemy;
let EnemyAssets;
let HeroAssests;


//----------------------------------------------------------------------------------------//
//------------------------LISTE DES ENNEMIS , ATTAQUES ET STATISTIQUES--------------------//
//---------------------------------------------------------------------------------------//


EnemyList = [
    EnemyStatsCRS = {
        name: "CRS 1A",
        defaultHP: 40,
        hp: 40,
        precision: 100,
        sp: 60,
        defaultSP: 60,
        rewardHp: 15,
        rewardSp: 30,
        assets: "assets/crs.png",
        AttacEnemy: [
            ["matraque", [15],
                ["Boink!"],
                [5]
            ],
            ["Lacrimo", [18],
                ["C'est pas les oignons"],
                [7]
            ],
            ["Amende de stationnement", [5],
                ["ce n'est pas très efficace"],
                [3]
            ]
        ]

    },

    EnemyStatsOfficier = {
        name: "Officer",
        defaultHP: 50,
        hp: 50,
        precision: 100,
        sp: 60,
        defaultSP: 60,
        rewardHp: 20,
        rewardSp: 30,
        assets: "assets/blacops.png",
        AttacEnemy: [
            ["Tire à balles réel", [30],
                ["Planquez vous!!!"],
                [30]
            ],
            ["balayette", [20],
                ["on fait comme ca dans le 93"],
                [10]
            ],
            ["Torture", [15],
                ["Comme a gwantanamo"],
                [12]
            ]
        ]
    },
    EnemyStatsMacron = {
        name: "Macronus",
        defaultHP: 100,
        hp: 100,
        precision: 100,
        sp: 100,
        defaultSP: 100,
        rewardHp: 40,
        rewardSp: 40,
        assets: "assets/macronus.png",
        AttacEnemy: [
            ["Disquette", [20],
                ["C'est notre projet!!!"],
                [10]
            ],
            ["49.3", [28],
                ["toute résistance est vaine!"],
                [15]
            ],
            ["Brigitte!!!!", [40],
                ["faut pas pousser mémé dans les orties"],
                [35]
            ]
        ]
    },
    EnemyStatsDevil = {
        name: "Boucher",
        defaultHP: 110,
        hp: 110,
        precision: 100,
        sp: 120,
        defaultSP: 120,
        rewardHp: 60,
        rewardSp: 60,
        assets: "assets/boucher.png",
        AttacEnemy: [
            ["Attaque au couteau", [35],
                ["aaaaaaaahhhh!!"],
                [30]
            ],
            ["Dénervation", [20],
                ["Calme toi!"],
                [10]
            ],
            ["Viande haché", [30],
                ["je m'en bat les steack!"],
                [27]
            ]
        ]
    },
    EnemyStatsMelanchonus = {
        name: "Melanchonus",
        defaultHP: 100,
        hp: 100,
        precision: 100,
        sp: 100,
        defaultSP: 100,
        rewardHp: 35,
        rewardSp: 45,
        assets: "assets/melanchonus.png",
        AttacEnemy: [
            ["La république c'est moi!", [20],
                ["Vous êtes convoqué à un procés"],
                [10]
            ],
            ["Ché Guevara!", [25],
                ["Qué viva la révolution"],
                [15]
            ],
            ["Débat d'idées", [10],
                ["Vous êtes étourdi"],
                [5]
            ]
        ]
    },
    EnemyStatsRomain = {
        name: "Romain",
        defaultHP: 80,
        hp: 80,
        precision: 100,
        sp: 100,
        defaultSP: 100,
        rewardHp: 20,
        rewardSp: 30,
        assets: "assets/roman.png",
        AttacEnemy: [
            ["Miroir incassable", [15],
                ["C'est celui qui dit qui y est"],
                [10]
            ],
            ["Je vais le dire à Maman", [5],
                ["Gare à la féssé"],
                [5]
            ],
            ["Cri strident", [20],
                ["Vous devriez peut être abandonner"],
                [20]
            ]
        ]
    },
    EnemyStatsMassai = {
        name: "Massaï",
        defaultHP: 90,
        hp: 90,
        precision: 100,
        sp: 200,
        defaultSP: 200,
        rewardHp: 45,
        rewardSp: 45,
        assets: "assets/massai.png",
        AttacEnemy: [
            ["Etuit penien", [35],
                ["Bonk!"],
                [40]
            ],
            ["Danse de la victoire", [25],
                ["et ça fait zoumba kafeo"],
                [20]
            ],
            ["Coup de Lance", [15],
                ["C'est très efficace"],
                [15]
            ]
        ]
    },
    EnemyStatsVSoldier = {
        name: "Vaccinated Soldier",
        defaultHP: 90,
        hp: 90,
        precision: 100,
        sp: 100,
        defaultSP: 100,
        rewardHp: 30,
        rewardSp: 60,
        assets: "assets/vaccinatedsoldier.png",
        AttacEnemy: [
            ["Vaccination forcée", [15],
                ["petit,petit"],
                [15]
            ],
            ["Passe sanitaire", [10],
                ["Vous etes bloqué"],
                [5]
            ],
            ["Loi martial", [17],
                ["C'est pour votre bien !"],
                [15]
            ]
        ]
    },


]


//----------------------------------------------------------------------------------------//
//------------------------LISTE DES HEROS , ATTAQUES ET STATISTIQUES--------------------//
//---------------------------------------------------------------------------------------//
HeroList = [
    Hero1 = {
        name: "Knight",
        defaultHP: 130,
        hp: 130,
        precision: 100,
        sp: 130,
        defaultSP: 130,
        attackHero: [
            ["Coup d'épé", [35],
                ["Et pas dans l'eau"],
                [30]
            ],
            ["Charge", [30],
                ["Chargez!!!!"],
                [20]
            ],
            ["Bouclier", [20],
                ["Vous ne passerez pas !"],
                [15]
            ]
        ],
        precision: 100,

        assets: "assets/knight.png",
    },

    Hero2 = {
        name: "Angry Grandpa",
        defaultHP: 100,
        hp: 100,
        precision: 100,
        sp: 130,
        defaultSP: 130,
        attackHero: [
            ["Chevrotine", [30],
                ["C'est chez moi ici !!"],
                [30]
            ],
            ["Histoire ancienne", [25],
                ["L'ennemi baille à s'en decrocher la machoire"],
                [10]
            ],
            ["Dentier", [15],
                ["Dent pour dent "],
                [10]
            ]
        ],
        precision: 100,
        assets: "assets/AngryGrandpa.png",
    },

    Hero3 = {
        name: "Abandonned Student",
        defaultHP: 130,
        hp: 130,
        precision: 100,
        sp: 100,
        defaultSP: 100,
        attackHero: [
            ["Pavés", [30],
                ["Sous les pavés, la plage."],
                [30]
            ],
            ["Coup de latte", [20],
                ["JCVD c'est hon héro!"],
                [15]
            ],
            ["oeufs pourris", [10],
                ["Qui c'est qu'a pété?"],
                [5]
            ]
        ],
        precision: 100,
        assets: "assets/hero4.png",
    },
    Hero4 = {
        name: "Evan",
        defaultHP: 100,
        hp: 100,
        precision: 100,
        sp: 100,
        defaultSP: 100,
        attackHero: [
            ["Coup de pied", [30],
                ["Aîïiieuh"],
                [30]
            ],
            ["Relou2000", [28],
                ["C'est insuportable!"],
                [20]
            ],
            ["Prout", [10],
                ["Qui c'est qu'a pété?"],
                [5]
            ]
        ],
        precision: 100,

        assets: "assets/evan2.png",
    },
];

//----------------------------------------------------------------------------------------//
//------------------------SELECTION RANDOM D'UN ENNEMI-----------------------------------//
//---------------------------------------------------------------------------------------//

function randomEnemy() {
    selectedEnemy = EnemyList[(Math.floor(Math.random() * 8))]
    EnemyAssets = selectedEnemy.assets;
    currentEnemyHP.innerHTML = selectedEnemy.hp
}

//------//----------------------------------------------------------------------------------//
//------------------------DEBUT DU JEU , APPARITION DE L'UI-------------------------------//
//---------------------------------------------------------------------------------------//*

disableButton();

function startGame() {
    startGameBtn.addEventListener('click', () => {

        enemy.style.backgroundImage = ''
        randomEnemy();
        resetEnemy();

        currentAttack.style.color = "red";
        //Display
        choixHeroTexte.classList.add('delete')
        gameTitle.classList.add('delete')
        characterContainer.classList.remove('delete');
        phaseText.classList.remove('invisible');
        characterSelectionContainer.classList.add('delete')
            //nom
        playerName.classList.remove('invisible');
        enemyName.classList.remove('invisible');
        //HP ET SP 
        hpContainer.classList.remove('invisible');
        spContainer.classList.remove('invisible');
        currentPlayerHP.classList.remove('invisible');
        currentPlayerSP.classList.remove('invisible');
        currentEnemyHP.classList.remove('invisible');
        currentEnemySP.classList.remove('invisible');
        playerMaxHP.classList.remove('invisible');
        playerMaxSP.classList.remove('invisible');
        enemyMaxHP.classList.remove('invisible');
        enemyMaxSP.classList.remove('invisible');

        hpPlayerBar.classList.remove('invisible');
        spPlayerBar.classList.remove('invisible');
        hpPlayerBar2.classList.remove('invisible');

        hpEnemyBar.classList.remove('invisible');
        spEnemyBar.classList.remove('invisible');
        hpEnemyBar2.classList.remove('invisible');
        //Joueur et ui
        player.classList.remove('invisible');
        enemy.classList.remove('invisible');
        btnAttackContainer.classList.remove('invisible');
        btnEnemyContainer.classList.remove('invisible');
        currentAttack.classList.remove('invisible');
        commentary.classList.remove('invisible');
        startGameBtn.classList.add('delete');
        //enemy display
        enemy.style.backgroundImage = "url(" + EnemyAssets + ")";
        enemyName.innerHTML = selectedEnemy.name
        enemyMaxHP.innerHTML = "/" + selectedEnemy.defaultHP
        enemyMaxSP.innerHTML = "/" + selectedEnemy.defaultSP
        currentEnemyHP.innerHTML = selectedEnemy.defaultHP
        currentEnemySP.innerHTML = selectedEnemy.defaultSP
        hpEnemyBar.style.width = "100%"
        spEnemyBar.style.width = "100%"
            //hero display
        player.style.backgroundImage = "url(" + HeroAssests + ")";

        setTimeout(fight, 1000);
        setTimeout(removefight, 2000);
        setTimeout(enableButton, 3000);

    });
}

startGame();

//----------------------------------------------------------------------------------------//
//------------------------PHASE D'ATTAQUE DU JOUEUR--------------------------------------//
//---------------------------------------------------------------------------------------//

buttonAttack.forEach((btn) => {

    btn.addEventListener('click', (e) => {

        attackChoisie = heroChoisi.attackHero[e.target.id][0];
        damage = parseInt(heroChoisi.attackHero[e.target.id][1]);
        spConsume = parseInt(heroChoisi.attackHero[e.target.id][3]);

        //SI ASSEZ DE MP
        if (spConsume <= currentPlayerSP.innerHTML) {
            //COMMENTAIRE SIGNALE L'ATTAQUE
            currentAttack.innerHTML = heroChoisi.name + " lance " + attackChoisie;
            commentary.innerHTML = heroChoisi.attackHero[e.target.id][2];
            //LE JOUEUR SE DEPLACE
            playerAttackMove();
            //LE NOMBRE DE HP ENNEMIE DIMINUE 
            selectedEnemy.hp -= damage;
            if (currentEnemyHP.innerHTML > damage) {
                currentEnemyHP.innerHTML -= damage;
                hpEnemyBar.style.width = ((selectedEnemy.hp / selectedEnemy.defaultHP) * 100) + "%"
            } else {
                currentEnemyHP.innerHTML = '0';
                hpEnemyBar.style.width = '0';
            };

            //LA BARRE DE SP DIMINUE 
            heroChoisi.sp -= spConsume
            currentPlayerSP.innerHTML -= spConsume;
            spPlayerBar.style.width = ((parseInt(currentPlayerSP.innerHTML) / heroChoisi.defaultSP) * 100) + "%"
            console.log(((heroChoisi.sp / heroChoisi.defaultSP) * 100));
            //Reset de l'ui
            resetPlayerPosition();
            resetAttackText();
            resetCommentary();
            disableButton();
            //Tour ennemi ou fin de partie?
            if (selectedEnemy.hp > 0) {
                setTimeout(enemyTurn, 2000);
            } else {
                setGameOver();
                setPlayerWin();
            }


        } else {
            currentAttack.innerHTML = "Pas assez de sp"
        }

        if (heroChoisi.sp < heroChoisi.attackHero[0][3] && heroChoisi.sp < heroChoisi.attackHero[1][3] && heroChoisi.sp < heroChoisi.attackHero[2][3]) {
            currentAttack.innerHTML = "Vous n'avez pas su gerer votre energie..."
            setEnemyWin();
            commentary.innerHTML = ''
            gameLoose();

        }


    });
});



//----------------------------------------------------------------------------------------//
//------------------------PHASE D'ATTAQUE DE L'ENNEMI------------------------------------//
//---------------------------------------------------------------------------------------//

function enemyTurn() {

    attackChoisie = (selectedEnemy.AttacEnemy[(Math.floor(Math.random() * 3))]);
    spConsume = parseInt(attackChoisie[3]);
    if (selectedEnemy.sp > spConsume) {

        //COMMENTAIRE SIGNALE L'ATTAQUE
        currentAttack.innerHTML = `${enemyName.innerHTML} lance ${attackChoisie[0]}`;
        commentary.innerHTML = attackChoisie[2];
        //L'ENNEMIE SE DEPLACE
        enemyAttackMove();
        //LE NOMBRE DE HP JOUEUR DIMINUE
        heroChoisi.hp -= attackChoisie[1];
        hpPlayerBar.style.width = ((heroChoisi.hp / heroChoisi.defaultHP) * 100) + "%"
        let damage = parseInt(attackChoisie[1]);
        if (currentPlayerHP.innerHTML > damage) {
            currentPlayerHP.innerHTML -= damage;
        } else {
            currentPlayerHP.innerHTML = '0'
        }
        //LA BARRE DE SP DIMINUE 
        selectedEnemy.sp -= spConsume
        spEnemyBar.style.width = ((selectedEnemy.sp / selectedEnemy.defaultSP) * 100) + "%"
        if (currentEnemySP.innerHTML > spConsume) {
            currentEnemySP.innerHTML -= spConsume;
        } else {
            currentEnemySP = '0';
        }

        resetEnemyPosition();
        resetAttackText();
        resetCommentary();

        if (heroChoisi.hp <= 0) {
            setEnemyWin();
            gameLoose();
        } else {
            setTimeout(enableButton, 2000);

        };
    } else if (selectedEnemy.sp < selectedEnemy.AttacEnemy[0][3] && selectedEnemy.sp < selectedEnemy.AttacEnemy[1][3] && selectedEnemy.sp < selectedEnemy.AttacEnemy[2][3]) {
        currentAttack.innerHTML = "L'Ennemie ne peut plus attaquer";

        resetAttackText();
        resetCommentary();
        setTimeout(enableButton, 2000);
    } else {
        enemyTurn();
    }

};

//----------------------------------------------------------------------------------------//
//------------------------------------------ANIMATION------------------------------------//
//---------------------------------------------------------------------------------------//
const playerAttackMove = () => {
    if (window.matchMedia("(min-width: 600px)").matches) {

        player.style.marginLeft = '300px'
        enemy.style.marginLeft = '-300px'


    } else {

        player.style.marginLeft = '100px'
        enemy.style.marginLeft = '-100px'
    };
}

const enemyAttackMove = () => {
    if (window.matchMedia("(min-width: 600px)").matches) {
        player.style.marginRight = '-300px';
        enemy.style.marginRight = '300px';

    } else {
        player.style.marginRight = '-100px';
        enemy.style.marginRight = '100px';
    }
}

function resetPlayerPosition() {
    setTimeout(function() {
        player.style.marginLeft = '0px';
        enemy.style.marginLeft = '0px';
    }, 1000);
};

function resetEnemyPosition() {
    setTimeout(function() {
        player.style.marginRight = '0px';
        enemy.style.marginRight = '0px';
    }, 1000);
};

//----------------------------------------------------------------------------------------//
//------------------------------------MISE A JOUR DE L'UI---------------------------------//
//---------------------------------------------------------------------------------------//

function resetAttackText() {
    setTimeout(function() {
        currentAttack.innerHTML = '';
    }, 1500);
};

function resetCommentary() {
    setTimeout(function() {
        commentary.innerHTML = ''
    }, 1500);
};

function disableButton() {
    buttonAttack1.disabled = true;
    buttonAttack2.disabled = true;
    buttonAttack3.disabled = true;
};

function enableButton() {
    buttonAttack1.disabled = false;
    buttonAttack2.disabled = false;
    buttonAttack3.disabled = false;
};

function ready() {
    phaseText.innerHTML = "READY"
}

function fight() {

    phaseText.innerHTML = "FIGHT!!!"
}

function removefight() {
    phaseText.classList.add('invisible')
}

function setPlayerWin() {
    phaseText.classList.remove('invisible')
    phaseText.innerHTML = "L'ennemi à été vaincu !"
    enemy.classList.remove('animation')
    enemy.style.backgroundImage = ''
    enemy.classList.add('dead')
    commentary.classList.remove('invisible')
    commentary.innerHTML = "Vous absorber la force vitale de l'ennemi (" + selectedEnemy.rewardHp + "hp, et " + selectedEnemy.rewardSp + "sp)";
    //HERO RECUPERE DES HP
    hpReward();
    //HERO RECUPERE DES SP
    spReward();

    setTimeout(enemyDeath, 500)
}


function setEnemyWin() {
    phaseText.classList.remove('invisible')
    phaseText.innerHTML = "WASTED !"
    player.classList.remove('animation')
    hpPlayerBar.style.width = '0'
    player.classList.add('dead')
    setTimeout(playerDeath, 500)
}

function playerDeath() {
    setTimeout(player.classList.remove('dead'), 500)
    setTimeout(player.classList.remove('player'), 520)
}

function enemyDeath() {
    setTimeout(enemy.classList.remove('dead'), 500)
    setTimeout(enemy.classList.add('invisible'), 520)
}

function setGameOver() {
    commentary.classList.add('invisible');
    currentAttack.style.color = "red";
    currentAttack.innerHTML = "FATALITIES !!!!";
    disableButton();
    startGameBtn.classList.remove('delete')
    startGameBtn.innerHTML = "Next"

}

function resetEnemy() {
    selectedEnemy.hp = selectedEnemy.defaultHP
    selectedEnemy.sp = selectedEnemy.defaultSP
}

function gameLoose() {
    divStartBtn.innerHTML = '<button class="Restart">Recommencer...</button>'
    let restartBtn = document.querySelector('.Restart')

    restartBtn.addEventListener('click', () => {
        location.reload();
    })

}

heroSelection.forEach((hero) => {
    hero.addEventListener('click', (e) => {
        for (i = 0; i < 4; i++) {
            heroSelection[i].style.backgroundColor = "rgba(192, 192, 192, 0.465)"
        }
        heroChoisi = HeroList[e.target.id]
        playerName.innerHTML = heroChoisi.name
        hero.style.backgroundColor = "rgba(38, 240, 2, 0.465)"
        HeroAssests = heroChoisi.assets
        playerMaxHP.innerHTML = "/" + heroChoisi.defaultHP
        currentPlayerHP.innerHTML = heroChoisi.hp
        playerMaxSP.innerHTML = "/" + heroChoisi.defaultSP
        currentPlayerSP.innerHTML = heroChoisi.sp
        buttonAttack1.innerHTML = heroChoisi.attackHero[0][0] + " (" + heroChoisi.attackHero[0][3] + "sp)"
        buttonAttack1.setAttribute("id", "0")
        buttonAttack2.innerHTML = heroChoisi.attackHero[1][0] + " (" + heroChoisi.attackHero[1][3] + "sp)"
        buttonAttack2.setAttribute("id", "1")
        buttonAttack3.innerHTML = heroChoisi.attackHero[2][0] + " (" + heroChoisi.attackHero[2][3] + "sp)"
        buttonAttack3.setAttribute("id", "2")
        ReadyToGo = 1;
        if (ReadyToGo == 1) {
            startGameBtn.classList.remove('delete')
        }
    })
});

function hpReward() {

    if ((heroChoisi.hp + selectedEnemy.rewardHp) < heroChoisi.defaultHP) {
        heroChoisi.hp = heroChoisi.hp + selectedEnemy.rewardHp
        hpPlayerBar.style.width = ((heroChoisi.hp / heroChoisi.defaultHP) * 100) + '%'
        currentPlayerHP.innerHTML = heroChoisi.hp

        console.log("hp" + heroChoisi.hp);
    } else {
        currentPlayerHP.innerHTML = heroChoisi.defaultHP
        hpPlayerBar.style.width = '100%'
        heroChoisi.hp = heroChoisi.defaultHP
    }
}

function spReward() {

    if ((heroChoisi.sp + selectedEnemy.rewardSp) < heroChoisi.defaultSP) {
        heroChoisi.sp = (heroChoisi.sp + selectedEnemy.rewardSp)
        spPlayerBar.style.width = ((heroChoisi.sp / heroChoisi.defaultSP) * 100) + '%'
        currentPlayerSP.innerHTML = heroChoisi.sp


        console.log("sp" + heroChoisi.sp);
    } else {
        heroChoisi.sp = heroChoisi.defaultSP
        currentPlayerSP.innerHTML = heroChoisi.defaultSP
        spPlayerBar.style.width = '100%'

        console.log("sp" + heroChoisi.sp);
    }
}