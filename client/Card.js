class Card {
    constructor(imagesrc,title,description,color,col=3,row=2) {
        this.imagesrc = imagesrc
        this.color = color
        this.title = title
        this.description = description
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = window.innerWidth/col
        this.canvas.height = window.innerHeight/row
    }
    render(x,y) {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        const image = new Image()
        image.src = this.imagesrc
        image.width = this.canvas.height/4
        image.height = this.canvas.height/4
        const w = this.canvas.width,h = this.canvas.height
        const imX = w/2,imY = h/7 ,imW = image.width,imH = image.height
        const context = this.context
        const textComponent = new TextComponent(context,this.description,imY+imH*1.2,w,h)
        image.onload = () => {
            context.fillStyle = this.color
            context.fillRect(0,0,w,h)
            context.fillStyle = 'black'
            context.save()
            context.beginPath()
            context.arc(imX,imY,imW/2,0,2*Math.PI)
            context.clip()
            context.fill()
            context.drawImage(image,imX-imW/2,imY-imH/2,imW,imH)
            context.restore()
            context.fillStyle="white"
            context.font = context.font.replace(/\d{2}/,h/15)
            context.fillText(this.title,w/2-context.measureText(this.title).width/2,imY+imH/2+imH/3)
            textComponent.draw()
            const img = document.createElement('img')
            img.src = this.canvas.toDataURL()
            img.style.position = "absolute"
            img.style.top = y
            img.style.left = x
            document.body.appendChild(img)
        }
    }
}
