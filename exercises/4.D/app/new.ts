interface CookingDevices{
    turnOn():void;
    turnOff():void;
    bake(item:string):void;
}

class GasOven implements CookingDevices{
    private _isOn : boolean = false;

    turnOn() {
        this.lightGas()
    }
    turnOff() {
       this.extinguishGas()
    }
    bake(item: string)    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }


    public lightGas() : void
    {
        setTimeout(function (){
            document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //These tacos do hit harder then expected
        this._isOn = true;
    }

    public extinguishGas() : void
    {
        setTimeout(function (){
            document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //Maybe i'll grab a burrito next time
        this._isOn = false;
    }
}

class Stove implements CookingDevices{
    private _isOn : boolean = false;

    turnOn() {
        this.switchOnElectricity()
    }
    turnOff() {
        this.shutdownElectricity()
    }
    bake(item: string)    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("Electricity down, dammit!");
        }
    }

    public switchOnElectricity() : void
    {
        setTimeout(function (){
            document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Stove switched on!</p>";
        }, 1000);
        console.log("This pikachu is increasing my power level to over 9000!");
        this._isOn = true;
    }

    public shutdownElectricity() : void
    {
        setTimeout(function (){
            document.getElementById('target')!.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Stove switched off!</p><hr>";
        }, 3000);
        console.log("The pikachu flew out of the running wheel!");
        this._isOn = false;
    }

}



class Restaurant {
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

// old code
// let bakery = new Restaurant("Bakery");
// bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...

let bakery = new Restaurant("Bakery", new GasOven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");

