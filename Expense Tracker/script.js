const budgetAmount = document.querySelector(".budget-text");
const setBudgetButton = document.querySelector(".set-budget");
const amountDisplay = document.querySelector(".total-budget-value");
const expenseDisplay = document.querySelector(".expenses-value");
const balanceDisplay = document.querySelector(".balance-value");
const expenseListBox = document.querySelector(".end-box");
const body=document.querySelector("body");


setBudgetButton.addEventListener("click",()=>{

amountDisplay.innerHTML=budgetAmount.value;
expenseDisplay.innerHTML=0;
balanceDisplay.innerHTML=amountDisplay.innerHTML-expenseDisplay.innerHTML;
budgetAmount.value=0;

})

const checkAmountButton = document.querySelector(".check-amount");

checkAmountButton.addEventListener('click',()=>{
  const titleName =document.querySelector(".product-name");
  const productName = document.querySelector(".product-cost");
  
  if(titleName.value && productName.value) createExpense(titleName.value,productName.value);
  titleName.value="";
  productName.value="";
  const foot = document.querySelector(".footer");
  foot.classList.add("extra");
})

const createExpense=(a,b)=>{
      const babyElement = document.createElement('div');
      babyElement.classList.add("babyElement");
      babyElement.innerHTML=`
       <h3>‖${a}</h3>
       <p>${b}/- 
        <button class="delete-button">delete</button>
       </p>
       `
       expenseDisplay.innerHTML=Number(expenseDisplay.innerHTML)+Number(b);
       balanceDisplay.innerHTML=amountDisplay.innerHTML-expenseDisplay.innerHTML;
       expenseListBox.append(babyElement);

}
expenseListBox.addEventListener('click',(e)=>{
     if(e.target.classList.contains("delete-button")){
     e.target.parentElement.parentElement.remove();
     const x= e.target.parentElement.innerHTML;
     let ans="";
     for(let i =0; i<x.length;i++){
       if(x[i]!='/'){
        ans=ans+x[i];
       }
       else if(x[i]==='/'){
        break;
       }
     }
     console.log(Number(ans));
     expenseDisplay.innerHTML=Number(expenseDisplay.innerHTML)-Number(ans);
     balanceDisplay.innerHTML=amountDisplay.innerHTML-expenseDisplay.innerHTML;
  }
})
setInterval(() => {
  if(Number(balanceDisplay.innerHTML)<0){
   body.classList.add("negativeBal")
   }
  else{
    body.classList.remove("negativeBal")
  }
}, 1000);
