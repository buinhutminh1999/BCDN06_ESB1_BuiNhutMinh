const jumText = () => {
    let content = document.querySelector('.heading').innerHTML
    let char = [...content]
    let contentChar = ''
    for (const value of char) {
        if (value != ' ') {
            contentChar += `<span>${value}</span>`
        }

    }
    document.querySelector('.heading').innerHTML = contentChar

}

jumText()