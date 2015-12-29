export default class Persona {
  constructor (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  saludar () {
    return `Hola! Me llamo ${this.nombre} y tengo ${this.edad} años`
  }
}
