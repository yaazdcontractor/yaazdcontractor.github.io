// let workBtn = document.querySelector("#workBtn");
// let work = document.querySelector("#work");
// work.addEventListener('click', ()=>{
//   if(work.style.display==none){
//     work.style.display="inline-block"
//   } else {
//     work.style.display="none"
//   }
//
//
// });


let work = document.getElementById('work-container');
// work.style.display="none";
work.style.transform = 'scaleX(0)'

function toggle(){
  console.log("clicked");
  let work = document.getElementById('work-container');
  if (work.style.transform == 'scaleX(0)') {
      // work.style.display = 'flex';
      // work.style.height='600px';
      work.style.transform = 'scaleX(1)'
  }
    else {
      work.style.transform = 'scaleX(0)'
      // work.style.height='0px';
      // work.style.display = 'none';
  }
}
