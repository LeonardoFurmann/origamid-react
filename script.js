
//Destructuring
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2)


//Rest
function showList(empresa, ...clientes){
    clientes.forEach((cliente) => {
        console.log(cliente, empresa)
    });

}

showList('Google', 'Andre', 'Leo')

//Spread
const lista = [10,20,5]
console.log(Math.max(...lista));


//Fetch
fetch('https://ranekapi.origamid.dev/json/api/produto')
.then((response) =>
    response.json(),
).then(json => {
    console.log(json)
});
