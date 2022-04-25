import { useState } from "react";

function NameItem({ name, onClick, index }) {
  return (
    <div>
      <button className="repeatBtn" onClick={onClick} data-id={index}>
        repeat
      </button>
      <button className="removeBtn" onClick={onClick} data-id={index}>
        remove
      </button>
      <span>{name}</span>
    </div>
  );
}

export default function App() {
  const [names, setNames] = useState(["AC", "React", "Course"]);

  const handleBtn = (event) => {
    if (event.target.className === "removeBtn") {
      const afterDeleteNames = [...names];
      afterDeleteNames.splice(Number(event.target.dataset.id), 1);
      setNames(afterDeleteNames);
    } else if (event.target.className === "repeatBtn") {
      const newNames = [...names].map((name, index) =>
        index === Number(event.target.dataset.id) ? name.repeat(2) : name
      );
      setNames(newNames);
    }
  };

  const addFooBtn = () => {
    setNames([...names, "Foo"]);
  };
  return (
    <div>
      {names.map((name, index) => (
        <NameItem name={name} index={index} onClick={handleBtn} />
      ))}
      <button onClick={addFooBtn}>Add Foo Name</button>
    </div>
  );
}
