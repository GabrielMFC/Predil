let NaveSprite = document.getElementById("hitboxMain")
let Naveobj ={
    andar: function() { document.addEventListener("keydown", function (event) {
        if(event.code == "KeyD" || event.code == "ArrowRight"){
            if(posicao >= 75){
                return
            }
            posicao = posicao + 10
            NaveSprite.style.left = posicao + "%"
            return posicao
        }
        if(event.code == "KeyA" || event.code == "ArrowLeft"){
            if(posicao <= 1){
                return
            }
            posicao = posicao - 10
            NaveSprite.style.left = posicao + "%"
            return posicao
        }
})},
    atirar: function(){ document.addEventListener("keydown",  function(event){
        if(event.code == "Space"){
        if(!conferir){
            return
        }else{
        tiro.classList.remove("invisivel")
        NaveSprite.appendChild(tiro)
        setTimeout(() => {
            document.body.appendChild(tiro)
            tiro.style.left =  posicao + 5 + "%"
        }, 1)
        tiro.style.animation = "animacao 1s linear"
        conferir = false
    }
    setTimeout(() => {
        conferir = true
        tiro.classList.add("invisivel")
    }, 1000)
}
})
}}
        /* Posição da nave principal */
        let posicao = 0
        Naveobj.andar()
        //

        /* Atirar projétil  */
        tiro = new Image
        let conferir = true
        tiro.src = "/imgs/fire.png"
        Naveobj.atirar()
//
var tiroposicao = tiro.getBoundingClientRect()
let bloco = document.getElementById("teste")
function colisao(tiro) {
    var tiroposicao = tiro.getBoundingClientRect()
    console.log(tiroposicao)
}

document.addEventListener("animationstart", () => {
    setInterval(() => {
        if(tiroposicao.top == 0 || tiroposicao.top == undefined){
            return
        }
        console.log(tiroposicao.bottom)
    }, )
})