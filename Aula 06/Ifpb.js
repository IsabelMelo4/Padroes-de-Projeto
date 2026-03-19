class Ifpb{
vbbbe
static #NumeroDeAlunos;

constructor(){
    if(Ifpb.#NumeroDeAlunos) 
    return Ifpb.#NumeroDeAlunos = this;

}

static instance(){
    if(!Ifpb.#NumeroDeAlunos) Ifpb.#NumeroDeAlunos = new Ifpb;
    return Ifpb.#NumeroDeAlunos;
}

}