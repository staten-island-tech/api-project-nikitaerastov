import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "e55b052f2549499d90d7516266234395";
const query = async function () {
  try {
    const response = await fetch(
      `https://api.twelvedata.com/stocks?exchange=NASDAQ&type=Common-Stock`
    );
    const data = await response.json();
    data.data.forEach((stock) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforebegin",
        `<section class="stock-grid">
      <h3 class="name">${stock.name}</h3> 
      <div class="traits">
        <li>Symbol: ${stock.symbol}</li>
        <li>Currency: ${stock.currency}</li>
        <li>Exchange: ${stock.exchange}</li>
        <li>Country: ${stock.country}</li>
        <li>Type: ${stock.type}</li>
      </div> 
     </section>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("something went wrong here...");
  }
};
query();
console.log(data);
