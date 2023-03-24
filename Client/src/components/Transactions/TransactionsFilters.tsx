import { Filter, Transaction } from '../../pages/Transactions';

export default function TransactionsFilters({
  filter,
  setFilter,
  setData,
  Data,
}: {
  filter: Filter;
  setFilter: (filter: Filter) => void;
    setData: (data: Transaction[]) => void;
    Data: Transaction[];
  }) {
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, search: e.target.value });
    setData(
      Data.filter((transaction) => {
        return transaction.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, date: e.target.value });
    setData(
      Data.filter((transaction) => {
        return transaction.date.toLocaleDateString('en-GB').includes(e.target.value);
      })
    );
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, amount: Number(e.target.value) });
    setData(
      Data.filter((transaction) => {
        return transaction.amount === Number(e.target.value);
      })
    );
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, category: e.target.value });
    setData(
      Data.filter((transaction) => {
        return transaction.category === e.target.value;
      })
    );
  };

  return (
    <div className="filters">
      <div className="search">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM12.75 7.875C12.75 10.5674 10.5674 12.75 7.875 12.75V14.25C11.3958 14.25 14.25 11.3958 14.25 7.875H12.75ZM7.875 12.75C5.18261 12.75 3 10.5674 3 7.875H1.5C1.5 11.3958 4.35418 14.25 7.875 14.25V12.75ZM3 7.875C3 5.18261 5.18261 3 7.875 3V1.5C4.35418 1.5 1.5 4.35418 1.5 7.875H3ZM7.875 3C10.5674 3 12.75 5.18261 12.75 7.875H14.25C14.25 4.35418 11.3958 1.5 7.875 1.5V3ZM15.5303 14.4697L12.3896 11.329L11.329 12.3896L14.4697 15.5303L15.5303 14.4697Z"
            fill="#6F767E"
          />
        </svg>
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="date">
        <input type="month" placeholder="Date" onChange={handleDate} />
      </div>
      <div className="amount">
        <input type="number" placeholder="Amount" onChange={handleAmount} />
      </div>
      <div className="category">
        <select onChange={handleCategory}>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}
