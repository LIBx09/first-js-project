function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');

    const pentagonArea = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', pentagonArea);
    console.log(pentagonArea);
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, pentagonArea){
    const element = document.getElementById('pentagon-area');
    element.innerText =  pentagonArea;
}
