export const Status = (character) => {
  if (character.status === "Alive") {
    return <p>{`Status: 🟢 Alive`}</p>;
  } else if (character.status === "Dead") {
    return <p>{`Status: 🔴 Dead`}</p>;
  } else {
    return <p>{`Status: ⚪ Unknown`}</p>;
  }
};
