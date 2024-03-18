interface Iprops {
  order: string;
  date: string;
  status: string;
  total: string;
  action: string;
}

function Columns({ order, date, status, total, action }: Iprops) {
  return (
    <tr>
      <td>{order}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>{total}</td>
      <td>
        <button>{action}</button>
      </td>
    </tr>
  );
}

export default Columns;
