const emprendedores = [
    ['maria', 'pedro', 'almendra', 'ana'],
    ['Confeccion', 'Artesania', 'Bisuteria', 'Confeccion'],
];

const asignados = document.querySelector('#asignados');
const btnSearch = document.querySelector('#btnSearch');

btnSearch.addEventListener('click', () => {
    let arrAsignados = asignados.value.split(';');
    for (let i = 0; i < arrAsignados.length; i++) {
        arrAsignados[i] = arrAsignados[i].trim().toLowerCase();
    };
    for (let i = 0; i < emprendedores[0].length; i++) {
        if (!arrAsignados.includes(emprendedores[0][i])) {
            alert(emprendedores[0][i] + ' del rubro ' + emprendedores[1][i] + ' no esta asignado')
        }
        
    }
})


// Ahora te queda que el mensaje se imprima abajo o al costado mostrando a los que FALTAN POR AGREGAR

