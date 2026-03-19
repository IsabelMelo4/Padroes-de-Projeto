class ImageManager {

    static #instance;

    constructor(){
        if(ImageManager.#instance){
            return ImageManager.#instance;
        }

        this.player = document.getElementById("playerImg");
        this.enemy = document.getElementById("enemyImg");
      
        ImageManager.#instance = this;
    }

 enemyImg() {
  this.enemy.src = "img/EnemyImg.png";
}

playerImg() {
  this.player.src = "img/PlayerImg.png";
}

    playerAttackImg(){
        this.player.src = "img/PlayerAttackImage.png";
    }

   EnemyAttackImg(){
        this.enemy.src = "img/EnemyAttackImage.png";
    }

    DiePlayerImg(){
        this.player.src = "img/DieImage.png";

    }

    DieEnemyImg(){
    
        this.enemy.src = "img/DieImage.png";
    }




    static instance(){
        if(!ImageManager.#instance){
            ImageManager.#instance = new ImageManager();
        }
        return ImageManager.#instance;
    }
}