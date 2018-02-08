const tools = document.getElementsByClassName('js-paint-tools');
let config = {};

const disableAllTools = () => {
    Array.prototype.forEach.call(tools, (tool) => {
        tool.style.background = '#FFFFFF';
    });
};

const paintCreator = document.getElementsByClassName('paint-creator')[0];

const mouseMoverColor = (event, config) => {
    const color = document.createElement('div');

    color.style.backgroundColor = config.color;
    color.style.position = 'absolute';
    color.style.left = `${event.clientX}px`;
    color.style.top = `${event.clientY - paintCreator.clientHeight / 2}px`;
    color.style.height = config.heigt;
    color.style.width = config.heigt;
    paintCreator.appendChild(color);
};

if (paintCreator) {
    paintCreator.addEventListener('mousemove', (e) => {
        mouseMoverColor(e, config);
    });
}

const activeTool = (toolName) => {
    let config = {};
    if (toolName === "rubber") {
        config = {
            color: '#FFFFFF',
            height: '20px',
        };

    } else if (toolName === "paint") {
        config = {
            color: '#000000',
            heigt: '10px',
        };
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