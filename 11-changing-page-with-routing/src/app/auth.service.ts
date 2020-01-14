export class AuthService {
    loggedIn = false;

    // Promise like async/await: help control asynchronous operations
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 300);
            }
        )
        return promise;
    }
    login() { this.loggedIn = true; }
    logout() { this.loggedIn = false; }
}