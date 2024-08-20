const searchButton = document.querySelector('.search-Button');
const searchBox = document.querySelector('.search-Box');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipeDetailsContent');
const recipeCloseButton= document.querySelector('.recipeCloseButton');
const foot = document.querySelector('footer');
const bannerImg = document.querySelector('.banner');

const fetchRecipes= async (query)=>{
     recipeContainer.innerHTML=`<h2>Fetching Recipes.........</h2>`
     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
     const response = await data.json();

     recipeContainer.innerHTML='';
     response.meals.forEach(meal => {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe')
      recipeDiv.innerHTML=
          `
           <img src="${meal.strMealThumb}">
           <h3>${meal.strMeal}<h3>
           <p><span>${meal.strArea}</span> Dish</p>
           <p>BELONGS TO <span>${meal.strCategory}</span> Category</p>
          `
          const button = document.createElement('button');
          button.classList.add('recipe-button')
          button.innerText="View Recipe";
          recipeDiv.appendChild(button);
          button.addEventListener('click',()=>{
               openRecipePopup(meal);
          });
          recipeContainer.appendChild(recipeDiv);

     });
 }


searchButton.addEventListener('click',(e)=>{
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  // console.log(searchInput);
     if(!searchInput){
          alert("Type the meal in search box");
          recipeContainer.innerHTML="";
          foot.style.display="none";
           bannerImg.style.display="block";
     }
     else{
          bannerImg.style.display="none";
          foot.style.display="block";
          fetchRecipes(searchInput);

     }
  // console.log("button-clicked");
  
})


const openRecipePopup=(meal)=>{
     recipeDetailsContent.innerHTML=
     `<h1 class="recipeName">${meal.strMeal}</h1>
      <h3>Ingredients</h3>
      <ul class="ingredientList">${fetchIngredients(meal)}</ul>
      <div class="recipeInstructions">
      <h3>Instructions</h3>
      <p>${meal.strInstructions}</p>
      </div>
     `

 
     recipeDetailsContent.parentElement.style.display='block';
}


const fetchIngredients =(meal)=>{
let ingredientsList = "";
for(let i=0;i<=20;i++){
     const ingredients=meal[`strIngredient${i}`];
     if(ingredients){
          const measure = meal[`strMeasure${i}`];
          ingredientsList+=`<li>${measure} ${ingredients}</li>`
     }
}
return ingredientsList;
}

const closeBtn = document.querySelector(".recipeCloseButton");
closeBtn.addEventListener("click",()=>{
     closeBtn.parentElement.style.display="none";
})