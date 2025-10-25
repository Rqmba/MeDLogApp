import { useState } from "react";

const DrugForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default DrugForm;
