class CafeComChocolate{

constructor(cafe){
    this.cafe = cafe;
}

valor(){

return this.cafe.valor() + 5;

}

descricao(){
   return this.cafe.descricao() + " com chocolate";
}


}