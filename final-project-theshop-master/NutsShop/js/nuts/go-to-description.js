//Onclick on product-item image it goes to a new page where this item is descripted

const imageWrapper = document.querySelectorAll(".image-wrapper")
for(let i=0; i<imageWrapper.length; i++){
    imageWrapper[i].addEventListener("click", () => {
        window.location.href = 'C:/Users/Admin/Desktop/Web/NutsShop/html/product-info.html'
    })
}