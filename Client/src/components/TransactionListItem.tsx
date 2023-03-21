type Transaction = {
  id: string;
  name: string;
  date: Date;
  amount: number;
  category: string;
  desc: string;
};

export default function TransactionListItem(transaction: Transaction) {
  return (
    <tr key={transaction.id} className="row">
      <th className="name">{transaction.name}</th>
      <th className="date">{transaction.date.toLocaleDateString('en-GB')}</th>
      <th className="amount">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(transaction.amount)}</th>
      <th className="category">{transaction.category}</th>
      <th className="desc">{transaction.desc}</th>
    </tr>
  );
}
