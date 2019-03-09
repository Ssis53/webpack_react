export default function(state=[], { type, payload }) {
  let newS;
  switch (type) {
    case "GET_POKEMONS":
      newS = [...state];
      newS = [...payload];
      return newS;
    case "RANDOM_GET":
      newS = [...state];
      newS.length < 4? newS.push(payload): newS.splice(newS.length - 1, 1, payload);
      return newS  
    default:
      return state;
  }
}