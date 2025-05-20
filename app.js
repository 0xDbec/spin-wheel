let hasWallet=false,hasFollowed=false,isSpinning=false;

// Your colors/weights here
const wheel = new Winwheel({
  canvasId:'canvas',
  numSegments:7,
  segments:[
    {fillStyle:'#7044FF',text:'300 points',weight:70},
    {fillStyle:'#00FFD8',text:'500 points',weight:50},
    {fillStyle:'#FFD500',text:'1000 points',weight:20},
    {fillStyle:'#E040FB',text:'Mystery box ❓',weight:0.5},
    {fillStyle:'#FFEA00',text:'Golden 🎫',weight:0.1},
    {fillStyle:'#2E7D32',text:'$100 in SOL',weight:0},
    {fillStyle:'#757575',text:'Try again!',weight:15}
  ],
  animation:{type:'spinToStop',duration:5,spins:8,callbackFinished:notifyResult}
});

twttr.widgets.createFollowButton('YourTwitterHandle',document.getElementById('twitter-btn'),{size:'large'})
  .then(el=>el.addEventListener('click',()=>{hasFollowed=true;checkGates();}));

const web3Modal=new Web3Modal.default();
document.getElementById('connect-btn').onclick=async()=>{
  try{await web3Modal.connect();hasWallet=true;checkGates();}
  catch(e){console.error(e);}
};

function checkGates(){
  document.getElementById('spin-btn').disabled=!(hasWallet&&hasFollowed);
}

document.getElementById('spin-btn').onclick=()=>{
  if(isSpinning) return;
  isSpinning=true;
  wheel.startAnimation();
};

function notifyResult(segment){
  isSpinning=false;
  alert(`🎉 You won: ${segment.text}!`);
  // collapse logic (re-enable once you confirm it all works)
  // document.getElementById('wheel-wrapper').classList.add('collapsed');
}
