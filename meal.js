const loadMeal = (searchText) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data));
};

const displayMeals = (meals) => {
  //   console.log(meals.meals);
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerText = "";
  const meals1 = meals.meals;
  for (const meal of meals1) {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
      <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>`;

    mealsContainer.appendChild(mealDiv);
  }
};
// disable button and enable button
// const buttonSub = document.getElementById("btnId");
// const input = document.getElementById("meal-input");
// input.addEventListener("keyup", function (event) {
//   const val = event.target.value;
//   if (val === "") {
//     buttonSub.setAttribute("disabled", true);
//   } else {
//     buttonSub.removeAttribute("disabled");
//   }
// });

// const btnSearch = () => {
//   if(input.value !== ""){
//     console.log(input.value, 'input value')
//     loadMeal(input.value)
//   }
// };


const input = document.getElementById('meal-input')
const btnSubmit = document.getElementById('btnId')

input.addEventListener('keyup', function(e){
  let val = e.target.value
  if (val === '') {
    btnSubmit.setAttribute('disabled', true)
  }
  else{
    btnSubmit.removeAttribute('disabled')
  }
})

const btnSearch = ()=>{
  if (input.value !== '') {
    loadMeal(input.value)
  }
}

loadMeal("chicken");
