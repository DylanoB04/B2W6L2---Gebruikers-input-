var nameList=[];
var amountOf=0;
var text=document.getElementById('text');
var text2=document.getElementById('text2');


var amount=prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3).");
if(!amount<3){
    for(i=0;i<amount;i++){
        nameList.push(prompt("Voer een naam in."));
    };
    for(i=0;i<nameList.length;i++){
        text.innerHTML=nameList;
    };
    for(i=0;i<nameList.length;i++){
        text2.innerHTML=nameList.reverse();
    };
};