class CafeComLeiteDecoration{

constructor(cafe){
    this.cafe = cafe;

} //eu vou receber um parametro do tipo café que tem que possuir esses metódos, e quando chamamos ele ficaria tipo
//new Leite(new Cafe())

valor(){
    return this.cafe.valor()+2;
}

descricao(){
    return this.cafe.descricao() + " com leite";
}

}