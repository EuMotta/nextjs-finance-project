class Transaction {
  id: number;
  name: string;
  value: number;
  operationType: boolean;
  date: Date;

  constructor(
    id: number,
    name: string,
    value: number,
    operationType: boolean,
    date: Date,
  ) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.operationType = operationType;
    this.date = date;
  }

  formatarData(): string {
    return this.date.toLocaleDateString('pt-BR');
  }
}

export default Transaction;
