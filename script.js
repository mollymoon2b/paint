const tools = document.getElementsByClassName('js-paint-tools');

const disableAllTools = () => {
    Array.prototype.forEach.call(tools, (tool) => {
        tool.style.background = '#FFFFFF';
    });
};

const paintCreator = document.getElementsByClassName('paint-creator')[0];
const clearButton = document.getElementsByClassName('js-clear')[0];

if (clearButton) {
    clearButton.addEventListener('click', () => {
        paintCreator.innerHTML = '';
    })
}

const toolPaint = (colorName, height) => {
    if (paintCreator) {
        paintCreator.addEventListener('mousemove', (event) => {
            const color = document.createElement('div');

            color.style.backgroundColor = colorName;
            color.style.position = 'absolute';
            color.style.left = `${event.clientX - 10}px`;
            color.style.top = `${event.clientY - paintCreator.clientHeight + 65}px`;
            color.style.height = `${height}px`;
            color.style.width = `${height}px`;
            color.style.borderRadius = '10px';
            paintCreator.appendChild(color);
        });
    }
};

const getColor = () => {
    const colorInput = document.getElementsByClassName('js-change-color')[0];

    return colorInput.value;
};

const getSize = () => {
    const fontSize = document.getElementsByClassName('js-change-size')[0];

    return fontSize.value
};

const activeTool = (toolName) => {
    if (toolName === "rubber") {
        toolPaint('#FFFFFF', getSize());

    } else if (toolName === "paint") {
        toolPaint(getColor(), getSize());
    }
};

const selectTools = (e) => {
    disableAllTools();
    e.target.style.background = '#000000';
    activeTool(e.target.id.substr(3));
};

if (tools) {
    Array.prototype.forEach.call(tools, (tool) => {
        const typeTool = tool.id;
        console.log(typeTool);
        tool.addEventListener('click', (selectTools));
    });
}