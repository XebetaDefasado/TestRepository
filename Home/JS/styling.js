const labels = document.getElementsByClassName("label")
const checkmark = document.getElementsByClassName('hideDefault')

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

/*e.addEventListener('change', () => {
    for(let j of labels){
        if(j.htmlFor === e.id){
            j.classList.toggle('textFor')
            
        }
    };
})*/