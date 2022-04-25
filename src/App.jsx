import { useState } from "react";

function NameItem({ name, onRemove, onRepeat }) {
  return (
    <div>
      <button onClick={onRepeat}>
        repeat
      </button>
      <button onRemove={onRemove}>
        remove
      </button>
      <span>{name}</span>
    </div>
  );
}

export default function App() {
  const [names, setNames] = useState(["AC", "React", "Course"]);

  const removeName = (index) => {
    const afterDeleteNames = [...names];
    afterDeleteNames.splice(index, 1);
    setNames(afterDeleteNames);
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
