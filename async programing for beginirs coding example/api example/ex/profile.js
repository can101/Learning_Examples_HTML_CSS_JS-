class Profile {
    constructor() {
        this.clientid = '',
            this.clientSecret = ''
    }
    async getProfile(username) {
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        let x = await profileResponse.json();

        const todos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${x[0].id}`);
        let todo = await todos.json();

        return {
            x,
            todo
        }
    }
}