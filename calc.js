const double = (x , y) => x * y;

const init = (ev, a) => {
    console.log('Container:', document.getElementById('container'));
    console.log(ev);
    console.log(double(a, 4));
    console.log('Container:', document.getElementById('container').children);

}
window.addEventListener('DOMContentLoaded', x => init(x, 5));
