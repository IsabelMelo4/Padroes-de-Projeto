textList = []
newText = [];


function addText(text){

    textList.push(text);
    textScreen.value += text;
    console.log(textList);

}

function removeText(){
textList.shift()

}

btnA.onclick = () =>addText("A");
btnE.onclick = () => addText("E");
btnI.onclick = () =>addText("I");
btnO.onclick = () => addText("O");
btnU.onclick = () => addText("U");
btnUndo.onclick = () => removeText();

   