import { Transaction } from '../../pages/Transactions';

export default function TransactionListItem(transaction: Transaction) {
  return (
    <li key={transaction.id} className="row">
      <p className="name">{transaction.name}</p>
      <p className="date">{transaction.date.toLocaleDateString('en-GB')}</p>
      <p className="amount">
        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(transaction.amount)}
      </p>
      <p className="category">{transaction.category}</p>
      <p className="desc">{transaction.desc}</p>
      <div className="btns">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </li>
  );
}
