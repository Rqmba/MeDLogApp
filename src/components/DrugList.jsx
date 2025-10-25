const DrugList = ({ items, handleDelete }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.date}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DrugList;
