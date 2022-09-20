let countEl = document.getElementById("count-el")
let count = 0
function increment()
{
   count ++
   countEl.innerText=count 
  
}

function decrement()
{ 
    count = count-1
    countEl.innerText=count
}
function save()
    {
let saveEl= document.getElementById("save-el")
let countStr = count + "  -  " 
saveEl.textContent += countStr
console.log(count)
count = 0
countEl.innerText= count
    }