
//change navigation color on scroll
window.onload = function checkScroll(){
    Scrolled()
};
function Scrolled(){
    var fixedNav = document.getElementById("nav2");
    if(document.body.scrollTop < 0|| document.documentElement.scrollTop<0){
        fixedNav.style.backgroundColor = "rgb(88, 238, 150)";
    }
    else{
        fixedNav.style.backgroundColor = " rgb(88, 238, 150)"; 
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready(){
    var removebtns = document.getElementsByClassName("btn-danger");
    for(var i=0; i<removebtns.length; i++){
        var clicked = removebtns[i].addEventListener("click", removeCartItem);
        clicked;
    }
    //making sure input is not zero or a negative value
    var inputSection = document.getElementsByClassName("cart-quantity-input");
for(var i =0; i<inputSection.length; i++){
    inputSection[i].addEventListener("change", MakeValidValue);
   // console.log(inputSection[i]);
    }      

}
//working on the remove button

function removeCartItem(event){
    event.target.parentElement.parentElement.remove();
    updateTotal();
    //the target value is wherever the listener function is placed
//and the event property is predefined in js
}
//UPDATING TOTAL
function updateTotal(){
    //Item1 on the cart
var cartItems = document.getElementsByClassName("cart-items")[0];
var cartRows = cartItems.getElementsByClassName("cart-row");
//looping through all item rows
var total = 0;
for(var i=0; i<cartRows.length; i++){
    eachCartRow = cartRows[i];
    var priceElement = eachCartRow.getElementsByClassName("each-price")[0];
    var price = priceElement.innerText.replace("$", "");//removed $ sign but still a string not float
    var quantity = eachCartRow.getElementsByClassName("cart-quantity-input")[0].value;
    total = total + parseFloat( (price*quantity) );
   total = Math.round(total * 100) / 100 //rounding off to prevent overfloating
    var finalTotalElement = document.getElementsByClassName("cart-total-price")[0];
    finalTotalElement.innerText = "$" + total;
    //console.log(total);
                                    }
                                } 
                            
updateTotal();

       
function MakeValidValue(event){
    var input = event.target;
    if(isNaN(input.value)||(input.value<=0)){
        input.value = 1;
    alert("Quantity must not be less than 1 \n You can click 'remove' ");
      // console.log(input.value);
     
     }
     updateTotal();
      }
//MAKING ADD TO CART BUTTTON FUNCTIONAL
var addToCartBtn = document.getElementsByClassName("cart-btn");
for(var i =0; i<addToCartBtn.length; i++){
    var EachAddToCartBtn = addToCartBtn[i];
    EachAddToCartBtn.addEventListener("click", addItemToCart);
}
function addItemToCart(){
     var imgSrc = document.getElementsByClassName("cart-item-image")[0].src;
     var price = document.getElementsByClassName("each-price")[0].innerText;
     var title = document.getElementsByClassName("cart-item-title")[0].innerText;
      console.log(imgSrc,price,title);
    var CreateCartElement= document.createElement("div");
    CreateCartElement.innerHTML = `   <div class="cart-row">
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="${imgSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price each-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
     <input class="cart-quantity-input" type="number" value="1">
     <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
  </div>`
   var cartItemsDiv = document.getElementsByClassName("cart-items")[0];
   cartItemsDiv.append(CreateCartElement);
   console.log(cartItemsDiv);

   updateTotal();
   var removebtn =document.getElementsByClassName("btn-danger");
   for(var i=0; i<removebtn.length; i++){
       removebtn[i].addEventListener("click", removeCartItem);
   }
 
}
//workimg on PurchaseBtn
function thankCustomer(){
   alert("Thank you for Buying from our store")
}


 
 










//setInterval(updateTotal,1000); 
    //keeps on updating total/1second




