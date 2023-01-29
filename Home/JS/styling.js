const checkmarks = document.getElementsByClassName('checkmark')
const branches = document.getElementsByClassName('branch')

for(let e of checkmarks){
    e.addEventListener('click', () => {
        e.classList.toggle('active')
        for(let j of branches){
            if(j.id === e.id){
                j.classList.toggle('alive')
            }
        }
    })
    if(e.id === '2'){
        e.addEventListener('click', function(){
            if(textbox.textContent.match(/\u005F/)){
                if(textbox.textContent.match(/\u005F/)){
                    textbox.textContent = textbox.textContent.replace(/\u005F/g, '\u0020')
                    return
                }
            }
            if(textbox.textContent.match(/\u0020/)){
                if(!textbox.textContent.match(/\u005F/)){
                    textbox.textContent = textbox.textContent.replace(/\u0020/g, '\u005F')
                    return
                }
            }
        })
    }
    if(e.id === '3'){
        let uppercasedText = String()
        e.addEventListener('click', () => {
            if(e.classList.contains("active")){
                uppercasedText = textbox.textContent
                textbox.textContent = textbox.textContent.toLowerCase()
                setTimeout(() => {
                    e.classList.remove("active")
                }, 1000);
                return
            }
        })
    }
    if(e.id === "4"){
        let originalText = String()
        let afterClearText = String() 
        e.addEventListener('click', () => {
            if(e.classList.contains("active")){
                originalText = textbox.textContent
                textbox.textContent = afterClearText
                return
            }
            if(!e.classList.contains("active")){
                afterClearText = textbox.textContent
                textbox.textContent = originalText
                return
            }
        })
    }
}

