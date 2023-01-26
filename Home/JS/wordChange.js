const button = document.getElementById("button")
const textbox = document.getElementById("textbox")
const errorTextbox = document.getElementById("errorTextbox")

button.addEventListener('click', function wordChange(){

    function wordReplacing(){
        if(!textbox.textContent){
            var newError = Error()
            newError.name = '\u274C\u2009ValueError'
            newError.message = `Please, input a value before. You can't change what doesn't exist, am I right?`
            errorTextbox.innerHTML = `${newError.name}:<br>${newError.message}`
            setTimeout(() => {
                textbox.contentEditable = true
                errorTextbox.textContent = null
            }, 3000)
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
        
        let CheckingF = []

        let AditiveConj = [
            "como também",
            "além de que",
            "mais",
            "também",
            "e"
        ]

        createChecking(AditiveConj)

        const Conjunctions = [
            AditiveConj,
            
        ]

        if(textbox.textContent){
            var usableWord = String();
            var pattern = RegExp();
            for(let iE in Conjunctions){
                for(let jE in Conjunctions[iE]){
                    if(textbox.innerHTML.match(Conjunctions[iE][jE]) && Conjunctions[iE][jE].match(/\s/)){
                        pattern = new RegExp(`(&nbsp;|\u0020)${Conjunctions[iE][jE].replace(/\s/g, '\u005F')}(&nbsp;|\u0020)`)
                        textbox.innerHTML = textbox.innerHTML.replace(Conjunctions[iE][jE], Conjunctions[iE][jE].replace(/\s/g, '\u005F'));
                        if(textbox.innerHTML.match(pattern)){
                            var spaceBef = textbox.innerHTML.match(pattern)[1]; var spaceAft = textbox.innerHTML.match(pattern)[2]
                            textbox.innerHTML = textbox.innerHTML.replace(pattern, `${spaceBef}${pickRandom(Conjunctions[iE])}${spaceAft}`)
                        }
                    }
                    if(textbox.innerHTML.match(Conjunctions[iE][jE]) && !Conjunctions[iE][jE].match(/\s/)){
                        pattern = new RegExp(`(&nbsp;|\u0020)${Conjunctions[iE][jE]}(&nbsp;|\u0020)`)
                        if(textbox.innerHTML.match(pattern)){
                            textbox.innerHTML = textbox.innerHTML.replace(pattern, `&nbsp;${pickRandom(Conjunctions[iE])}&nbsp;`)
                        }
                    }
                }
            }
            return
        }
    }
    wordReplacing()
    return
})

//space = '&nbsp;' AND '\u0020' //- The most damn important thing, at least at 16:32 1/26/2023
//An note that i would like to share: F*** the guy who said that whitespace is '&nbsp;' AND '\u0020'

/*

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
    
        //textbox.innerHTML = textbox.innerHTML.replace(pattern, `&nbsp;${String(pickRandom(Conjunctions[highE])).toUpperCase()}&nbsp;`)
*/