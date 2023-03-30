import { Filter, Transaction } from '../../pages/Transactions';

export default function TransactionsFilters({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, search: e.target.value });
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, date: e.target.value });
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, amount: Number(e.target.value) });
  };

  const handleAmountOrder = () => {
    setFilter({ ...filter, amountOrder: filter.amountOrder === 'asc' ? 'desc' : 'asc' });
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, category: e.target.value });
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
        <button onClick={handleAmountOrder} className='AmountOrder'>
          {filter.amountOrder === 'asc' ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8862_10587)">
                <path d="M2.934 1.18797C2.718 1.42197 2.322 1.61997 2.07 1.61997C1.71 1.61997 1.62 1.70997 1.62 2.06997C1.62 2.46597 1.692 2.51997 2.34 2.51997H3.06V4.58997V6.65997H3.6H4.14V3.68997C4.14 0.719973 4.14 0.719973 3.744 0.737973C3.51 0.755973 3.15 0.953973 2.934 1.18797Z" fill="#6F767E" />
                <path d="M13.896 3.09596C13.734 3.25796 13.68 4.57196 13.68 7.90196V12.492L12.708 11.538C11.682 10.512 11.124 10.422 10.872 11.196C10.782 11.502 11.106 11.916 12.582 13.392L14.4 15.21L16.2 13.41C17.19 12.42 18 11.52 18 11.394C18 11.142 17.496 10.62 17.262 10.62C17.154 10.62 16.632 11.034 16.092 11.538L15.12 12.474V7.88396C15.12 3.18596 15.084 2.87996 14.4 2.87996C14.238 2.87996 14.022 2.96996 13.896 3.09596Z" fill="#6F767E" />
                <path d="M2.55599 11.268C2.08799 11.592 1.61999 12.438 1.61999 12.96C1.61999 13.212 1.72799 13.32 2.05199 13.32C2.37599 13.32 2.50199 13.194 2.57399 12.78C2.80799 11.7 4.30199 11.43 4.55399 12.438C4.71599 13.068 4.31999 13.68 3.18599 14.544C2.06999 15.408 1.70999 15.84 1.52999 16.596L1.40399 17.1H3.49199H5.57999V16.65C5.57999 16.2 5.56199 16.2 4.10399 16.182H2.60999L3.32999 15.606C3.72599 15.282 4.39199 14.688 4.82399 14.292C5.47199 13.644 5.57999 13.446 5.57999 12.798C5.57999 11.718 4.84199 10.98 3.74399 10.98C3.31199 10.98 2.77199 11.106 2.55599 11.268Z" fill="#6F767E" />
              </g>
              <defs>
                <clipPath id="clip0_8862_10587">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8862_10588)">
                <path d="M2.66399 0.809973C2.12399 1.11597 1.61999 1.92597 1.61999 2.51997C1.61999 3.11397 2.44799 3.00597 2.60999 2.39397C2.78999 1.67397 3.04199 1.43997 3.61799 1.43997C3.95999 1.43997 4.22999 1.58397 4.42799 1.88997C4.87799 2.57397 4.49999 3.29397 3.23999 4.13997C2.17799 4.85997 1.70999 5.39997 1.51199 6.19197L1.40399 6.65997H3.49199C5.45399 6.65997 5.57999 6.64197 5.57999 6.29997C5.57999 5.97597 5.45399 5.93997 4.13999 5.93997C3.31199 5.93997 2.69999 5.86797 2.69999 5.75997C2.69999 5.66997 3.20399 5.21997 3.81599 4.76997C5.11199 3.83397 5.57999 3.20397 5.57999 2.39397C5.57999 1.07997 3.85199 0.143973 2.66399 0.809973Z" fill="#6F767E" />
                <path d="M14.9622 14.9939C15.1242 14.8319 15.1782 13.5179 15.1782 10.1879V5.59794L16.1502 6.55194C17.1762 7.57794 17.7342 7.66794 17.9862 6.89394C18.0762 6.58794 17.7522 6.17394 16.2762 4.69794L14.4582 2.87994L12.6582 4.67994C11.6682 5.66994 10.8582 6.56994 10.8582 6.69594C10.8582 6.94794 11.3622 7.46994 11.5962 7.46994C11.7042 7.46994 12.2262 7.05594 12.7662 6.55194L13.7382 5.61594V10.2059C13.7382 14.9039 13.7742 15.2099 14.4582 15.2099C14.6202 15.2099 14.8362 15.1199 14.9622 14.9939Z" fill="#6F767E" />
                <path d="M3.168 11.43C2.988 11.682 2.628 11.916 2.25 11.988C1.8 12.06 1.62 12.186 1.62 12.438C1.62 12.708 1.746 12.78 2.34 12.78H3.06V14.94V17.1H3.6H4.14V14.04C4.14 11.16 4.122 10.98 3.798 10.98C3.618 10.98 3.33 11.178 3.168 11.43Z" fill="#6F767E" />
              </g>
              <defs>
                <clipPath id="clip0_8862_10588">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </button>
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
