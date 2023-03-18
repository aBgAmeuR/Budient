import ListItem from '../components/TransactionListItem';

export default function Transactions() {
  return (
    <main id="Transactions">
      <div className="top">
        <h2>Transactions</h2>
        <button>+ Add Transactions</button>
      </div>
      <div className="content">
        <div className="filter">
        </div>
        <td className="list">
          <tr className="listItem">
            {/* <ListItem /> */}
          </tr>
        </td>

      </div>
    </main>
  )
}
