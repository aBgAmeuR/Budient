type Filter = {
  search?: string;
  date?: string;
  amount?: number;
  category?: string;
};

export default function TransactionsFilters({ filter, setFilter }: { filter: Filter; setFilter: (filter: Filter) => void }) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, search: event.target.value });
  };

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, date: event.target.value });
  };

  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, amount: Number(event.target.value) });
  };

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, category: event.target.value });
  };

  return (
    <div className="filters">
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="date">
        <input type="date" placeholder="Date" onChange={handleDate} />
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
