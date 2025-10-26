const HistoryPage = () => {
  const [drugs, setDrugs] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("drugs"));
    return saved || [];
  });

  return (
    <div className="med-card">
      <h1>History</h1>

      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Date added</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;
