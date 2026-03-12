class Enemy {
static #me
    
    constructor() {
        if(Enemy.#me) return Enemy.#me
        this.health = 200;
        Enemy.#me = this;
    }

static instance(){
 if(!Enemy.#me) Enemy.#me = new Enemy;
        return Enemy.#me 

}
    atacar(forca){

    }

}