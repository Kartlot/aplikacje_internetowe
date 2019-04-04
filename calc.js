const fields = [
    { txt: 1, col: 1, row: 4},
    { txt: 2, col: 2, row: 4},
    { txt: 3, col: 3, row: 4},
    { txt: 4, col: 1, row: 3},
    { txt: 5, col: 2, row: 3},
    { txt: 6, col: 3, row: 3},
    { txt: 7, col: 1, row: 2},
    { txt: 8, col: 2, row: 2},
    { txt: 9, col: 3, row: 2},
    { txt: 0, col: '1/3', row: 5},
    { txt: 'C', col: 4, row: 2},
    { txt: '+', col: 4, row: 3},
    { txt: '-', col: 4, row: 4},
    { txt: 'display', col: '1/5', row: 1},
    { txt: '.', col: 3, row: 5},
    { txt: '=', col: 4, row: 5}
    ];


const init = () => {
    const container = document.createElement('div');
    container.id = 'container';

    fields.forEach(el => {
       const button = document.createElement('div');
       button.textContent = el.txt;
       button.style.gridColumn = el.col;
       button.style.gridRow = el.row;
       if (el.txt === 'display') {
           button.id = 'display';
       }
       else
       {
           button.addEventListener('click', el => {
            const d = document.getElementById('display');
            d.textContent = el.target.textContent;
            el.target.textContent = '#';
           });
       }
       container.appendChild(button);
    });

    document.body.appendChild(container);
    for(let i = 0; i<fields.lenght; ++i) {
        console.log(fields[i]);
    }
}
window.addEventListener('DOMContentLoaded', init);
