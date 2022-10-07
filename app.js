var input = document.querySelector(".enterList");
var addBtn = document.querySelector(".addList");
var tasks = document.querySelector(".tasks");

// Add button disabled

input.addEventListener("keyup", () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add("active");
    }
    else {
        addBtn.classList.remove ("active")
    }
})

// Add new items to list

addBtn.addEventListener("click", () => {
    if (input.value.trim() != 0) {
        var newItem = document.createElement("div");
        newItem.classList.add ("items");
        newItem.innerHTML = `
        <p> ${input.value}</p>
                <div class="itemsBtn">
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        tasks.appendChild(newItem);
        input.value = " "
        
    }

    else {
        alert ("Please enter a task")
    }
})

// Delete item from list 

tasks.addEventListener ("click" , (e) =>{
    if (e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.parentElement.remove();
    }
})

// Mark item as completed 

tasks.addEventListener ("click" , (e) =>{
    if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
})