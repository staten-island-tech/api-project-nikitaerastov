import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "e55b052f2549499d90d7516266234395";
const query = async function () {
  try {
    const response = await fetch("");
    const data = await response.json;
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("something went wrong here...");
  }
};
