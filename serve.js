const express = require('express');
const app = express();
const port = 3000;

// Dados temporários (array)
const destinos = [
    {
        nome: "Rio Negro",
        imagem: "http://www.ecobrasil.eco.br/images/IMAGENS/ILUSTRACOES/amazonia-rio-negro-encontro_das_aguas_ricardo_oliveira.jpg",
        descricao: "Explore as águas escuras e misteriosas do Rio Negro, onde você pode avistar uma variedade de animais selvagens, incluindo botos e jacarés.",
        atividades: ["Observação de pássaros", "Caminhadas na selva", "Passeios de barco"]
    },
    {
        nome: "Parque Nacional do Jaú",
        imagem: "https://portalamazonia.com/images/p/34778/b2ap3_large_rio-jau-foto-josangela-jesus.jpg",
        descricao: "Visite o maior parque nacional do Brasil e experimente a beleza intocada da floresta amazônica, lar de uma variedade de espécies de plantas e animais ameaçadas de extinção.",
        atividades: ["Trilhas", "Acampamento", "Pesca esportiva"]
    }
];

// Middleware para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Servir arquivos estáticos
app.use(express.static('public'));

// Rotas RESTful
app.get('/api/destinos', (req, res) => {
    res.json(destinos);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});