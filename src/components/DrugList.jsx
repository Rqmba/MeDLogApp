const DrugList = ({ items, handleDelete }) => {
  return (
    <>
      {items.map((item) => (
        <table>
          <thead>
            <tr>
              <th scope="col">Medication</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#161b22", border: "none" }}
                  onClick={() => handleDelete(item.id)}
                  aria-label={`Delete ${item.name}`}
                >
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};

export default DrugList;
