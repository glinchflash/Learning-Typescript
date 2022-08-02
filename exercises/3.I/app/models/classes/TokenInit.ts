export class TokenInit{
    private _token: string = "";

    protected get token():string{
        return this._token;
    }

    protected  setToken(token:string){
        this._token = token;
    }
}