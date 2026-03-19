let winner = false;

function resetFaceEnemy() {
  ImageManager.instance().enemyImg();
}


function resetFacePlayer() {
  ImageManager.instance().playerImg();
}


function attack() {
  if (winner) return;

  const enemy = EnemyManager.instance();

  enemy.health -= 40;


  enemyLife.style.width = enemy.health + "px";

  if (enemy.health <= 0) {
    ImageManager.instance().DieEnemyImg();

    if (!winner) {
      AudioManager.instance().playDie();
      winner = true;
    }

  }

  else{
  AudioManager.instance().playAttack();
  ImageManager.instance().EnemyAttackImg();
  setTimeout(resetFaceEnemy, 1000);

  }

}

function receiverAttack(){

if (winner) return;

  const player = PlayerManager.instance();

  player.health -= 40;


  playerLife.style.width = player.health + "px";

  if (player.health <= 0) {
    ImageManager.instance().DiePlayerImg();

    if (!winner) {
      AudioManager.instance().playDie();
      winner = true;
    }

  }

  else{
  ImageManager.instance().playerAttackImg();
  AudioManager.instance().playAttack();
  setTimeout(resetFacePlayer, 1000);

  }
}

btnAtacar.onclick = attack;
btnReceber.onclick = receiverAttack;

