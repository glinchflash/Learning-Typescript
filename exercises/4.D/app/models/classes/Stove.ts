import {CookingDevices} from "../iCookingDevices";
export class Stove implements CookingDevices{
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

