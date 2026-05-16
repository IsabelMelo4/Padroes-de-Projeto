class controle{

    constructor (pilha){
        this.pilha = pilha;

    }

verificar(){

    if(this.pilha){
        console.log("controle ligado com pilha");     
        console.log("carga:" + this.pilha.carga); 
    }

    else{
        
         console.log("controle não liga pois está sem pilha");

    }

}

    

}