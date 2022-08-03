/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./app/new.ts ***!
  \********************/

class GasOven {
    constructor() {
        this._isOn = false;
    }
    turnOn() {
        this.lightGas();
    }
    turnOff() {
        this.extinguishGas();
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    }
    lightGas() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //These tacos do hit harder then expected
        this._isOn = true;
    }
    extinguishGas() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //Maybe i'll grab a burrito next time
        this._isOn = false;
    }
}
class Stove {
    constructor() {
        this._isOn = false;
    }
    turnOn() {
        this.switchOnElectricity();
    }
    turnOff() {
        this.shutdownElectricity();
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("Electricity down, dammit!");
        }
    }
    switchOnElectricity() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Stove switched on!</p>";
        }, 1000);
        console.log("This pikachu is increasing my power level to over 9000!");
        this._isOn = true;
    }
    shutdownElectricity() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Stove switched off!</p><hr>";
        }, 3000);
        console.log("The pikachu flew out of the running wheel!");
        this._isOn = false;
    }
}
class Restaurant {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    Cook(item) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9uZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNsYXNzIEdhc092ZW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5faXNPbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdHVybk9uKCkge1xyXG4gICAgICAgIHRoaXMubGlnaHRHYXMoKTtcclxuICAgIH1cclxuICAgIHR1cm5PZmYoKSB7XHJcbiAgICAgICAgdGhpcy5leHRpbmd1aXNoR2FzKCk7XHJcbiAgICB9XHJcbiAgICBiYWtlKGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5faXNPbikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKS5pbm5lckhUTUwgKz0gXCI8cD5cIiArIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIiA6IE5vdyBiYWtpbmcgXCIgKyBpdGVtICsgXCIgITwvcD5cIjtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm93IGJha2luZyBcIiArIGl0ZW0gKyBcIiFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKS5pbm5lckhUTUwgKz0gXCI8cD5cIiArIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIiA6IHRoZXJlIGlzIG5vIGdhcyE8L3A+XCI7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZXJlIGlzIG5vIGdhcyFcIik7IC8vaW5zZXJ0IGZhcnQgaHVtb3IgaGVyZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpZ2h0R2FzKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykuaW5uZXJIVE1MICs9IFwiPHA+XCIgKyBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpICsgXCIgOiBUSEUgR0FTIElTIE9OITwvcD5cIjtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRIRSBHQVMgSVMgT04hXCIpOyAvL1RoZXNlIHRhY29zIGRvIGhpdCBoYXJkZXIgdGhlbiBleHBlY3RlZFxyXG4gICAgICAgIHRoaXMuX2lzT24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZXh0aW5ndWlzaEdhcygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpLmlubmVySFRNTCArPSBcIjxwPlwiICsgbmV3IERhdGUoKS5nZXRIb3VycygpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSArIFwiIDogVEhFIEdBUyBJUyBPRkYhPC9wPjxocj5cIjtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRIRSBHQVMgSVMgT0ZGIVwiKTsgLy9NYXliZSBpJ2xsIGdyYWIgYSBidXJyaXRvIG5leHQgdGltZVxyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBTdG92ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9pc09uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0dXJuT24oKSB7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hPbkVsZWN0cmljaXR5KCk7XHJcbiAgICB9XHJcbiAgICB0dXJuT2ZmKCkge1xyXG4gICAgICAgIHRoaXMuc2h1dGRvd25FbGVjdHJpY2l0eSgpO1xyXG4gICAgfVxyXG4gICAgYmFrZShpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzT24pIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykuaW5uZXJIVE1MICs9IFwiPHA+XCIgKyBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpICsgXCIgOiBOb3cgYmFraW5nIFwiICsgaXRlbSArIFwiICE8L3A+XCI7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdyBiYWtpbmcgXCIgKyBpdGVtICsgXCIhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykuaW5uZXJIVE1MICs9IFwiPHA+XCIgKyBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpICsgXCIgOiB0aGVyZSBpcyBubyBnYXMhPC9wPlwiO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbGVjdHJpY2l0eSBkb3duLCBkYW1taXQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aXRjaE9uRWxlY3RyaWNpdHkoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKS5pbm5lckhUTUwgKz0gXCI8cD5cIiArIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIiA6IFN0b3ZlIHN3aXRjaGVkIG9uITwvcD5cIjtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgcGlrYWNodSBpcyBpbmNyZWFzaW5nIG15IHBvd2VyIGxldmVsIHRvIG92ZXIgOTAwMCFcIik7XHJcbiAgICAgICAgdGhpcy5faXNPbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzaHV0ZG93bkVsZWN0cmljaXR5KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykuaW5uZXJIVE1MICs9IFwiPHA+XCIgKyBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpICsgXCIgOiBTdG92ZSBzd2l0Y2hlZCBvZmYhPC9wPjxocj5cIjtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBwaWthY2h1IGZsZXcgb3V0IG9mIHRoZSBydW5uaW5nIHdoZWVsIVwiKTtcclxuICAgICAgICB0aGlzLl9pc09uID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUmVzdGF1cmFudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbiAgICBDb29rKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLl90eXBlLnR1cm5PbigpO1xyXG4gICAgICAgIHRoaXMuX3R5cGUuYmFrZShpdGVtKTtcclxuICAgICAgICB0aGlzLl90eXBlLnR1cm5PZmYoKTtcclxuICAgIH1cclxufVxyXG4vLyBvbGQgY29kZVxyXG4vLyBsZXQgYmFrZXJ5ID0gbmV3IFJlc3RhdXJhbnQoXCJCYWtlcnlcIik7XHJcbi8vIGJha2VyeS5Db29rKFwiY29va2llc1wiKTtcclxuLy9Ob3cgaWYgd2Ugd2FudCB0byBhZGQgYSBuZXcgcmVzdGF1cmFudCB3aXRoIGFuIEVMRUNUUklDIGNvb2tlciwgd2UgYXJlIGdvbm5hIGJlIGluIGEgaG90IG1lc3MgLi4uXHJcbmxldCBiYWtlcnkgPSBuZXcgUmVzdGF1cmFudChcIkJha2VyeVwiLCBuZXcgR2FzT3ZlbigpKTtcclxuYmFrZXJ5LkNvb2soXCJjb29raWVzXCIpO1xyXG5sZXQgY3JlcGVyeSA9IG5ldyBSZXN0YXVyYW50KFwiQ3JlcGVyeVwiLCBuZXcgU3RvdmUoKSk7XHJcbmNyZXBlcnkuQ29vayhcImNyZXBlc1wiKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9