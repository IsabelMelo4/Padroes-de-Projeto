class Jogador{

static #jogadorUnico

constructor(){
    
        //VERIFICA SE EXISTE UM OBJETO E SE NÃO TIVER ELE 
        //AUTO SE COLOCA DENTRO DELE 
        if(Jogador.#jogadorUnico) return Jogador.#jogadorUnico;
        Jogador.#jogadorUnico = this;
        this.forca = 100;

    }
 static instance(){
    //SE NÃO EXISTIR ELE CRIA UM NOVO OBJETO JOGADOR 
        if(!Jogador.#jogadorUnico) Jogador.#jogadorUnico = new Jogador;
        return Jogador.#jogadorUnico;

    }

}