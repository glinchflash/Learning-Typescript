export class Animal {
    constructor(type, sound) {
        this._type = type;
        this._sound = sound;
    }
    get type() {
        return this._type;
    }
    get sound() {
        return this._sound;
    }
}
