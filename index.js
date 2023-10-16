let basePrice = 0;
let curBid = 0;
let prevBid = 0;
let previmg =  "";
let basePriceInput = document.getElementById("basePrice");
let curBidInput = document.getElementById("currentBid");
let saveBtn = document.getElementById("save");

const reset = () => {
  basePrice = 0;
  curBid = 0;
  basePriceInput.value = 0;
  curBidInput.value = 0;
};

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
