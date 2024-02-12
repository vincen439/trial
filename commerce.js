const cartItermElement=document.getElementById('cartIterms');
const totalPriceElement=document.getElementById('totalPrice');
let totalPrice=0;


function addToCart(productName, price){
    const newIterm= document.createElement('li');
    newIterm.textContent=`${productName} {price.tofixed(2)}`;
    cartItermElement.appendChild(newIterm);
    totalPrice+=price;
    totalPriceElement.textContent=`Total: $${totalPrice.toFixed(2)}`;

    const addToCart=document.querySelectorAll('product button');
    addToCart.forEach((button)=>{
        button.addEventListener('click',()=>{
            const productElement=button.parentNode;
            const productName=productElement.querySelector("h3").textContent;
            const price=parseFloat(productElement.querySelector('p')).textContent.slice(1);

            addToCart(productName,price);
        });
    })
};