import { Gender } from "./Gender";
import { Status } from "./Status";

export function Character(character) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid rounded-pill"
      />
      <p>{`Origin: ${character.origin && character.origin.name}`}</p>
      <Gender gender={character.gender} />
      <Status status={character.status} />
    </div>
  );
}
export default Character;
