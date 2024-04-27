let Nave = document.getElementById("hitboxMain")
        /* Posição da nave principal */
        let posicao = 0
        document.addEventListener("keydown", function verificar() {
            if(event.code == "KeyD" || event.code == "ArrowRight"){
                if(posicao >= 75){
                    return
                }
                posicao = posicao + 10
                Nave.style.left = posicao + "%"
                return posicao
            }
            if(event.code == "KeyA" || event.code == "ArrowLeft"){
                if(posicao <= 1){
                    return
                }
                posicao = posicao - 10
                Nave.style.left = posicao + "%"
                return posicao
            }
        })
        //

        /* Atirar projétil  */
        imgs = new Image
        let conferir = true
        imgs.src = "imgs/fire.png"
        document.addEventListener("keydown", () =>{
            if(event.code == "Space"){
            if(!conferir){
                return
            }else{
            imgs.classList.remove("invisivel")
            Nave.appendChild(imgs)
            setTimeout(() => {
                document.body.appendChild(imgs)
                imgs.style.left =  posicao + 5 + "%"
            }, 0.1)
            imgs.style.animation = "animacao 1s linear"
            conferir = false
        }
        setTimeout(() => {
            conferir = true
            imgs.classList.add("invisivel")
        }, 1000)
    }
})
//