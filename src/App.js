import React from "react";
import "./styles.css";
import drinks from "./drinks";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: ""
    };
  }

  selectRecipe(i) {
    this.setState({ currentRecipe: drinks[i] });
    if (window) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const recipe = this.state.currentRecipe;
    return (
      <div className="App">
        <aside>
          {drinks &&
            drinks.map((c, i) => {
              return (
                <div
                  className="drinkLink"
                  onClick={() => this.selectRecipe(i)}
                  key={i}
                >
                  {c.Name}
                </div>
              );
            })}
        </aside>
        <div className={"recipeContainer"}>
          {recipe === "" && (
            <p className="empty">
              &lt;------Select from list <br />
              <br />A collection of drinks By Ron Terrell
            </p>
          )}
          {recipe !== "" && (
            <div className="recipe">
              <div className="recipeLeft">
                <h3>Ingredients</h3>
                <ul>
                  <li>{recipe["Ingredient 1"]}</li>
                  {recipe["Ingredient 2"] && <li>{recipe["Ingredient 2"]}</li>}
                  {recipe["Ingredient 3"] && <li>{recipe["Ingredient 3"]}</li>}
                  {recipe["Ingredient 4"] && <li>{recipe["Ingredient 4"]}</li>}
                  {recipe["Ingredient 5"] && <li>{recipe["Ingredient 5"]}</li>}
                </ul>
              </div>
              <div className="recipeRight">
                <h1>{recipe.Name}</h1>
                {recipe.Instructions}
                <hr />
                Source: {recipe.Source}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
