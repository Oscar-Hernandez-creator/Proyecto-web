let compra;
let listaCom = [];
let segCom;
do{
    listaCom.push(prompt("cual es el articulo deseado?"))
    segCom = confirm("deseas agregar otro articulo al carrito?");
}while(segCom);

console.log("Los articulos del carrito son: \n");

for (compra of listaCom) {
    console.log(compra);
}