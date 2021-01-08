var container = document.getElementById("container");
var amount = 0;
var names = [];

while(amount < 3) {
    amount = prompt("Hoeveel namen wilt u toevoegen? (Minimaal 3.)");
    list1();
};

function list1() {
       for(i = 0; i < amount; i ++) {
        var nameInput = prompt("Voer een naam in.");
        names.push(nameInput);
        var h2 = document.createElement("h2");
        container.appendChild(h2);
        var node = document.createTextNode(names[i]);
        h2.appendChild(node);
    }; 
};