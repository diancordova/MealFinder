import '../component/meal-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main = function () {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = async () =>{
       try {
           const result = await DataSource.searchMeal(searchElement.value)
           renderResult(result);
       } catch (error) {
           fallbackResult(message);
       }
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };
    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;