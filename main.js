const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const CarritoIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-close")


menuEmail.addEventListener("click", toggleDesktopMenu);

menuBurger.addEventListener("click", toggleMobileMenu);

CarritoIcon.addEventListener("click", toggleCarritoIcon )

productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu(){

const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

if (!isAsideClosed){
    shoppingCartContainer.classList.add("inactive");
}

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    
    mobileMenu.classList.toggle("inactive")

    closeProductDetailAside ()
    }
 
function toggleCarritoIcon(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive");

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    
    shoppingCartContainer.classList.toggle("inactive")

    
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }

}


function openProductDetailAside() {
    productDetailContainer.classList.remove("inactive")

    shoppingCartContainer.classList.add("inactive")
}

function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive")
}


const productList = [];

productList.push({
    name: "bicicleta",
    Price: 199,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})



function renderProducts(array){
    for (product of array) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
     
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)
     
     
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
     
        const productInfoDiv = document.createElement("div");
     
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.Price;
     
        const productName = document.createElement("p");
        productName.innerText = product.name
     
        productInfoDiv.append(productName, productPrice);
     
         const productInfoFigure = document.createElement("figure");
     
         const productImgCart = document.createElement("img");
         productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
         
         productInfoFigure.appendChild(productImgCart);
     
         productInfo.append(productInfoDiv, productInfoFigure);
     
         productCard.append(productImg,productInfo)
         
         cardsContainer.append(productCard)
     }
}


renderProducts(productList)
