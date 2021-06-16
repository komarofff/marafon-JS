const board=document.querySelector('#board')
const colors_array =['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
const SQUARES_NUMBER = 500 

for(let i = 0 ; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add("square")

    square.addEventListener("mouseover",()=>  setColor(square))
    square.addEventListener("mouseleave",()=>  removeColor(square))
    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor=color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
} 
function removeColor(element){
    element.style.backgroundColor="#1d1d1d"
    element.style.boxShadow=`0 0 2px #000`
}

function getRandomColor(){
    let color_arr='#';
    for (let i =0; i<6;i++){
      let index_letter=  Math.floor(Math.random()*colors_array.length)
      color_arr += `${colors_array[index_letter]}`
    }    
    return color_arr
}