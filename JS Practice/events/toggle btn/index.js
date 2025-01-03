let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let text = document.querySelector("#text-p");
let curtmode = "light";

btn.addEventListener("click", () => {
    if(curtmode === "light"){
        curtmode = "dark";
        btn.innerHTML = "Light Mode";
        body.classList.add("dark");
        body.classList.remove("light");
        text.innerText = "We are in " + curtmode.toUpperCase() + " mode".toUpperCase();
    }else{
        curtmode = "light";
        body.classList.add("light");
        btn.innerHTML = "Dark Mode";
        body.classList.remove("dark");
        text.innerText = "We are in " + curtmode.toUpperCase() + " mode".toUpperCase();
    }
    console.log(body);
});