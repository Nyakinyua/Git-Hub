export class User {
    constructor(
        public id: number,
        public login: string, 
        public avatar_url: string,
        public followers:number,
        public following:number,
        public email:string ){}
}
