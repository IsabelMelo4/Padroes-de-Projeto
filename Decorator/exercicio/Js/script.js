
let cafeComLeite = new CafeComLeiteDecoration(new cafe); // aqui eu criei um decoration de café (café com leite) e passe o "molde" café


console.log(cafeComLeite.descricao());
console.log(cafeComLeite.valor());

let cafeBasico = new cafe;


console.log(cafeBasico.valor());
console.log(cafeBasico.descricao());

let CafeComLeite_e_chocolate = new CafeComChocolate(new CafeComLeiteDecoration(new cafe()));

console.log(CafeComLeite_e_chocolate.descricao());
console.log(CafeComLeite_e_chocolate.valor());