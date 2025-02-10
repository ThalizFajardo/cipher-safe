export class User {
  constructor(
    public id: string,
    public name: string,
    public lastname: string,
    public email: string,
    public phone: string,
    public token?: string
  ) {}
}
