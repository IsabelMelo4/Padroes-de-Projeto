class AudioManager{

    static #instance

    constructor(){
        if(AudioManager.#instance) {
            
        AudioManager.#instance = this;
        
        }
        
        this.audioScream = new Audio("audio/scream.mp3")
        this.audiodeath = new Audio("audio/death.mp3");
        AudioManager.#instance = this;
    

    }

    playDeath(){
    
        this.audiodeath.play();

    }

    playScream(){

          this.audioScream.play();
    }
    static instance(){

   if(!AudioManager.#instance) AudioManager.#instance = new AudioManager;
        return AudioManager.#instance;

}
}