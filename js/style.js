let cityName = document.querySelectorAll(".cityName");
let dtls = document.querySelectorAll(".dtls");

for(let j=0;j<cityName.length;j++) {
    cityName[j].addEventListener("click", ()=>{
        for(let k=0;k<cityName.length;k++) {
            if(j==k) {
                cityName[k].classList.add("active");
                dtls[k].classList.add("active");
            }else{
                cityName[k].classList.remove("active");
                dtls[k].classList.remove("active");
            }
        }
    })
}