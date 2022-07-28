export class Animal{
    protected _type;
    protected _sound;
    constructor(type:string,sound:string) {
        this._type = type;
        this._sound = sound;
    }

    get type(){
        return this._type;
    }

    get sound(){
        return this._sound;
    }
}