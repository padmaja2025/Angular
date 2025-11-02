export class User {
    public userid:number =101;
    public username:string = "admin";
    public password:string = "admin123";
 
  constructor(userid:number,username:string,password:string)
  {
    this.userid = userid;
    this.username = username;
    this.password = password;
  }
}
