class Card {
    constructor(imagesrc,title,description) {
        this.imagesrc = imagesrc
        this.title = title
        this.description = description
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = window.innerWidth/4
        this.canvas.height = 4*window.innerHeight/5
    }
    render(x,y) {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        const image = new Image()
        image.src = this.imagesrc
        image.width = this.canvas.width/8
        image.height = this.canvas.height/8
        const w = canvas.width,h = canvas.height
        const imX = this.canvas.width/2,imY = this.canvas.height/10 ,imW = image.width,imH = image.height
        image.onload = () => {
            context.drawImage(image,imX-imW/2,imY-imH/2)
            context.font = context.font.replace(/\d{2}/,20)
            context.drawText(this.title,w/2-context.measureText(title).width/2,this.canvas.height/6)
            const img = document.createElement('img')
            img.src = canvas.toDataURL()
            img.style.position = "absolute"
            img.style.top = y
            img.style.left = x
            document.body.appendChild(img)
        }
    }
}
