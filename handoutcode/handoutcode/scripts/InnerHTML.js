
function ChangeHTML(){
var oldParagraph=document.getElementById('Par1');
var newParagraph="This is a new paragraph, Paragraph 2";

for (var i=0; i<10; i++){
    var newParagraph="This is a new paragraph, Paragraph"+i;
    var paragraphElement=document.createElement("p");
    paragraphElement.innerHTML=newParagraph;
    oldParagraph.appendChild(paragraphElement);
}

}

