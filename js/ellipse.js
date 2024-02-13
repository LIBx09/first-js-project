function calculateEllipseArea(){
    const ellipseAceInput = document.getElementById('ellipse-aaa');
    const ellipseAceInputText = ellipseAceInput.value;
    const ellipseAce = parseFloat(ellipseAceInputText);
    // console.log(ellipseAce);

    const ellipseBaseInput = document.getElementById('ellipse-bbb');
    const ellipseBaseInputText = ellipseBaseInput.value;
    const ellipseBase = parseFloat(ellipseBaseInputText);
    // console.log(ellipseBase);

    const ellipseArea = 3.14 * ellipseAce * ellipseBase;
    console.log(ellipseArea);

    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = ellipseArea;
}