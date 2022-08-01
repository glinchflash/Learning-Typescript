import {Engine} from "./Engine";
import {Radio} from "./Radio";
export class Car {

    private  _engine: Engine;
    private  _radio: Radio;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this._engine = new Engine(MAXIMUM_FUEL_CAPACITY);
        this._radio = new Radio();
    }


    public get engine():Engine{
        return this._engine;
    }


    public get radio(): Radio{
        return this._radio
    }



    drive() {
        if(!this._engine.Status || this._engine.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._engine.consumeFuel();
        this._engine.addMileage();

    }
}