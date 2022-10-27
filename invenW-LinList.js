  class Node{
    constructor(data, next){
        this.data = data
        this.next = next
    }
  }

  class Inventory{
    constructor(){
        this.head = null
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
        res+=temp.numero + "  ";
        temp=temp.next;
    }
    return res;
}

insertAt(data, index){
    if(index < 0 || index > this.size){
        return null;
    }
    const newNode = new Node(data)
    let current = this.head
    let previus;
    if(index == 0){
        newNode.next = current;
        this.head = newNode;

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
    let current = this.head;
    let previus = null;
    while(current != null){
        if(current.data === data){
            if(!previus){
                this.head = current.next;
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


}



class Product{
    constructor(code, name, amount, cost){
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
  
    }
  
    info(){
        return `Código: ${getCode()}  Nombre: ${getName()}  Cantidad: ${getAmount()}  Costo: ${getCost()}`
    }
  
    getCode(){
        return this.code;
    }
  
    getName(){
        return this.name;
    }
  
    getAmount(){
        return this.amount;
    }
  
    getCost(){
        return this.cost
    }
  
  }




let inventory2 = new Inventory();

const save =document.getElementById("save");
save.addEventListener('click', function(){
    let name=document.getElementById("eName").value;
    let code = document.getElementById("eCode").value;
    let cantidad = document.getElementById("eAmount").value;
    let cost = document.getElementById("eCost").value;

    let pNuevo = new Product(name, code, cantidad, cost);
     inventory2.add(pNuevo);
     document.getElementById("listar").innerHTML = "<p>Se agrego el producto correctamente</p>"
})

const remove =document.getElementById("remove");
remove.addEventListener('click', function(){
    const Delete = inventory2.removeData(document.getElementById(remove).value)
    document.getElementById("remove").value = ""
    if(Delete == true){
        document.getElementById("list").innerHTML = "<h4> El prodcuto se ha eliminado </h4>"
        }else{
            document.getElementById("list").innerHTML = "<h4> El producto no existe </h4>"
        }
})



const listIndex = document.getElementById("insertAt");
insertAt.addEventListener('click', function(){

    

})

/*const search=document.getElementById("search");
search.addEventListener('click', function(){
    
})*/

const list=document.getElementById("list");
list.addEventListener('click', function(){
    if(inventory2.list()){
        document.getElementById("list").innerHTML = `${inventory2.list()}`

    }else{
        document.getElementById("list").innerHTML = "<h4> No hay productos en nuestra bodega </h4>"
    }
})

/*const reverseList=document.getElementById("reverseList");
reverseList.addEventListener('click', function(){
    
})*/



