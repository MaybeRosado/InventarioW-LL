class Product{
    constructor(code, name, amount, cost){
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
  
    }
  
    info(){
        return `Código: ${this.code()}  Nombre: ${this.name()}  Cantidad: ${this.amount()}  Costo: ${this.cost()}`
    }
  
  
  }
  
  
  
  
  
  class Node{
    constructor(data, next){
        this.data = data
        this.next = next
    }
  }

  class Inventory{
    constructor(){
        this.primero= null
        this.size = 0;
    }
  

    add(nuevo){
        if (this.primero==null)
          this.primero=nuevo;
        else{
          let temp=this.primero;
          while (temp.next!=null)
            temp=temp.next;
          temp.next=nuevo;
        }
      }

  list(){ 
    let res="";
    let temp=this.primero;
    while(temp!=null){
        res+=temp.info;
        temp=temp.next;
    }
    return res;
}

insertAt(data, index){
    if(index < 0 || index > this.size){
        return null;
    }
    const newNode = new Node(data)
    let current = this.primero
    let previus;
    if(index == 0){
        newNode.next = current;
        this.primero = newNode;

    }else{
        for(let i = 0; i < index; i++){
            previus = current
            current = current.next

             }
             newNode.next = current;
             previus.next = newNode;
        }
        this.size++
    }

removeData(data){
    let current = this.primero;
    let previus = null;
    while(current != null){
        if(current.data === data){
            if(!previus){
                this.primero = current.next;
            }else{
                previus.next = current.next
            }
            this.size--
            return current.data;

        }
        previus = current;
        current = current.next;
    }
    return null;
}

search(code){
    let current = this.primero
    while(current != null){
        if(current == code){
            return current.info
        }else{
            return null;
        }


    }

}


}


let inventory2 = new Inventory();

const agregar = document.getElementById("addBtn");
agregar.addEventListener('click', function(){
    let name=document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let cantidad = document.getElementById("amount").value;
    let cost = document.getElementById("price").value;

    let pNuevo = new Product(name, code, cantidad, cost);
     inventory2.add(pNuevo);
     document.getElementById("listOfProducts").innerHTML = "<p>Se agrego el producto correctamente</p>"
})

const remove =document.getElementById("deleteBtn");
remove.addEventListener('click', function(){
    const Delete = inventory2.removeData(document.getElementById("productDel").value)
    document.getElementById("remove").value = ``
    if(Delete == true){
        document.getElementById("list").innerHTML = "<h4> El prodcuto se ha eliminado </h4>"
        }else{
            document.getElementById("list").innerHTML = "<h4> El producto no existe </h4>"
        }
})



// const listIndex = document.getElementById("insertAt");
// insertAt.addEventListener('click', function(){

    

// })

const search=document.getElementById("search");
search.addEventListener('click', function(){
    const code = inventory2.search(document.getElementById("searchCode").value)
    document.getElementById("searchCode").value = ``
    if(code != null){
        return `${code.info}`
    }else{
        document.getElementById("list").innerHTML = `<h4>El producto no existe</h4>`

    }


    
})

const List=document.getElementById("listBtn"); 
List.addEventListener('click', function(){
    if(inventory2.list()){
        document.getElementById("listOfProducts").innerHTML = `${inventory2.list()}`

    }else{
        document.getElementById("listOfProducts").innerHTML = "<h4> No hay productos en nuestra bodega </h4>"
    }
})

// const reverseList=document.getElementById("reverseList");
// reverseList.addEventListener('click', function(){
    
// })



