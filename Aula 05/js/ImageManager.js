class ImageManager{

static #instance
constructor(){

        if(ImageManager.#instance){

            return ImageManager.#instance
        }

        this.imageEnemyFace.src = "img/happy.png";
        this.imageEnemyFace.src = "img/dead.png";
        ImageManager.#instance = this;


}

imageHappy(){

    let imagemHappy = this.imageEnemyFace;
    
}



}