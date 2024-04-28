var contador = 0
var frameIndex = 0
var framewidth = 50
function mudarFrame() {
    var div = document.getElementById("predil")
    div.style.backgroundPosition = "50%" + (framewidth * frameIndex) + "%"
    contador++
    frameIndex++
    if(contador == 3){
      frameIndex = 0
      contador = 0
    }
}
setInterval(mudarFrame, 500)
let musica = document.getElementById("musica")
musica.src = "/363_full_8bit-noir_0146_preview.mp3"
let volImg = document.getElementById("volImg")
let volHitbox = document.getElementById("vol")
var conferirImg = true
volHitbox.addEventListener("click", () => {
  conferirImg = !conferirImg
  if(conferirImg){
    volImg.src = "/imgs/volOff.png"
    musica.pause()
  }
  if(!conferirImg){
    volImg.src = "/imgs/volOn.png"
    musica.volume = 0.2 
    musica.play()
    musica.muted = false
  }
})
