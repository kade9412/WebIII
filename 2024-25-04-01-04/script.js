let canvas = document.getElementById("svgBox");
let btn = document.getElementById("btn1");
let newCanvas = document.getElementById("newSVG");
let color = "blue";
let over = false;

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]
const alphabet = [
    [[0,1,1,0],[1,0,0,1],[1,1,1,1],[1,0,0,1],[1,0,0,1]], //a
    [[1,1,1,0],[1,0,0,1],[1,1,1,0],[1,0,0,1],[1,1,1,0]], //b
    [[0,1,1,0],[1,0,0,1],[1,0,0,0],[1,0,0,1],[0,1,1,0]], //c
    [[1,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,0]], //d
    [[1,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0],[1,1,1,1]], //e
    [[1,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0],[1,0,0,0]], //f
    [[0,1,1,1],[1,0,0,0],[1,0,1,1],[1,0,0,1],[0,1,1,1]], //g
    [[1,0,0,1],[1,0,0,1],[1,1,1,1],[1,0,0,1],[1,0,0,1]], //h
    [[1,1,1],[0,1,0],[0,1,0],[0,1,0],[1,1,1]],           //i
    [[1,1,1,1],[0,0,1,0],[0,0,1,0],[0,0,1,0],[1,1,0,0]], //j
    [[1,0,0,1],[1,0,1,0],[1,1,0,0],[1,0,1,0],[1,0,0,1]], //k
    [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,1,1,1]], //l
    [[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1]], //m
    [[1,0,0,1],[1,1,0,1],[1,0,1,1],[1,0,0,1],[1,0,0,1]], //n
    [[0,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]],//o
    [[1,1,1,0],[1,0,0,1],[1,1,1,0],[1,0,0,0],[1,0,0,0]], //p
    [[0,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,1,1],[0,1,1,1]], //q
    [[1,1,1,0],[1,0,0,1],[1,1,1,0],[1,0,0,1],[1,0,0,1]], //r
    [[0,1,1,1],[1,0,0,0],[0,1,1,0],[0,0,0,1],[1,1,1,0]], //s
    [[1,1,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0]],           //t
    [[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]], //u
    [[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]], //v
    [[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,0,0,1]], //w
    [[1,0,0,1],[1,0,0,1],[0,1,1,0],[1,0,0,1],[1,0,0,1]], //x
    [[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],[0,0,1,0,0],[0,0,1,0,0]], //y
    [[1,1,1,1],[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,1,1,1]], //z

    /* Numbers*/
    [[0,1,1,0],[1,0,0,1],[1,1,1,1],[1,0,0,1],[0,1,1,0]], //0
    [[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,1]],           //1
    [[1,1,1,0],[0,0,0,1],[0,1,1,0],[1,0,0,0],[1,1,1,1]], //2
    [[1,1,1,0],[0,0,0,1],[0,1,1,0],[0,0,0,1],[1,1,1,0]], //3
    [[1,0,1,0],[1,0,1,0],[1,1,1,1],[0,0,1,0],[0,0,1,0]], //4
    [[1,1,1,1],[1,0,0,0],[1,1,1,0],[0,0,0,1],[1,1,1,0]], //5
    [[0,1,1,0],[1,0,0,0],[1,1,1,0],[1,0,0,1],[0,1,1,0]], //6
    [[1,1,1,1],[0,0,0,1],[0,0,1,0],[0,1,0,0],[0,1,0,0]], //7
    [[0,1,1,0],[1,0,0,1],[0,1,1,0],[1,0,0,1],[0,1,1,0]], //8
    [[0,1,1,0],[1,0,0,1],[0,1,1,1],[0,0,0,1],[0,1,1,0]], //9
];
function newWord() {
    let newCanvasbox = document.createElement("div")
    newCanvasbox.setAttribute("id", "newCanvasbox")
    newCanvas.appendChild(newCanvasbox)
    let UI = prompt("words?").toLowerCase()
    let UIList = UI.split("")
    let x = 0;
    while(x <= UIList.length-1){
        if (UIList[x] === " "){
            let size = 10;
            const svgns = "http://www.w3.org/2000/svg";
            let svg = document.createElementNS(svgns,"svg")   
            svg.setAttribute("width", size * 8 + "px")
            svg.setAttribute("height", size * 8 + "px")
            newCanvasbox.appendChild(svg);
        }else{
            let size = 10;
            const svgns = "http://www.w3.org/2000/svg";
            let svg = document.createElementNS(svgns,"svg")   
            svg.setAttribute("width", size * 8 + "px")
            svg.setAttribute("height", size * 8 + "px")
           let input = UIList[x];
           let num = letters.indexOf(input)
           let index = alphabet[num]
           for(let y=0; y < index.length; y++){
            for(let x=0; x <index[y].length; x++){
                if(index[y][x] === 1){
                    if(index[y].length === 3){
                        color = "yellow"
                    }else if (index[y].length === 5){
                        color = "orange"
                    }else{
                        color = "blue"
                    }
                    let rect = document.createElementNS(svgns, "rect")
                    rect.setAttribute("width", size)
                    rect.setAttribute("height", size)
                    rect.setAttribute("x", x * size)
                    rect.setAttribute("y", y * size)
                    rect.setAttribute("fill", color)
                    rect.setAttribute("stroke", "black")
                    svg.appendChild(rect)
                }
            }
            
        }
        newCanvasbox.appendChild(svg);
    }   
        x++;
    }
}
btn.addEventListener('click', ()=>{    
    for(let i of newCanvas.children){
        const disappear = new KeyframeEffect(
            i,[
            { transform: "rotate(0) scale(1)" },
            { transform: "rotate(360deg) scale(0)" },
            ],{
            duration:2000,
            iterations:1,
            });
        const dissappearAnimation = new Animation(disappear,document.timeline)
        dissappearAnimation.play();
        dissappearAnimation.addEventListener("finish", ()=>{
            over = true
            i.remove()
            
            
        })
    }
    if(over === true){
        newWord();
    }else if(newCanvas.childElementCount === 1 || newCanvas.childElementCount === 0){
        newWord();
    }
    
    
});
