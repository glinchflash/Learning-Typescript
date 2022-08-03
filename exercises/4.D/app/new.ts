import {GasOven} from "./models/classes/GasOven";
import {Stove} from "./models/classes/Stove";
import {Restaurant} from "./models/classes/Restaurant";
// old code
// let bakery = new Restaurant("Bakery");
// bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...

let bakery = new Restaurant("Bakery", new GasOven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");

