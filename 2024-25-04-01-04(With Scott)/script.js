const main = document.querySelector('main');
const ns = "http://www.w3.org/2000/svg"
let svg = document.createElementNS(ns,'svg');
const row_01 = 0;
const row_02 = 101;
const row_03 = 202;
const row_04 = 303;
const row_05 = 404;

function middle_Pattern(y){
    let rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)
}
function end_Pattern(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)
}
function end_Pattern_large(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","404");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)
}
function end_two_pattern_large(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","404");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)
}
function full_Pattern(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)
}
function full_Pattern_short(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","yellow");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","yellow");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","yellow");
    svg.appendChild(rect)
}
function triple_row_left(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)
}
function triple_row_right(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)
}
function one_pattern_left(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)
}
function one_pattern_right(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)
}
function single_double_pattern(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)
}
function one_middle_left(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)
}
function one_middle_short(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","yellow");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)
}
function two_pattern_left(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)
}
function two_one_pattern(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)
}
function one_two_pattern(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)
}
function gap_pattern_left(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","blue");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)
}
function gap_pattern_large(y){
    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","101");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","202");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","303");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","transparent");
    svg.appendChild(rect)

    rect = document.createElementNS(ns, 'rect');
    rect.setAttribute("x","404");
    rect.setAttribute("y",`${y}`);
    rect.setAttribute("height","100");
    rect.setAttribute("width","100");
    rect.setAttribute("stroke","transparent");
    rect.setAttribute("fill","orange");
    svg.appendChild(rect)
}

document.querySelectorAll('button').forEach((buttion)=>{
    buttion.addEventListener('click', (e)=>{
        const letter = e.target.textContent
        switch(letter){
            case 'a':
                addLetterA();
                break;
            case 'b':
                addLetterB();
                break;
            case 'c':
                addLetterC();
                break;
            case 'd':
                addLetterD();
                break;
            case 'e':
                addLetterE();
                break;
            case 'f':
                addLetterF();
                break;
            case 'g':
                addLetterG();
                break;
            case 'h':
                addLetterH();
                break;
            case 'i':
                addLetterI();
                break;
            case 'j':
                addLetterJ();
                break;
            case 'k':
                addLetterK();
                break;
            case 'l':
                addLetterL();
                break;
            case 'm':
                addLetterM();
                break;
            case 'n':
                addLetterN();
                break;
            case 'o':
                addLetterO();
                break;
            case 'p':
                addLetterP();
                break;
            case 'q':
                addLetterQ();
                break;
            case 'r':
                addLetterR();
                break;
            case 's':
                addLetterS();
                break;
            case 't':
                addLetterT();
                break;
            case 'u':
                addLetterU();
                break;
            case 'v':
                addLetterV();
                break;
            case 'w':
                addLetterW();
                break;
            case 'x':
                addLetterX();
                break;
            case 'y':
                addLetterY();
                break;
            case 'z':
                addLetterZ();
                break;
            default:
                alert(`sorry the letter, ${letter}, is not implemented`);
        }
    })
})

function addLetterA(){
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    middle_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    full_Pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    end_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterB(){
    
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    
    triple_row_left(row_01);


    comment = document.createComment(" row 02 ");
    svg.appendChild(comment)
    end_Pattern(row_02);


    comment = document.createComment(" row 03 ");
    svg.appendChild(comment)
    triple_row_left(row_03);




    comment = document.createComment(" row 04 ");
    svg.appendChild(comment)
    end_Pattern(row_04);



    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    triple_row_left(row_05);

    main.appendChild(svg)
}

function addLetterC(){
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    middle_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    middle_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterD(){
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    triple_row_left(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    end_Pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    triple_row_left(row_05);

    main.appendChild(svg)

}

function addLetterE() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    full_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    triple_row_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    one_pattern_left(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    full_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterF() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    middle_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    middle_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterG() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    triple_row_right(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    single_double_pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    triple_row_right(row_05);

    main.appendChild(svg)
}

function addLetterH() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    end_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    full_Pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    end_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterI() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "303");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    full_Pattern_short(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    one_middle_short(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    one_middle_short(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    one_middle_short(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    full_Pattern_short(row_05);

    main.appendChild(svg)
}

function addLetterJ() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    full_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    one_middle_left(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    one_middle_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    one_middle_left(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    two_pattern_left(row_05);

    main.appendChild(svg)
}

function addLetterK() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    end_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    gap_pattern_left(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    two_pattern_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    gap_pattern_left(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    end_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterL() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    one_pattern_left(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    one_pattern_left(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    full_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterM() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "504");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    end_Pattern_large(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_two_pattern_large(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    gap_pattern_large(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern_large(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    end_Pattern_large(row_05);

    main.appendChild(svg)
}

function addLetterN() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    end_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    two_one_pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    one_two_pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    end_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterO() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    middle_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    end_Pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    middle_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterP() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    triple_row_left(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    triple_row_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    one_pattern_left(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_05);

    main.appendChild(svg)
}

function addLetterQ() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    middle_Pattern(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    end_Pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    one_two_pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    triple_row_right(row_05);

    main.appendChild(svg)
}

function addLetterR() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    triple_row_left(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    end_Pattern(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    triple_row_left(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    end_Pattern(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    end_Pattern(row_05);

    main.appendChild(svg)
}

function addLetterS() {
    svg = document.createElementNS(ns,'svg');
    svg.setAttribute('height', "504");
    svg.setAttribute("width", "403");
    
    let comment = document.createComment(" row 01 ")
    svg.appendChild(comment)
    triple_row_right(row_01);

    comment = document.createComment(" row 02 ")
    svg.appendChild(comment)
    
    one_pattern_left(row_02);

    comment = document.createComment(" row 03 ")
    svg.appendChild(comment)
    
    middle_Pattern(row_03);

    comment = document.createComment(" row 04 ")
    svg.appendChild(comment)

    one_pattern_right(row_04);

    comment = document.createComment(" row 05 ")
    svg.appendChild(comment)
    
    triple_row_left(row_05);

    main.appendChild(svg)
}