const isAdmin: boolean = true;
const user: string = "Mike";
let welcome:string;

if (isAdmin) {
    welcome = `Welcome, ${user}`;
} else {
    welcome = `Welcome, guest`;
}

console.log(welcome);