// Footer Component

function buildFooter(){
    // Create footer element
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');
    copyrightP = document.createElement('p');
    copyrightP.innerHTML = '&copy; Gina Russell 2020';
    
    footerDiv.appendChild(copyrightP);
    return footerDiv;
}

const footerComponent = buildFooter();
page.appendChild(footerComponent);