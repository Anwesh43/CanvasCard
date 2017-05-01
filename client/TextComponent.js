class TextComponent {
    constructor(context,description,y,w,h) {
        this.context = context
        this.textComps = []
        this.createTextComps(description,y,w,h)
        this.fontSize = h/20
    }
    createTextComps(description,y,w,h) {
       var msg = ""
       this.context.font = this.context.font.replace(/\d{2}/,h/20)
       const words = description.split(" ")
       const x = w/10
       for(var i=0;i<words.length;i++) {
          const word = words[i]
          if(this.context.measureText(msg+word).width < 4*w/5) {
              msg = msg+" "+word
          }
          else {
              this.textComps.push(new TextComp(msg,x,y))
              msg = word
              y += h/15
              if(y>=h)  {
                  msg += "..."
                  break
              }
          }
       }
       this.textComps.push(new TextComp(msg,x,y))
    }
    draw()  {
        this.context.font = this.context.font.replace(/\d{2}/,this.fontSize)
        console.log(this.textComps)
        this.textComps.forEach((textComp)=>{
            textComp.render(this.context)
        })
    }
}
class TextComp {
    constructor(msg,x,y) {
        this.msg = msg
        this.x = x
        this.y = y
    }
    render(context) {
        console.log(this.msg)
        context.fillText(this.msg,this.x,this.y)
    }
}
