const items = [
    {
      name: "apple",
      category: "fruit"
    },
    {
      name: "Cucumber",
      category: "vegetable"
    },
    {
      name: "Banana",
      category: "fruit"
    },
    {
      name: "Celery",
      category: "vegetable"
    },
    {
      name: "orange",
      category: "fruit"
    },
    {
      name: "sausage",
      category: "meat"
    },
    {
      name: "bacon",
      category: "meat"
    }
  ];

let map = new Map();

for(let i of items){
    let category = i.category;
    let arr = map.has(category) ? map.get(category) : [];
    arr.push(i.name);
    map.set(category, arr);
}

var select = document.getElementById("category");
for(let key of map.keys()) {
    if(key==="vegetable") continue;
    let opt = key;
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

document.getElementById("category").addEventListener("click", getItem);


document.getElementById("text").innerHTML = document.getElementById("item").value;

document.getElementById("item").addEventListener("change", getValue);

function getValue(){
    document.getElementById("text").innerHTML = document.getElementById("item").value;
}
function getItem(){
    console.log(map);
    let category = document.getElementById("category").value;
    let item = map.get(category);
    console.log(category+" "+item);

    var select1 = document.getElementById("item");
    while (select1.options.length > 0) {                
        select1.remove(0);
    }   
    for(let i in item){
        let opt = item[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select1.appendChild(el);
    }
    console.log(document.getElementById("item").value);
    document.getElementById("text").innerHTML = document.getElementById("item").value;
}



