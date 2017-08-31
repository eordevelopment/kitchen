export class SelectItem {
  public key: string;
  public value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  public asId(prefix: string): string {
    return `${prefix}${this.value}`;
  }
}
