import { Cat } from "./models/Cat";
import { Dog } from "./models/Dog";
import { Parrot } from "./models/Parrot";
import { Meerkat } from "./models/Meerkat";
class Zoo {
    constructor() {
        this._animals = new Array(); //original code: private _animals: Array <object> = new Array<object>()
    }
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat('Cat', 'miauw'));
zoo.addAnimal(new Dog('Dog', 'woof'));
zoo.addAnimal(new Parrot('Parrot', "i'm a pirate"));
zoo.addAnimal(new Meerkat('Meerkat', 'pumba why u do this'));
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.sound + "<br>");
});
