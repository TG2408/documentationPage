let btn = document.getElementById("btn");
let index = document.getElementsByClassName("index");

btn.addEventListener("click", () => index[0].style.display == "none" ? index[0].style.display = "flex" : index[0].style.display = "none");
// {
//     index[0].style.display = "flex"
// })

