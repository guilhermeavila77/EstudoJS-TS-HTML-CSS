const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i in elementos){
    let {tag, texto} = elementos[i];
    let criaTag = document.createElement(tag);
    let criaText = document.createTextNode(texto);

    console.log(criaTag, criaText, i);
    criaTag.appendChild(criaText);
    div.appendChild(criaTag);
}

container.appendChild(div)