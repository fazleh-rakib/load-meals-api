const loadMeal = (searchText) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data));
};

const displayMeals = (meals) => {
  // console.log(meals.meals);
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerText = "";
  const meals1 = meals.meals;
  for (const meal of meals1) {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
      <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onClick ="loadIdMeals(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetails">
                     Meals Details
                  </button>
                </div>
              </div>`;

    mealsContainer.appendChild(mealDiv);
  }
};

const input = document.getElementById("meal-input");
const btnSubmit = document.getElementById("btnId");
input.addEventListener("keyup", function (e) {
  let val = e.target.value;
  if (val === "") {
    btnSubmit.setAttribute("disabled", true);
  } else {
    btnSubmit.removeAttribute("disabled");
  }
});

const btnSearch = () => {
  if (input.value !== "") {
    loadMeal(input.value);
  }
};

const loadIdMeals = (idMeal) => {
  console.log(idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayIdMeal(data.meals[0]));
};

const displayIdMeal = (Meal) => {
  document.getElementById("mealsDetailsLabel").innerText = Meal.strMeal;
  const mealDetails = document.getElementById("str-catagory");
  mealDetails.innerHTML = `
  <h2>Area : ${Meal.strArea} </h2>
  <h2>Catagory : ${Meal.strCategory} </h2>
   <p> Ingredient-1 : ${Meal.strIngredient1}</p>
   <p> Ingredient-2 : ${Meal.strIngredient2}</p>
   <p> Ingredient-3 : ${Meal.strIngredient3}</p>
   <p> Ingredient-4 : ${Meal.strIngredient4}</p>
  `;
};

loadMeal("chicken");
