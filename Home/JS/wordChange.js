const button = document.getElementById("button")
const textbox = document.getElementById("textbox")
const errorTextbox = document.getElementById("errorTextbox")
const optionsResults = document.getElementById("optionsResults")
const showChangedWords = document.getElementById("showChangedWords");
const formatWords = document.getElementById("formatWords");

button.addEventListener('click', function wordChange(){
    try{
        optionsResults.innerHTML = null
    
        function wordReplacing(){
            if(!textbox.textContent){
                let newError = Error()
                newError.name = 'ValueError'
                newError.message = `Please, input a value before. You can't change what doesn't exist, am I right?`
                throw newError
            }

    
            function pickRandom(arg){
            if(Array.isArray(arg)){
                return arg[Math.floor(Math.random() * arg.length)]
            }
            if(typeof arg === "number"){
                return Math.floor(Math.random() * arg)
            }
            }

        
            let CheckingF = []

            let AditiveConj = [
                "como também",
                "além de que",
                "mais",
                "também",
                "e"
            ]

            const Conjunctions = [
                AditiveConj,
            
            ]

            if(textbox.textContent){
                var pattern = RegExp();
                var patchedConjunctions = Array(String());
                var cont = Number(0);

                for(let iE in Conjunctions){
                    for(let jE in Conjunctions[iE]){ 
                        if(Conjunctions[iE][jE].match(/\s+/)){
                            patchedConjunctions[cont] = (Conjunctions[iE][jE].replace(/\s/g, '\u005F'))
                            cont = cont + 1
                            if(textbox.innerHTML.match(Conjunctions[iE][jE])){
                                let underlined = Conjunctions[iE][jE].replace(/\s/g, '\u005F')
                                textbox.innerHTML = textbox.innerHTML.replace(Conjunctions[iE][jE], underlined)
                            }
                        }
                        else{
                            patchedConjunctions[cont] = (Conjunctions[iE][jE])
                            cont = cont + 1
                        }
                    }
                }
                for(let Element of patchedConjunctions){
                    let CheckingP = {}
                    Object.defineProperty(CheckingP, Element, {value: false, writable: true})
                    pattern = RegExp(`(&nbsp;|\u0020)${Element}(&nbsp;|\u0020)`)
                    if(textbox.innerHTML.match(pattern)){
                        let spaceBefore = textbox.innerHTML.match(pattern)[1]
                        let spaceAfter = textbox.innerHTML.match(pattern)[2]
                        textbox.innerHTML = textbox.innerHTML.replace(pattern, `${spaceBefore}${pickRandom(patchedConjunctions)}${spaceAfter}`)
                        Object.defineProperty(CheckingP, Element, {value: true, writable: true})
                    }
                    CheckingF.push(CheckingP)
                }
                if(showChangedWords.checked){
                    for(let e of CheckingF){
                        if(String(Object.getOwnPropertyNames(e)).match(/\u005F/) !== null){
                            let word = String(Object.getOwnPropertyNames(e))
                            let valueSave = String(e[word])
                            word = word.replace(/\u005F/g, '\u0020')
                            e = {}
                            Object.defineProperty(e, word, {value: valueSave, writable: true})
                        }
                        optionsResults.innerHTML += `${Object.getOwnPropertyNames(e.valueOf())}:\u0020${e.valueOf()[Object.getOwnPropertyNames(e.valueOf())]} <br>`
                    }
                }
                if(formatWords.checked){
                    if(textbox.innerHTML.match(/\u005F/) !== null){
                        textbox.innerHTML = textbox.innerHTML.replace(/\u005F/g, '&nbsp;')
                    }
                }
                return
            }
        }
        wordReplacing()
        return

    } catch (error){
        textbox.contentEditable = false
        errorTextbox.innerHTML = `\u274C\u2009${error.name}:<br>${error.message}` 
        setTimeout(()=>{
            errorTextbox.innerHTML = null
            optionsResults.innerHTML = null
            textbox.contentEditable = true
        }, 2000)
    }
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
        
        */