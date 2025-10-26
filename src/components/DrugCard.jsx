import { useState, useEffect } from "react";
import DrugForm from "./DrugForm";
import DrugList from "./DrugList";

const DrugCard = () => {
  const date = new Date();

  const [drugs, setDrugs] = useState(() => {
    const drugs = JSON.parse(localStorage.getItem("drugs"));
    return drugs || [];
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("drugs", JSON.stringify(drugs));
  }, [drugs]);

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
    <div className="med-card">
      <h1>We are {date.toLocaleDateString()}</h1>
      <DrugForm onAdd={addDrug} />
      <DrugList items={drugs} handleDelete={onDelete} />
    </div>
  );
};

export default DrugCard;
