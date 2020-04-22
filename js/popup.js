function buyForm(productId) {
    let productDetails = getProductDetails();
    productDetails.forEach(item => {
        if(item.id == productId) {
            document.getElementById("modal__title").innerText = item.title
            document.getElementById("modal__price").innerText = item.price
        }
    });
    showModal();
}

function showModal() {
    document.getElementById("modal").className = "modal modal-active";
}

function hideModal() {
    document.getElementById("modal").className = "modal modal-disabled";
}

function buy() {
    item = document.getElementById("modal__title").innerText
    alert("The order for: " + item + " has been placed")
}