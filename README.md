# Doaçoes Tech

Aplicativo que tem o objetivo de aproximar instituições de caridade e doadores de equipamentos de tecnologia.

## Autores
Rômulo Silva Rocha  
Matheus Gaia da Costa Nunes
Lademir Salomão Bechara
Larisse Almeida Pereira de Lima
Marly Bahri Mello

### Instalação

Para rodar nosso App é necessario ter instalado o pacote de modulos do node.js em sua máquina.
Após isso siga os seguintes comandos:

1- Abra o terminal na pasta em que está localizado o arquivo "package.json";
2- Digite o comando "npm i" para instalar as dependências;
3- Digite o comando "npm start" para iniciar o app ainda em de desenvolvimento;
4- É necessário gerar uma Key de Api no google para que o mapa apareça;
5- Coloque sua Key no arquivo "Map.jsx"

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "COLE SUA KEY AQUI"
  })