import Persona from './persona'

let carlos = new Persona('Carlos', 31)
let $btn = document.querySelector('#btn-saludar')
let $h2 = document.querySelector('h2')

$btn.addEventListener('click', function (e) {
  $h2.innerHTML = carlos.saludar()
}, false)
