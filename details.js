// let detailData=JSON.parse(localStorage.getItem("details"));
// console.log(detailsData.title)
// display(detailData);
// function display(data){
//     let container=document.getElementById('container').innerHTML=null;

//     let data_div = document.createElement("div");

//     let landingImage = document.createElement("img");
//     landingImage.id = "landingImage";
//     landingImage.src = elem.productColor.landingImage;

//     landingImage.addEventListener("mouseover", function () {
//       landingImage.src = elem.productColor.hoverImage1;
//     });
//     let details_div = document.createElement("div");
//     details_div.id = "details_div";

//     let title = document.createElement("h5");
//     title.innerHTML = elem.title;

//     let price = document.createElement("p");
//     price.innerHTML = elem.price;

//     let iconColor = document.createElement("div");
//     iconColor.id = "iconColor";

//     let color1 = document.createElement("img");
//     color1.src = elem.iconColor.color1;
//     //console.log(elem.iconColor.color1);

//     let color2 = document.createElement("img");
//     color2.src = elem.iconColor.color2;

//     // let color3 = document.createElement("p");
//     // color3.src = elem.iconsColor.color3;

//     // let color4 = document.createElement("p");
//     // color4.src = elem.iconsColor.color4;
//     // console.log(color4);

//     iconColor.append(color1, color2);

//     details_div.append(title, price, iconColor);

//     data_div.append(landingImage, details_div);
// container.append(data_div);
// }

let bag=document.querySelector("#bag_btn")
bag.addEventListener("click",()=>{
    window.location.href = "./checkout/checkout.html"
})