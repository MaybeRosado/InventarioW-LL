let inventory2 = new Inventory();

const save =document.getElementById("save");
save.addEventListener('click', function(){
    let name=document.getElementById("eName").value;
    let code = document.getElementById("eCode").value;
    let cantidad = document.getElementById("eAmount").value;
    let cost = document.getElementById("eCosto").value;

    let pNuevo = new Product(name, code, cantidad, cost);
    console.log(pNuevo.add(pNuevo));
})

const remove =document.getElementById("remove");
remove.addEventListener('click', function(){
console.log(inventory2.removeData(document.getElementById("eCode").value));
})



const listIndex = document.getElementById("insertAt");
insertAt.addEventListener('click', function(){
console.log(inventory2.insertAt())
})

/*const search=document.getElementById("search");
search.addEventListener('click', function(){
    inventory2.search()
})*/

const list=document.getElementById("list");
list.addEventListener('click', function(){
    console.log(inventory2.list())
})

/*const reverseList=document.getElementById("reverseList");
reverseList.addEventListener('click', function(){
    console.log(inventory2.reverseList())
})*/