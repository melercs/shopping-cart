
export class User {
  public uid: string;
  public email: string;
  public username: string;

  constructor(obj: UserObject) {
    this.username = obj && obj.username || null;
    this.email = obj && obj.email || null;
    this.uid = obj && obj.uid || null;
  }
}

export interface UserObject {
  uid: string;
  email: string;
  username: string;
}

