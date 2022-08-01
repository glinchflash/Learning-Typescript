export interface PassAuth {
    checkPassword(password: string): boolean;

    resetPassword(): void;
}