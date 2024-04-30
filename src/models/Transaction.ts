/* 
  Classe para representar uma transação.
*/

class Transaction {
  id: number;
  name: string;
  value: number;
  date: Date;

  constructor(id: number, name: string, value: number, date: Date) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.date = date;
  }

  formatarData(): string {
    return this.date.toLocaleDateString('pt-BR');
  }
}

export default Transaction;
