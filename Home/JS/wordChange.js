const button = document.getElementById("button")
const textbox = document.getElementById("textbox")
const errorTextbox = document.getElementById("errorTextbox")

button.addEventListener('click', () => {
    if(!textbox.textContent){
        var newError = Error()
        newError.name = '\u274C\u2009ValueError'
        newError.message = `Please, input a value before. You can't change what doesn't exist, am I right?`
        errorTextbox.innerHTML = `${newError.name}:<br>${newError.message}`
        setTimeout(() => {
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
    


    //space = '&nbsp;' AND '\u0020' //- The most fucking important thing, at least at 18:48 1/25/2023
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
        function eAditive() {
            while(textbox.innerHTML.match(/(&nbsp;|\u0020)\u0065(&nbsp;|\u0020)/) !== null){
                let matcher = textbox.innerHTML.match(/(&nbsp;|\u0020)\u0065(&nbsp;|\u0020)/)[0]
                let spaceBef = matcher.slice(0, (matcher.indexOf('\u0065')))
                let spaceAft = matcher.slice(matcher.indexOf('\u0065') +1, matcher.length)
                textbox.innerHTML = textbox.innerHTML.replace(matcher, `${spaceBef}${pickRandom(AditiveConj)}${spaceAft}`)
            }
            CheckingF[0].e = true
            console.log(CheckingF);
            return 
        }
        eAditive()
    }
    
})

//"Legacy Code" so you can see my suffering in a step-by-step tutorial

/*
if(textbox.innerHTML.match(/&nbsp;\u0065&nbsp/) !== null){
    matcher = textbox.innerHTML.match(/&nbsp;\u0065&nbsp;/)
    textbox.innerHTML = textbox.innerHTML.replace(/&nbsp;\u0065&nbsp;/, `&nbsp;${pickRandom(AditiveConj)}&nbsp;`)
}
*/

/*
(&nbsp;|\u0020)\u0065(&nbsp;|\u0020)
*/

//Checking.push(Object.create({i: false}))

/*
for(let j = 0; j < arguments.length; j++){
                for(let i = 0; i < arguments[j].length; i++){
                    Object.defineProperty(Checking, arguments[j][i], {value: false})
                }
            }
*/

/*
for(let j = 0; j < arguments.length; j++){
                for(let i = 0; i < arguments[j].length; i++){
                    Checking.push(`${arguments[j][i]}: ${false}`)
                }
            }
            return console.log(Checking[0].slice(Checking[0].indexOf(false), Checking[0].length))
            */

/*
Object.defineProperty(Checking, arguments[j][i], {value: false, configurable: false})
*/