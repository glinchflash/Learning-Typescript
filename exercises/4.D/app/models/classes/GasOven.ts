import {CookingDevices} from "../iCookingDevices";

export class GasOven implements CookingDevices{
    private _isOn: boolean = false;

    public turnOn():void {
        this.lightGas()
    }

    public turnOff():void {
        this.extinguishGas()
    }

    public bake(item: string):void {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        } else {
            setTimeout(function () {
                document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }


    public lightGas(): void {
        setTimeout(function () {
            document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //These tacos do hit harder then expected
        this._isOn = true;
    }

    public extinguishGas(): void {
        setTimeout(function () {
            document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //Maybe i'll grab a burrito next time
        this._isOn = false;
    }
}