import { async } from "q";
import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); //stops form from refreshing page
    DOMSelectors.grid.innerHTML = " ";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/stocks?symbol=${searchParams}`
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
    searchQuery();
  });
};
listen();
