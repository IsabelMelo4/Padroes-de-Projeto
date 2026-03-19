
// Classe responsável por controlar todos os áudios do jogo
class AudioManager{

      // static = pertence à classe inteira
    // # = privado (ninguém de fora pode mexer)
static #instance;

  // O construtor é chamado quando alguém tenta criar um novo AudioManager
constructor(){
     // Se já existir um no jogo
    if(AudioManager.#instance) {

        // Não criamos outro 
        // Apenas devolvemos o que já estava trabalhando
        AudioManager.#instance;
    }

    this.audioAttack = new Audio("audio/scream.mp3");
    this.audioDead = new Audio("audio/death.mp3")
  
           // Agora registramos que este é o audio oficial do jogo
    AudioManager.#instance = this;
}

playAttack(){
    this.audioAttack.play();

}

playDie(){
this.audioDead.play();
}
 // Método estático usado para pedir o AudioManager do jogo
static instance(){

        // Se ainda não existe 

    if(!AudioManager.#instance){

         // Criamos um novo
        AudioManager.#instance = new AudioManager;
      
    }
     // Entregamos para quem pediu
    return AudioManager.#instance;

}


}