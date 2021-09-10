// Crea una clase ninja
// Agregar un atributo: nombre
// Agregar un atributo: salud
// Agregar un atributo: velocidad, da un valor predeterminado de 3
// Agregar un atributo: fuerza, valor predeterminado de 3
// Agregar un método: sayName() - Esto debería registrar el nombre del ninja en la cónsola
// Agregar un método: showStats() - Debe mostrar el nombre, fuerza, velocidad y la salud del Ninja
// Agrega un método: drinkSake() - debe agregar +10 a la salud del Ninja

class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 50;
    this.velocidad = 3;
    this.fuerza = 3;
  }
  sayName() {
    console.log(`Mi nombre es ${this.nombre}`);
  }
  showStats() {
    console.log(
      `Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`
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

const ninja2 = new Ninja("Jinichi Kawakami", 95);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

// Extiende la clase Ninja y crea la clase Sensei. Un Sensei debería tener 200 de salud, 10 de velocidad y 10 de fuerza por defecto.
// Además, un Sensei debería tener un nuevo atributo llamado sabiduría , y el valor predeterminado debería ser 10.
// Finalmente, agrega el método speakWisdom()
// speakWisdom()debería llamar al método drinkSake() desde la clase Ninja, antes de console.logging, un mensaje inteligente.

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }
  speakWiswom() {
    super.drinkSake();
    console.log(
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    );
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWiswom();
superSensei.showStats();
