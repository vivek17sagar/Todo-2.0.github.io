let tableContent = document.querySelector('.container-table');
let completedBtn = document.querySelector('.feature-1');
let todoContainer = document.querySelector('.list-container');
let containerList = document.querySelector('.containerList');
let deletedContent = document.querySelector('.deleted-table');
let deletedBtn = document.querySelector('.feature-3');
let homeBtn = document.querySelector('.feature-0');
let deletedContainerList = document.querySelector('.deletedContainerList');
let logoBtn = document.querySelector('.logo');

tableContent.classList.add("displayBlock");
deletedContent.classList.add("displayBlock");

completedBtn.addEventListener('click',()=>{
    deletedContent.classList.add("displayBlock");
    todoContainer.classList.add("displayBlock");
    tableContent.classList.remove("displayBlock");   
})

deletedBtn.addEventListener('click',()=>{
    todoContainer.classList.add("displayBlock");
    tableContent.classList.add("displayBlock");
    deletedContent.classList.remove("displayBlock");
})

homeBtn.addEventListener('click',()=>{
    tableContent.classList.add("displayBlock");
    deletedContent.classList.add("displayBlock");
    todoContainer.classList.remove("displayBlock");
})

logoBtn.addEventListener('click',()=>{
    tableContent.classList.add("displayBlock");
    deletedContent.classList.add("displayBlock");
    todoContainer.classList.remove("displayBlock");
})






function createDoneDataList(index,title,description){

    const makeBox = document.createElement("tr");
    makeBox.classList.add("row-data");
    makeBox.innerHTML = `
        <td>${index}</td>
        <td>${title}</td>
        <td>${description}</td>
        <td style = "color:#5f27cd">Done</td>`
    containerList.append(makeBox);
}


function createDeleteDataList(index,title,description){

    const removeBox = document.createElement("tr");
    removeBox.classList.add("row-data");
    removeBox.innerHTML = `
        <td>${index}</td>
        <td>${title}</td>
        <td>${description}</td>
        <td style = "color:red">Deleted</td>`
        deletedContainerList.append(removeBox);
}

