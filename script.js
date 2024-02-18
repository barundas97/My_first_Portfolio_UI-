const contactDetails = document.querySelector("#contactDetails");
const li = document.createElement("li");
const li2 = document.createElement("li");
const title = document.getElementById("title");
const title2 = document.getElementById("title-2");
const modeD = document.querySelector('#themeD');
const modeL = document.querySelector('#themeL');
const body = document.body;

contactDetails.addEventListener("click", function (e){
        contactDetails.appendChild(li);
        contactDetails.appendChild(li2);
        li.classList.toggle("listItem");
        li2.classList.toggle("listItem");
        if (li.className === "listItem" && li2.className === "listItem") {
                 li.innerHTML = "Gmail: dasbarun201411@gmail.com"
                 li2.innerHTML = "Number: 8918594598";
        }else{
            li.remove();
            li2.remove();
        }
    });

    modeL.addEventListener("click",()=>{
             modeL.style.backgroundColor = "white";
             modeL.style.color = "black";
             modeD.style.color = "white";
             title.style.color = "Black";
             title.style.textDecoration ="underline"
             title2.style.color = "Black";
             title2.style.textDecoration ="underline";
             body.style.backgroundColor = "white";
             modeD.style.background = "transparent";

        
    })
    modeD.addEventListener("click",()=>{
        modeD.style.backgroundColor = "white";
        modeD.style.color = "black";
        modeD.innerHTML = "Dark Mode";
        title.style.color = "white";
        title2.style.color = "white";
        body.style.backgroundColor = "black";
        modeL.style.background = "transparent";
        modeL.style.color = "white";

    })