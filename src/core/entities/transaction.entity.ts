export class Transaction {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly country: string,
    public readonly deviceId: string,
    public readonly createdAt: Date,
  ) {}
}
