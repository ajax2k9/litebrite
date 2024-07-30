class Page{
    constructor(){
        this.input = createFileInput(f=>{
            console.log(f)
            this.filename = f.name.split('.')[0];
            loadImage(f.data,img=>{
                createCanvas(img.width,img.height);
                let grid = new Grid(img.width,img.height,6,6);
                grid.draw(img)
                noLoop();
            })
        })

        this.output = createButton("Export")
        this.output.position(this.input.position.x +100, this.input.position.y)
        this.output.mousePressed(()=>{
            if(this.filename != undefined){
                saveCanvas(this.filename+ "_dots.png")
            }
        })
    }
}