let isDead = false;

let screamAudio = new Audio("audio/scream.mp3");
let deathAudio = new Audio("audio/death.mp3");

function resetEnemyFace(){
    imageEnemyFace.src = "img/happy.png";
}

function resuscitate() {

    divLifeBar.style.width = enemy.health + "px";
    imageEnemyFace.src = "img/happy.png";
    isDead = false;
}

function attackEnemy() {

     let enemy = Enemy.instance();

    /* nesse ponto eu tenho 
que pegar o enemy UNICO no sistema*/

 
    enemy.health -= 40;

    divLifeBar.style.width = enemy.life + "px";

    if( enemy.health < 0) life = 0;

    divLifeBar.style.width = enemy.health + "px";
 
    if(enemy.health == 0) {

        imageEnemyFace.src = "img/dead.png";

        if(!isDead) {
            deathAudio.play();
            isDead = true;
            setTimeout(resuscitate, 5000);
        }

    }
    else {

        screamAudio.play();
        imageEnemyFace.src = "img/aw.png"; 

        setTimeout(resetEnemyFace, 100);

    }

}

buttonAttackEnemy.onclick = attackEnemy;