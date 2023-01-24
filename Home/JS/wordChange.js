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

    //When textbox has text:

    //space = '&nbsp;' AND '\u0020' //- The most fucking important thing, at least at 21:14 1/23/2023

    AditiveConj = [
        "e",
        "também",
        "como também",
        "além de que",
        "mais"
    ]
    
    if(textbox.innerHTML){
        if(textbox.innerHTML.match(/(&nbsp;|\u0020)\u0065(&nbsp;|\u0020)/) !== null){
            let matcher = textbox.innerHTML.match(/(&nbsp;|\u0020)\u0065(&nbsp;|\u0020)/)[0]
            let spaceBef = matcher.slice(0, (matcher.indexOf('\u0065')))
            let spaceAft = matcher.slice(matcher.indexOf('\u0065') +1, matcher.length)
            textbox.innerHTML = textbox.innerHTML.replace(matcher, `${spaceBef}${pickRandom(AditiveConj)}${spaceAft}`)
        }
    }
    
})

/*
if(textbox.innerHTML.match(/&nbsp;\u0065&nbsp/) !== null){
    matcher = textbox.innerHTML.match(/&nbsp;\u0065&nbsp;/)
    textbox.innerHTML = textbox.innerHTML.replace(/&nbsp;\u0065&nbsp;/, `&nbsp;${pickRandom(AditiveConj)}&nbsp;`)
}
*/
/*
(&nbsp;|\u0020)\u0065(&nbsp;|\u0020)
*/