let selectedRow = null;

function showAlert(message, className){
    const div = document.createElement("div")
    div.className = `alert alert-$(className)`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000)
}

function createFiled(){
    document.querySelector("#name").value = "";
    document.querySelector("#surname").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#payment").value = "0";
}


document.querySelector("#studentf").addEventListener("submit", (e) =>{
    e.preventDefault();
    // Get form Values 
    const name = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const dat = document.querySelector("#date").value;
    const select = document.querySelector("#payment").value;
    

    // validate

    if(name == "" || surname == "" ||  dat == ""){
        alert("Field bo'sh")
    }else{
        if(selectedRow === null){
            const list = document.querySelector("#student")
            const row = document.createElement("tr")

            row.innerHTML = `
                <td>${name}</td>
                <td>${surname}</td>
                <td>${dat}</td>
                <td>${select}</td>
                <td>
            
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            createFiled()
            alert("person created")
        }else{
            selectedRow.children[0].textContent = name;
            selectedRow.children[1].textContent = surname;
            selectedRow.children[2].textContent = dat;
            selectedRow.children[3].textContent = select;
            selectedRow = null;
        }
        createFiled();
    }

});

// Edit Data

// document.querySelector("#student").addEventListener("click", (e)=>{
//     target = e.target;
//     if(target.classList.contains("edit")){
//         selectedRow = target.parentElement.parentElement;
//         document.querySelector("#name").value = selectedRow.children[0].textContent;
//         document.querySelector("#surname").value = selectedRow.children[1].textContent;
//         document.querySelector("#date").value = selectedRow.children[2].dat;   
//         document.querySelector("#payment").value = selectedRow.children[3].select;
//         alert('student edited')
//     }
    
// })

document.querySelector('#student').addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        // showAlert("user ocirldi", "danger")
        alert("o'chirildi")
    }
})

function edit(row){
    alert('a')
}