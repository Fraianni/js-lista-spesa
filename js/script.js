console.log('js-OK')
const lista_spesa = ['Pane', 'Acqua', 'Pollo'];
// console.log(lista_spesa);

let i = 0;
while (i <= lista_spesa.length - 1) {
    const element = document.createElement('p');
    element.append(lista_spesa[i]);
    element.style.color = 'red';

    const container = document.getElementById('spesa');
    container.appendChild(element);
    i++;
}
