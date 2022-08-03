import {GasOven} from "./GasOven";
import {Stove} from "./Stove";
export class Restaurant {
    private _name : string;
    private _type : GasOven | Stove

    constructor(name : string, type : GasOven | Stove) {
        this._name = name;
        this._type = type;
    }

    public Cook(item : string) {
        this._type.turnOn();
        this._type.bake(item);
        this._type.turnOff();
    }
}
