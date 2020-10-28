function component() {
    const element = document.createElement('div');
    debugger;
    // Lodash, now imported by this script
    element.innerHTML = "hello world"

    return element;
}

document.body.appendChild(component());