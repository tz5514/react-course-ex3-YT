import { useState } from "react";

function NameItem({ name, onRemove, onRepeat }) {
  return (
    <div>
      <button onClick={onRepeat}>
        repeat
      </button>
      <button onClick={onRemove}>
        remove
      </button>
      <span>{name}</span>
    </div>
  );
}

export default function App() {
  const [names, setNames] = useState(["AC", "React", "Course"]);

  const removeName = (targetIndex) => {
    const newNames = names.filter((name, index) => (
      index !== targetIndex
    ));
    setNames(newNames);
  }

  const repeatName = (targetIndex) => {
    const newNames = names.map((name, index) => (
      index === targetIndex ? name.repeat(2) : name
    ));
    setNames(newNames);
  };

  const addFooBtn = () => {
    setNames([...names, "Foo"]);
  };
  return (
    <div>
      {names.map((name, index) => (
        <NameItem
          name={name}
          onRemove={() => removeName(index)}
          onRepeat={() => repeatName(index)}
        />
      ))}
      <button onClick={addFooBtn}>Add Foo Name</button>
    </div>
  );
}
