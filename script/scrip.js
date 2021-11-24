// profile button and curresponding details or floating point.
const profileBtn = document.querySelector("#profile-btn");
const account = document.querySelector(".account");

// search icon and search form/input.
const searchIcon = document.querySelector("#search-icon");
const search = document.querySelector("#search");
const searchCloseBtn = document.querySelector("#search-close-btn");
const searchClose = document.querySelector("#search-close");

// product type
const productType = document.querySelector("#product-type");
const productTypeDetails = document.querySelector(".product-type-details");
const productTypeDetailsForm = document.querySelector(".product-type-details-form");
const form1Rest = document.querySelector("#reset-form-1");
const form1Inputs = document.querySelectorAll(".form-1-input");
const form2Inputs = document.querySelectorAll(".form-2-input");
const itemQuantity = document.querySelector("#item-quntity");
const productItemQuantity = document.querySelector("#product-type-itemQuantity");

// toggling between the account details floating window.
profileBtn.onclick = (e)=>{    
    e.preventDefault();
    if (account.classList.contains("view"))
        account.style.transition = "all 0.05s ease";
    else
        account.style.transition = "all 0.2s ease";
    account.classList.toggle("view");
}

// activating and closing the search bar.
searchIcon.onclick = (e)=>{
    e.preventDefault();
    search.classList.toggle("display");
    searchIcon.style.display = "none";
}
searchCloseBtn.onclick = ()=>{
    closeSearchBar();
}
searchClose.onclick = (e)=>{
    e.preventDefault();
    closeSearchBar();
}
// common function to close search bar
function closeSearchBar(){
    search.classList.toggle("display");
    searchIcon.style.display = "block";
}

// displaying all clear button when any of the input is selected.
form1Inputs.forEach((input)=>{  
    input.addEventListener("change", (e)=>{
        form2Inputs[0].checked = form1Inputs[0].checked;
        form2Inputs[1].checked = form1Inputs[1].checked;

        if(form1Inputs[0].checked || form1Inputs[1].checked){
            form1Rest.classList.remove("d-none");
            itemQuantity.textContent = "1 Item";
            productItemQuantity.textContent = "( 1 )";
        }

        if(!form1Inputs[0].checked && !form1Inputs[1].checked){
            form1Rest.classList.add("d-none");
            itemQuantity.textContent = "";
            productItemQuantity.textContent = "";
        }
        
        if(form1Inputs[0].checked && form1Inputs[1].checked){
            itemQuantity.textContent = "2 Items";
            productItemQuantity.textContent = "( 2 )";
        }
    });
});
form1Rest.addEventListener("click", (e)=>{
    form1Rest.classList.add("d-none");
    form2Inputs[0].checked = false;
    form2Inputs[1].checked = false;
    itemQuantity.textContent = "";
    productItemQuantity.textContent = "";
});

// activating product list option in moblie versions.
productType.onclick = (e)=>{
    e.preventDefault();
    productType.classList.toggle("clicked");
    if(productType.classList.contains("clicked")){
        productTypeDetails.classList.toggle("view");
        setTimeout(()=>{
            productTypeDetailsForm.classList.toggle("view");
        }, 5);
    }else{
        productTypeDetailsForm.classList.toggle("view");
        setTimeout(()=>{
            productTypeDetails.classList.toggle("view");
        }, 205);
    }
}

// 
form2Inputs.forEach((input)=>{
    input.addEventListener("change", (e)=>{
        form1Inputs[0].checked = form2Inputs[0].checked;
        form1Inputs[1].checked = form2Inputs[1].checked;

        if(form2Inputs[0].checked || form2Inputs[1].checked){
            itemQuantity.textContent = "1 Item";
            productItemQuantity.textContent = "( 1 )";
        }

        if(form2Inputs[0].checked && form2Inputs[1].checked){
            itemQuantity.textContent = "2 Items";
            productItemQuantity.textContent = "( 2 )";
        }

        if(!form2Inputs[0].checked && !form2Inputs[1].checked){
            itemQuantity.textContent = "";
            productItemQuantity.textContent = "";
        }
    })
})

window.onscroll = ()=>{
    if(window.scrollY > 40)
        document.querySelector("nav").classList.add("shadow-sm");
    else
        document.querySelector("nav").classList.remove("shadow-sm");
}