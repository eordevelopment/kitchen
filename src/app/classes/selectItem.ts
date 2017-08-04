export class SelectItem {
  public key: number;
  public value: string;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }

  public asId(prefix: string): string {
    return `${prefix}${this.value}`;
  }
}
