export interface FacebookAuth {

    setFacebookToken(token: string): void;

    getFacebookLogin(token: string): boolean;
}