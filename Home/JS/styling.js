const labels = document.getElementsByClassName("label")
const checkmark = document.getElementsByClassName('hideDefault')

var futureText = String()

for(let e of checkmark){
    if(e.checked){
        let labelsArr = []
        let correctLabel
        for(let j of labels){
            labelsArr.push(j)
            if(labelsArr[labelsArr.indexOf(j)].htmlFor === e.id){
                correctLabel = j
            }
        }
        correctLabel.classList.add('textFor')
    }
    e.addEventListener('click', () => {
        var labelsArr = []
        var correctLabel
        if(e.checked){
            for(let j of labels){
                labelsArr.push(j)
                if(labelsArr[labelsArr.indexOf(j)].htmlFor === e.id){
                    correctLabel = j
                }
            }
            correctLabel.classList.add('textFor')
            
        }
        if(!e.checked){
            for(let j of labels){
                labelsArr.push(j)
                if(labelsArr[labelsArr.indexOf(j)].htmlFor === e.id){
                    correctLabel = j
                }
            }
            correctLabel.classList.remove('textFor')
            
        }
    })
}

underlineRemoval.addEventListener('click', () => {
    if(underlineRemoval.checked){
        textbox.textContent = textbox.textContent.replace(/\u005F/g, '\u0020')
        return
    }
    textbox.innerHTML = textbox.innerHTML.replace(/\u0020/g, '\u005F')
    return
})
formatWords.addEventListener('click', () => {
    if(formatWords.checked){
        futureText = ""
        for(let letter of textbox.textContent){
            let saver = textbox.textContent.match(letter)
            futureText += saver[0]
            if(letter.toUpperCase() === letter){
                textbox.textContent = textbox.textContent.replace(letter, letter.toLowerCase())
            }
        }
        return
    }
    if(!formatWords.checked){
        textbox.textContent = futureText
    }
    return
})
