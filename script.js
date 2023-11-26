let img = document.querySelectorAll(".img");
let popup = document.querySelector(".popup_img");
let big_img=document.querySelector(".big_img")
let btn =document.querySelector(".btn")
img.forEach((item) => {
  item.addEventListener("click", () => {
    popup.style.display="flex";
    big_img.src=item.src;
    btn.addEventListener("click",()=>{
        popup.remove();
       })
  });
});
