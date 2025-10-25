const TodayPage = () => {
  const date = new Date();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        We are {date.toLocaleDateString()}
      </h1>
      <div className="med-card">
        <table>
          <thead>
            <tr>
              <th>Medication</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* map medicament du jour */}
            <tr>
              <td>Doliprane</td>
              <td>13:00</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodayPage;
