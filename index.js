let basePrice = 0;
let curBid = 0;
let prevBid = 0;
let previmg =  "";
let basePriceInput = document.getElementById("basePrice");
let curBidInput = document.getElementById("currentBid");
let saveBtn = document.getElementById("save");
let Cdiv = document.getElementsByClassName("container")[0];
let Rdiv = document.getElementsByClassName("result")[0];
let NBid = document.getElementById("next");
const reset = () => {
  basePrice = 0;
  curBid = 0;
  basePriceInput.value = 0;
  curBidInput.value = 0;
};

const psold = () =>{
  Cdiv.classList.add("hideC");
  Rdiv.classList.add("showR");
}

const dBid = () =>{
  Cdiv.classList.remove("hideC");
  Rdiv.classList.remove("showR");
}

const setCurBid = (newbid) => {
    curBid = newbid;
    curBidInput.value = curBid;
}


const  incrementCurBid = () => {   
    let toIncrement = (curBid<200)?20:50;
    let newbid = curBid + toIncrement;
    setCurBid(newbid);
}

const undo=()=>{
    document.getElementById("teamLogo").src = previmg;
    setCurBid(prevBid);
}

reset();

saveBtn.addEventListener("click", (e) => {
  console.log("Base Price: ", basePrice);
  console.log("Current Bid: ", curBid);
  e.preventDefault();
  reset();
  psold();
});

NBid.addEventListener("click", (e) =>{
    dBid();
});

basePriceInput.addEventListener("change", (e) => {
    basePrice = parseInt(e.target.value);
    setCurBid(basePrice);
})

curBidInput.addEventListener("change", (e) => {
    curBid = parseInt(e.target.value);
    setCurBid(curBid);
})

document.addEventListener("keypress", (e) => {
  if (
    basePriceInput !== document.activeElement &&
    curBidInput !== document.activeElement
  ) {
    let key = parseInt(e.key);
    if (key >= 0 && key <= 9) {
      previmg = document.getElementById("teamLogo").src;
      prevBid = curBid;
      document.getElementById("teamLogo").src = `./Images/team${key}.png`;
      incrementCurBid();
    }
    if(e.key === "u")
        undo();
  }
});
