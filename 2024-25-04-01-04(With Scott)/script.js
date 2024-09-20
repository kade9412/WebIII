const main = document.querySelector('main');
document.querySelector('button').addEventListener('click',()=>{
    // xml svg provide a namespace
    // <svg xmlns="http://www.w3.org/2000/svg"
    const ns = "http://www.w3.org/2000/svg"
    const svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    let rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y","0");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y","0");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y","0");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y","0");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)


    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y","101");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y","101");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y","101");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y","101");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)


    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y","202");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y","202");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y","202");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y","202");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)




    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y","303");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y","303");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y","303");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y","303");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)



    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y","404");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y","404");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y","404");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y","404");
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","green");
    svg.appendChild(rect)



    main.appendChild(svg)
});