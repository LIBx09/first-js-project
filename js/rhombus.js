function calculateRhombusArea(){
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const rhombusD1InputText = rhombusD1Input.value;
    const rhombusD1 = parseFloat(rhombusD1InputText);
    // console.log(rhombusD1);

    const rhombusD2Input = document.getElementById('rhombus-d2');
    const rhombusD2InputText = rhombusD2Input.value;
    const rhombusD2 =parseFloat(rhombusD2InputText);
    // console.log(rhombusD2);

    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
    console.log('Rhombus area is:', rhombusArea);

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = rhombusArea;
}