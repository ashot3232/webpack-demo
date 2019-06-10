export const renderText =
    (text, target) => {
        const pElement = document.createElement('p');
        pElement.innerText = text;
        target.appendChild(pElement);
    };
