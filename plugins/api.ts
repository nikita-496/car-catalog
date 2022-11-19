
export default function ({ $axios }) {
  $axios.setHeader("X-RapidAPI-Key", "1db2896dc9msh4fcdbdc925d1f37p1e4eaejsn6cf5f3174af4");

  $axios.setHeader("Content-Type", "application/json;charset=UTF-8");

  $axios.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  $axios.setHeader("Access-Control-Allow-Credentials", true);
}


export enum API {
  Makes = "makes",
  Models = "models",
  Trims = "trims",
  Bodies = "bodies",
  Engines = "engines",
  Exterior = "exterior-colors",
  Interior = "interior-colors",
  Mileages = "mileages",
};

