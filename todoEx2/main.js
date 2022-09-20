let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let ul = document.querySelector(".ul");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let i = 0;

a2.addEventListener("click", () =>{
    let li = document.createElement("li")
    let a4 = document.createElement("button")
    if(a1.value !== ""){
        ul.appendChild(li)
        li.innerHTML = a1.value
        li.appendChild(a4)
        a4.innerHTML = "x"
        a1.value = ""
        i++

    }
    else{
        alert("Error")
    }
    a4.addEventListener("click", () =>{
        i--
        ul.removeChild(li)
        total.textContent = i

    })
    li.addEventListener("click", () =>{
        if(li.getAttribute("id")){
            li.removeAttribute("id")
        }
        else{
            li.setAttribute("id","li-decor")
        }
    })
    b2.addEventListener("click", () => {
        if(li.getAttribute("id")){
            ul.removeChild(li)

        }
    })
    b1.addEventListener("click",() =>{
        ul.removeChild(li)
    })
    total.textContent = i

})