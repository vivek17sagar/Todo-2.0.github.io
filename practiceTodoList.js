const title = document.querySelector(".title-input")
const description = document.querySelector(".description-input")
const btn = document.querySelector(".button button")
let list = document.querySelector(".list-container");
const fxTime = document.querySelector('.fxTime');
const Clock = document.querySelector('.Clock');


let container = [],
currentTime = 0,
count = 0,
userInput = [];




function updateClock(callback){
let date = new Date(),
fixTime = date.toLocaleTimeString(),
tt = document.querySelector('.time');
tt.innerHTML = fixTime;

let hr = date.getHours();
hr = hr*60;
let mn = date.getMinutes();
currentTime = hr+mn;

if(count%2==0){
    tt.style.backgroundColor = "rgb(231, 76, 60)";
}else{
    tt.style.backgroundColor = "rgb(46, 204, 113)";
}
    count++;
    callback();
    updateTime();   
}
setInterval(updateClock,1000,renderBox);




let totalTime = 0;

function getUserTime(){
    let inputTime = fxTime.value;
    let inputHr = +inputTime.slice(0,2);
    inputHr = inputHr*60;
    let inputMin = inputTime.slice(3,5);
     totalTime = +inputHr + +inputMin;
}

function updateTime(){
    userInput.forEach((item)=>{
        if(item.time == 0){
            item.time = 0;
        }else{
        item.time = item.userTime-currentTime;
    }

    })
}



btn.addEventListener('click',(e)=>{
   
getUserTime();
    
userInput.push({
        title: title.value,
        description: description.value,
        time: totalTime-currentTime,
        userTime: totalTime
    })
   
   
e.preventDefault();
    
const check = new Promise((resolve,reject)=>{
    if(title.value.length == 0 || description.value.length == 0){
        reject();
    }else{
        resolve();
    }
})
     
check.then(()=>{

const element = document.createElement("div")   

    element.classList.add("box");
    element.innerHTML = `  
    <div class = "dateTime">
        <div class = "date common">Wait..</div>
    </div>
    <div class="title"><h1>Loading...</h1></div>
    <div class="description">Loading...</div>
    <div class="buttons">
    <button class = "done" type="submit">Done</button>
    <button class = "remove" type="submit">Remove</button>    
    </div>`;
    document.querySelector(".list-container").append(element);

        title.value = ""
        description.value = ""
        fxTime.value = "";
   
        renderBox();
   
    })
    .catch(()=> alert("Something went wrong !!!!!"))
})


function renderBox(){
    let boxes = document.querySelectorAll(".box");
    userInput.sort((a,b)=>{
        return a.time-b.time;
    })

    boxes = Array.from(boxes);

    userInput.forEach((data,index)=>{
        let timeHead = boxes[index].children[0].children[0];
        let sortTitle = boxes[index].childNodes[3];
        let sortDescription = boxes[index].childNodes[5];
        
        timeHead.textContent = data.time + " min";
        sortTitle.textContent = data.title;
        sortDescription.textContent = data.description;
    })
    userInput.time =  totalTime-currentTime;
}


let index = 1,
index2 = 1;

list.addEventListener('click',(event)=>{
    if(event.target.classList.contains("done")){
    var titleA = event.target.parentNode.previousElementSibling.previousElementSibling;
    var descrip = event.target.parentNode.previousElementSibling; 
    titleA.style.textDecoration = "line-through"
    descrip.style.textDecoration = "line-through"

    var remov = event.target.parentNode.parentNode;
        
        for(let item in userInput){
            if(userInput[item].title == titleA.textContent){
                userInput.splice(item,1);
            }
        }
        setTimeout(()=>{
            remov.remove();
        },500)
        
    createDoneDataList(index,titleA.textContent,descrip.textContent)
    index++;    
     
    remov.style.boxShadow = "0px 0px 30px 20px green";
}
    if(event.target.classList.contains("remove")){
        var remov = event.target.parentNode.parentNode;
        var titlea = event.target.parentNode.previousElementSibling.previousElementSibling;
        var descripa = event.target.parentNode.previousElementSibling;
       
        for(let item in userInput){
            if(userInput[item].title == titlea.textContent){
                userInput.splice(item,1);
            }
        }

        createDeleteDataList(index2,titlea.textContent,descripa.textContent)
        index2++;
        remov.remove();
    }
})










