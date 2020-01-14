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


let work = document.getElementById('work');
work.style.display="none";

function toggle(){
  console.log("clicked");
  let work = document.getElementById('work');
  if (work.style.display == 'none') {
      work.style.display = 'inline-block';
  }
    else {
      work.style.display = 'none';
  }
}
