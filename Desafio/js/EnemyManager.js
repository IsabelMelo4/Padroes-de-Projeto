class EnemyManager{

static #instance

    constructor(){
        if(EnemyManager.#instance){
            return EnemyManager.#instance

        }

        this.health = 200;
        this.enemyes = []; //criar lista de armazenas inimigos
        EnemyManager.#instance = this;

    }

    static instance(){
        if(!EnemyManager.#instance){
            EnemyManager.#instance = new EnemyManager;
        }
         return EnemyManager.#instance;
    }


    ressuscitate(){
    this.health = 200;
}
}
