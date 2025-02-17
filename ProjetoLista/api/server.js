const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json('Bem vindo a Lista de Exercícios!');
});
app.use(express.json());
app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.post('/desconto', (req, res) => {
    const { salario } = req.body;

    if (!salario || typeof salario !== 'number') {
        return res.status(400).json({ error: 'Salário inválido ou não fornecido.' });
    }

    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14; 
    }

    const salarioFinal = salario - desconto;

    res.json({
        salarioOriginal: salario.toFixed(2),
        desconto: desconto.toFixed(2),
        salarioFinal: salarioFinal.toFixed(2),
    });
});

router.post('/', (req, res) => {
    const { ladoA, ladoB, ladoC } = req.body;

    if (
        !ladoA || !ladoB || !ladoC ||
        typeof ladoA !== 'number' ||
        typeof ladoB !== 'number' ||
        typeof ladoC !== 'number' ||
        ladoA <= 0 || ladoB <= 0 || ladoC <= 0
    ) {
        return res.status(400).json({ error: 'Informe valores válidos e positivos para os lados do triângulo.' });
    }

    let tipoTriangulo = '';

    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = 'Equilátero: Todos os lados são iguais.';
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        tipoTriangulo = 'Escaleno: Todos os lados são diferentes.';
    } else {
        tipoTriangulo = 'Isósceles: Dois lados são iguais.';
    }

    res.json({ tipoTriangulo });
});

router.post('/', (req, res) => {
    const { nomeMercadoria, precoMercadoria } = req.body;

    if (
        !nomeMercadoria ||
        typeof nomeMercadoria !== 'string' ||
        !precoMercadoria ||
        typeof precoMercadoria !== 'number' ||
        precoMercadoria <= 0
    ) {
        return res.status(400).json({ error: 'Informe um nome válido e um preço numérico positivo para a mercadoria.' });
    }

    let aumento = 0;

    if (precoMercadoria < 1000) {
        aumento = precoMercadoria * 0.05;
    } else {
        aumento = precoMercadoria * 0.07;
    }

    const precoNovo = precoMercadoria + aumento;

    res.json({
        nomeMercadoria,
        precoOriginal: precoMercadoria.toFixed(2),
        aumento: aumento.toFixed(2),
        precoNovo: precoNovo.toFixed(2),
    });
});

router.post('/', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return res.status(400).json({ error: 'Informe um array de números válido.' });
    }

    if (!numeros.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'O array deve conter apenas números.' });
    }

    const maiorNumero = Math.max(...numeros);

    res.json({ maiorNumero });
});

router.post('/', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return res.status(400).json({ error: 'Informe um array de números válido.' });
    }

    if (!numeros.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'O array deve conter apenas números.' });
    }

    const numerosOrdenados = [...numeros].sort((a, b) => a - b);

    res.json({ numerosOrdenados });
});

router.post('/', (req, res) => {
    const { num1, num2 } = req.body;

    if (
        typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        isNaN(num1) ||
        isNaN(num2)
    ) {
        return res.status(400).json({ error: 'Informe dois números válidos.' });
    }

    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);

    res.json({ maior, menor });
});

router.post('/', (req, res) => {
    const { salarioAtual } = req.body;

    if (typeof salarioAtual !== 'number' || salarioAtual <= 0 || isNaN(salarioAtual)) {
        return res.status(400).json({ error: 'Informe um salário atual válido e positivo.' });
    }

    let aumento = 0;
    let percentual = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        percentual = 15;
        aumento = salarioAtual * 0.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        percentual = 12;
        aumento = salarioAtual * 0.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        percentual = 9;
        aumento = salarioAtual * 0.09;
    } else if (salarioAtual >= 3000) {
        percentual = 6;
        aumento = salarioAtual * 0.06;
    }

    const novoSalario = salarioAtual + aumento;

    res.json({
        salarioAtual: salarioAtual.toFixed(2),
        aumento: aumento.toFixed(2),
        percentual,
        novoSalario: novoSalario.toFixed(2),
    });
});

router.post('/', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;

    if (
        typeof nota1 !== 'number' ||
        typeof nota2 !== 'number' ||
        typeof nota3 !== 'number' ||
        isNaN(nota1) ||
        isNaN(nota2) ||
        isNaN(nota3) ||
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        return res.status(400).json({ error: 'Informe três notas válidas entre 0 e 10.' });
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = '';
    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    res.json({
        media: media.toFixed(1),
        situacao,
    });
});

router.post('/', (req, res) => {
    const { produto, preco } = req.body;

    if (typeof produto !== 'string' || typeof preco !== 'number' || preco <= 0 || isNaN(preco)) {
        return res.status(400).json({ error: 'Informe um produto válido e um preço numérico positivo.' });
    }

    let desconto = 0;

    if (produto.toLowerCase() === 'camisa') {
        desconto = 0.20; 
    } else if (produto.toLowerCase() === 'bermuda') {
        desconto = 0.10; 
    } else if (produto.toLowerCase() === 'calca') {
        desconto = 0.15; 
    }

    const valorDesconto = preco * desconto;
    const precoFinal = preco - valorDesconto;

    res.json({
        produto: produto.charAt(0).toUpperCase() + produto.slice(1),
        precoOriginal: preco.toFixed(2),
        desconto: valorDesconto.toFixed(2),
        precoFinal: precoFinal.toFixed(2),
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});