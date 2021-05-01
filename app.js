const btn = document.querySelector(".container .header .mode .switch");

btn.addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("light");
});