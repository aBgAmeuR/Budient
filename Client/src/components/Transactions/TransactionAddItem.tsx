import { Transaction } from '../../pages/Transactions';

export default function TransactionAddItem({ setAddTransaction }: { setAddTransaction: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <li className="row addItemTransaction">
      <div className="right">
        <input className="name" type='text' placeholder='Name'></input>
        <input className="date" type='date'></input>
        <input className="amount" type='number' placeholder='Amount'>
        </input>
        <select className="category">
          <option value="other">Other</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
        </select>
        <input className="desc" type='text' placeholder='Description'></input>
      </div>
      <div className="left">
        <button className="delete cancel" onClick={() => setAddTransaction(false)}>Cancel</button>
        <button className="edit add">Add</button>
      </div>
    </li>
  );
}
