import { Utils } from "./Utils.js";

const dataReader = async () => {
  let data = await Utils.readDataFile();
  console.log(data);
};

dataReader();
