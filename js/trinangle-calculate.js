function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseInputText = triangleBaseInput.value;
    const base = parseInt(triangleBaseInputText);
    // console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightInputText =triangleHeightInput.value;
    const height = parseInt(triangleHeightInputText);
    // console.log(height);

    const area = 0.5 * base * height;
    console.log('Triangle area is:', area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthInputText = rectangleWidthInput.value;
    const rectangleWidth = parseInt(rectangleWidthInputText);
    // console.log(rectangleWidth);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthInputText = rectangleLengthInput.value;
    const rectangleLength = parseInt(rectangleLengthInputText);


    const rectangleArea = rectangleWidth * rectangleLength;
    console.log('Rectangle area is:', rectangleArea);

    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = rectangleArea;
}

