window.onload = function () {
    let btn = document.querySelectorAll("button") 
    let entrada = document.getElementById("entrada")
    entrada.textContent = ""
    btn.forEach((botton)=>{
    botton.addEventListener("click",(e)=>{
        if(botton.classList.contains("number")){
            entrada.textContent += e.target.textContent
        }
        let jogar = document.getElementById("jogarbtn")
        jogar.addEventListener("click",()=>{
        let num = entrada.textContent
        let numGerado = Math.floor(Math.random()*11)
        let resposta = document.getElementById("resposta")
        if(num == numGerado){
            resposta.textContent =`Parabéns o número gerado foi ${numGerado}`
            resposta.style.color = "green"

        }else{
            resposta.textContent =`Error o número gerado foi ${numGerado}`
            resposta.style.color = "red"
        }
    })
    let recomecar = document.getElementById("recomecarbtn")
    recomecar.addEventListener("click",()=>{
        let resposta = document.getElementById("resposta")
        entrada.textContent = ""
        resposta.textContent =""
        
    })
    
        
    })
    })

    
}