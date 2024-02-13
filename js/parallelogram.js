function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseInputText = parallelogramBaseInput.value;
    const parallelogramBase = parseFloat(parallelogramBaseInputText);
    // console.log(parallelogramBase);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightInputText = parallelogramHeightInput.value;
    const parallelogramHeight =parseFloat(parallelogramHeightInputText);
    // console.log(parallelogramHeight);

    const parallelogramArea = parallelogramBase * parallelogramHeight;
    console.log(parallelogramArea);

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;
}