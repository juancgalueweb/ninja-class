// Crea una clase ninja
// Agregar un atributo: nombre
// Agregar un atributo: salud
// Agregar un atributo: velocidad, da un valor predeterminado de 3
// Agregar un atributo: fuerza, valor predeterminado de 3
// Agregar un método: sayName() - Esto debería registrar el nombre del ninja en la cónsola
// Agregar un método: showStats() - Debe mostrar el nombre, fuerza, velocidad y la salud del Ninja
// Agrega un método: drinkSake() - debe agregar +10 a la salud del Ninja

class Ninja {
  constructor(nombre, salud, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }
  sayName() {
    console.log(`Mi nombre es ${this.nombre}`);
  }
  showStats() {
    console.log(
      `Nombre del Ninja - ${this.nombre}, fuerza +${this.fuerza}, velocidad +${this.velocidad} y salud +${this.salud}`
    );
  }
  drinkSake() {
    this.salud += 10;
  }
}

const ninja1 = new Ninja("Fujibayashi Nagato", 80);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Ninja("Jinichi Kawakami", 95, 9, 15);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();
