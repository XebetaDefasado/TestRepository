const button = document.getElementById("button")
const textbox = document.getElementById("textbox")
const errorTextbox = document.getElementById("errorTextbox")

button.addEventListener('click', function wordChange(){
    textbox.style.color = "rgba(0, 0, 0, 0)"
    textbox.contentEditable = false

    function wordReplacing(){
        if(!textbox.textContent){
            var newError = Error()
            newError.name = '\u274C\u2009ValueError'
            newError.message = `Please, input a value before. You can't change what doesn't exist, am I right?`
            errorTextbox.innerHTML = `${newError.name}:<br>${newError.message}`
            setTimeout(() => {
                textbox.contentEditable = true
                errorTextbox.textContent = null
            }, 5000)
            return
        }

   
        function pickRandom(arg){
            if(Array.isArray(arg)){
                return arg[Math.floor(Math.random() * arg.length)]
            }
            if(typeof arg === "number"){
                return Math.floor(Math.random() * arg)
            }
        }

        function createChecking(){
            for(let j = 0; j < arguments.length; j++){
                for(let i = 0; i < arguments[j].length; i++){
                    let CheckingP = {}
                   CheckingF.push(Object.defineProperty(CheckingP, arguments[j][i], {value: false, writable: true}))
                }
            }
            return CheckingF
        }
    
        //space = '&nbsp;' AND '\u0020' //- The most damn important thing, at least at 00:41 1/26/2023
        
        let CheckingF = []
    
        let AditiveConj = [
            "e",
            "também",
            "como também",
            "além de que",
            "mais"
         ]

        createChecking(AditiveConj)

        if(textbox.innerHTML){
            for(e in AditiveConj){
                let pattern = new RegExp(`(&nbsp;|\u0020)${AditiveConj[e]}(&nbsp;|\u0020)`)
                 while(textbox.innerHTML.match(pattern)){
                     let newWord = String(pickRandom(AditiveConj))
                    textbox.innerHTML = textbox.innerHTML.replace(pattern, `&nbsp;${newWord.toUpperCase()}&nbsp;`)
                }
                Object.defineProperty(CheckingF[e], AditiveConj[e], {value: true, writable: true})   
            }
            return
        }
    }

    setTimeout(()=>{
        textbox.style.color = "rgba(0, 0, 0, 1)"
        wordReplacing();
        textbox.contentEditable = true
    }, 1500)
    return
})
