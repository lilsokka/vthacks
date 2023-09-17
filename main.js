const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(".content button"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span");

let timer,
maxTime = 0,
timeLeft = maxTime,
charIndex = mistakes = isTyping = typedCount = totalTyped = oldChars = 0;

function loadCode(currentLine = 0, currentTest = -1, totalLines = 0) {
    typingText.innerHTML = null
    charIndex = 0
    
    if (currentTest == -1)  {
        currentTest = Math.floor(Math.random() * typeSnippets.length);
        totalLines = typeSnippets[currentTest].length;
    }
    i = currentLine

    if (i != 0) {
        typedCount += 1;

    }
        
    if (typeSnippets[currentTest].length < currentLine + 4){
        for  (i; i < typeSnippets[currentTest].length; i++) {
            typeSnippets[currentTest][i].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingText.innerHTML += span;
            });
            typingText.innerHTML += '<br></br>'
            currentLine++;
        }
    } else {
        for(i; i < currentLine + 4; i++)  {
            typeSnippets[currentTest][i].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingText.innerHTML += span;
            });
            typingText.innerHTML += '<br></br>'
        }
        currentLine += 4;
    }
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
    
    return [currentLine, currentTest, totalLines];

}



function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[typedCount];
    if(charIndex < characters.length - 1) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--;
                typedCount--;
                try{
                    if(characters[charIndex].classList.contains("incorrect")) {
                        mistakes--;
                    }
                    characters[charIndex].classList.remove("correct", "incorrect");
                } catch (err)   {
                    window.alert("Cannot go back:", charIndex, ' ', typedCount)
                }
            } else {
                exception = true
            }
        } else {
            try{
                if(characters[charIndex].innerText == typedChar) {
                    characters[charIndex].classList.add("correct");
                } else {
                    mistakes++;
                    characters[charIndex].classList.add("incorrect");
                }
                charIndex++;
                typedCount++;
            } catch (err)   {
                window.alert("Cannot go back:", charIndex, ' ', typedCount)
            }
            
        }
    
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((typedCount - mistakes)  / 5) / ((timeLeft * 60)/100));
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = typedCount - mistakes;

    } else if (linesList[0] < linesList[2]) {
        typingText.innerHTML = ""
        linesList = loadCode(linesList[0], linesList[1], linesList[2]);
        charIndex = 0
        mistakeTag.innerText = characters[charIndex].innerText
        wpmTag.innerText = typedChar
        cpmTag.innerText = charIndex
        timeTag.innerText = typedCount

    } else {
        infoForDone();
        clearInterval(timer);
        inpField.value = "";
    }
     
}



function initTimer() {
    if(isTyping) {
        timeLeft++;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((typedCount - mistakes)  / 5) / ((timeLeft * 60)/100));
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}



function resetGame() {
    linesList = loadCode();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = typedCount = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

function infoForDone()  {

}


timeTag.innerText = timeLeft;
linesList = loadCode();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);