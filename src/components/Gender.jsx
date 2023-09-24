export const Gender = (character) => {
  if (character.gender === "Male") {
    return <p>{`Gender: ♂ Male`}</p>;
  } else if (character.gender === "Female") {
    return <p>{`Gender: ♀ Female`}</p>;
  } else {
    return <p>{`Gender: ❓ Unknown`}</p>;
  }
};
