export class RiskProfile {
  constructor(
    public readonly userId: string,
    public riskScore: number,
    public lastUpdated: Date,
  ) {}

  increaseRisk(points: number) {
    this.riskScore = Math.min(100, this.riskScore + points);
    this.lastUpdated = new Date();
  }

  decreaseRisk(points: number) {
    this.riskScore = Math.max(0, this.riskScore - points);
    this.lastUpdated = new Date();
  }
}
