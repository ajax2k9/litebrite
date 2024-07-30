class Grid{
    constructor(w,h,res_x_,res_y_){
        let sx = w/res_x_;
        let sy = h/res_y_;
        this.res_x = res_x_;
        this.points = [];
        let doOffs = false;
        for(let j = 0; j < sy*1.5;j++){
            let offs2 = doOffs ? -1:0
            for(let i = 0; i < sx + offs2;i++){
                let offs = 0;
                if (doOffs) offs = res_x_/2;
                let p = {x:i*(res_x_)+offs,y:j*res_y_*0.75};
                this.points.push(p);
            }
            doOffs = !doOffs;
        }


    }


    draw(img_){
        img_.loadPixels();
        strokeWeight(0)
       this.points.forEach(p=>{
           
           let idx = floor(p.x) *4+floor(p.y)*img_.width*4;       
           let r = img_.pixels[idx]; 
           let g = img_.pixels[idx+1]; 
           let b = img_.pixels[idx+2]; 
           let a = img_.pixels[idx+3];
           colorMode(RGB)           
           let c = color(r,g,b,a)
           let hSeg = colorSeg(hue(c),36,100)
           colorMode(HSB,100)
           fill(hSeg,saturation(c),100);
           circle(p.x,p.y,(this.res_x - 2)* brightness(c)/100);
        })        
    }


}

function clamp(val,minval,maxval) {
    return max(minval,min(maxval,val))
}

function colorSeg(val,div, max){
    return floor(val/360*div)*max/div
}