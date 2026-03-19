class PlayerManager{

static #instance

    constructor(){
        if(PlayerManager.#instance){
            return PlayerManager.#instance

        }

        this.health = 200;
        PlayerManager.#instance = this;

    }

    static instance(){
        if(!PlayerManager.#instance){
            PlayerManager.#instance = new PlayerManager;
        }
         return PlayerManager.#instance;
    }


    ressuscitate(){
    this.health = 200;
}
}