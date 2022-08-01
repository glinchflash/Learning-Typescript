export
interface GoogleAuth {
    setGoogleToken(token: string): void;

    checkGoogleLogin(token: string): boolean;
}
