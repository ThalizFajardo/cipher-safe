type SecurityBoxStatus = "ACTIVE" | "DELETED";

export class SecurityBox {
  constructor(
    public id: string,
    public name: string,
    public favorite: boolean,
    public icon: string,
    public status: SecurityBoxStatus,
    public createdA: string
  ) {}
}
