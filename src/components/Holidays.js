export default function Holidays({ holidays }) {
  return (
    <table className='table table-striped mb-5'>
      <thead>
        <tr>
          <th scope='col'>Date</th>
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
        </tr>
      </thead>
      <tbody>
        {holidays.map((h, i) => (
          <tr key={i}>
            <th scope='row'>
              <span className='badge bg-primary p-3'>
                {h.date.slice(0, 10)}
              </span>
            </th>
            <td>{h.name}</td>
            <td>{h.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
