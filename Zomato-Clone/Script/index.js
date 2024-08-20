let btn = document.querySelectorAll('.down');

    btn[0].addEventListener('click',()=>{
    let abc = document.querySelector(`.${btn[0].parentElement.classList[0]}`);
    let addon = document.createElement('div');
     addon.innerHTML = demon(0);
     addon.classList.add("temp2");
     if(btn[0].textContent!="🔺"){
         btn[0].textContent="🔺"
         btn[0].parentElement.classList.add('temp');
         btn[0].parentElement.append(addon);
     }
     else if(btn[0].textContent==='🔺'){
        abc.removeChild(abc.lastElementChild);
        btn[0].parentElement.classList.remove("temp");
        btn[0].textContent="🔻";
     }
  })


  btn[1].addEventListener('click',()=>{
    let abc = document.querySelector(`.${btn[1].parentElement.classList[0]}`);
    let addon = document.createElement('div');
     addon.innerHTML = demon(1);
     addon.classList.add("temp2");
     if(btn[1].textContent!="🔺"){
         btn[1].textContent="🔺"
         btn[1].parentElement.classList.add('temp');
         btn[1].parentElement.append(addon);
     }
     else if(btn[1].textContent==='🔺'){
        abc.removeChild(abc.lastElementChild);
        btn[1].parentElement.classList.remove("temp");
        btn[1].textContent="🔻";
     }
  })


  btn[2].addEventListener('click',()=>{
    let abc = document.querySelector(`.${btn[2].parentElement.classList[0]}`);
    let addon = document.createElement('div');
     addon.innerHTML = demon(2);
     addon.classList.add("temp2");
     addon.classList.add("xxx");
     if(btn[2].textContent!="🔺"){
         btn[2].textContent="🔺"
         btn[2].parentElement.classList.add('temp');
         btn[2].parentElement.append(addon);
     }
     else if(btn[2].textContent==='🔺'){
       
        abc.removeChild(abc.lastElementChild);
        btn[2].parentElement.classList.remove("temp");
        btn[2].textContent="🔻";
     }
  })

  btn[3].addEventListener('click',()=>{
   let abc = document.querySelector(`.${btn[3].parentElement.classList[0]}`);
   let addon = document.createElement('div');
    addon.innerHTML = demon(3);
    addon.classList.add("temp2");
    addon.classList.add("xxx");
    if(btn[3].textContent!="🔺"){
        btn[3].textContent="🔺"
        btn[3].parentElement.classList.add('temp');
        btn[3].parentElement.append(addon);
    }
    else if(btn[3].textContent==='🔺'){
      
       abc.removeChild(abc.lastElementChild);
       btn[3].parentElement.classList.remove("temp");
       btn[3].textContent="🔻";
    }
 })




  const demon = function giveMe(a){
    if(a===0){
     return `
      <p>
      Bakery food near me · Beverages food near me · Biryani food near me · Burger food near me · Chinese food near me · Coffee food near me · Continental food near me · Desserts food near me · Italian food near me · Mithai food near me · Momos food near me · Mughlai food near me · North Indian food near me · Pasta food near me · Pizza food near me · Rolls food near me · Sandwich food near me · Shake food near me · South Indian food near me · Street food near me
      </p>
      `;
    }
    else if(a===1){
     return `
     Bakeries near me · Bars near me · Beverage Shops near me · Bhojanalya near me · Cafés near me · Casual Dining near me  · Clubs near me · Cocktail Bars near me · Confectioneries near me · Dessert Parlors near me · Dhabas near me · Fine Dining near me · Food Courts near me · Food Trucks near me · Irani Cafes near me · Kiosks near me · Lounges near me · Meat Shops near me · Microbreweries near me · Paan Shop near me · Pubs near me · Quick Bites near me  · Sweet Shops near me
     `;
    }
    else if(a===2){
      return `
         <p class="xxx">
         <div class="xyz">
            <div>Bikanervala</div>
            <div>Biryani Blues</div>
            <div>BTW</div>
            <div>Burger King</div>
         </div>

         <div class="xyz">
                 <div>Burger Singh</div>
                 <div> Domino's</div>
                 <div>Dunkin'</div>
                 <div>Haldiram's</div>
         </div>
              
         <div class="xyz">
                  <div>KFC</div>
                  <div>Krispy</div>
                  <div>Kreme</div>
         </div>

         <div class="xyz">
                   <div>McDonald's</div>
                   <div>Moti Mahal Delux</div>
                   <div>Om Sweets & Snacks</div>
                   <div>Pizza Hut</div>
         </div>

         <div class="xyz"> 
             <div>Sagar Ratna</div>
             <div>Subway</div>
             <div>WOW! Momo</div>              
         </div>
      </p>
`;
    }
    else if(a===3){
      return `
             <p class="xxx">
         <div class="xyz">
            <div>Delhi</div>
            <div>Mumbai</div>
            <div>Pune</div>
            <div>Agra</div>
         </div>

         <div class="xyz">
                 <div>Jammu</div>
                 <div>Noida</div>
                 <div>Hyderabad</div>
                 <div>Jaipur</div>
         </div>
              
         <div class="xyz">
                  <div>Patna</div>
                  <div>Jodhpur</div>
                  <div>Lucknow</div>
                  <div>Bengaluru</div>

         </div>

         <div class="xyz">
                   <div>Allahabad</div>
                   <div>Nagpur</div>
                   <div>Varanasi</div>
                   <div>Bhopal</div>
         </div>

         <div class="xyz"> 
             <div>Surat</div>
             <div>Kota</div>
             <div>Jodhpur</div>  
             <div>Chandigarh</div>            
         </div>

          <div class="xyz"> 
             <div>Goa</div>
             <div>Mysore</div>
             <div>Haridwar</div>  
             <div>Ajmer</div>            
         </div>


      </p>
      `
    }
  
}
  






