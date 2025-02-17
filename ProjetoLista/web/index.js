const titulo = document.getElementById('titulo');
fetch('http://localhost:4000/')
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);

function exemplo() {
    let resultado = document.getElementById('resultado0');
    let dados = {
        preco: Number(document.getElementById('preco').value)
    }
    fetch('http://localhost:4000/desconto',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(resp => {
            resultado.innerHTML = `Preço com desconto: R$ ${resp.precoComDesconto.toFixed(2)}`;
        });
}

