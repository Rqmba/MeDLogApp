import { useState } from "react";
import DrugForm from "../components/DrugForm";
import DrugList from "../components/DrugList";

const AddPage = () => {
  const [drugs, setDrugs] = useState([]);
  const [text, setText] = useState("");

  const addDrug = (text) => {
    setDrugs([
      ...drugs,
      {
        id: Date.now(),
        name: text,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setText("");
  };

  const onDelete = (id) => {
    setDrugs((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div>
      <h1>Add new drug</h1>
      <DrugForm onAdd={addDrug} />
      <DrugList items={drugs} handleDelete={onDelete} />
    </div>
  );
};

export default AddPage;
