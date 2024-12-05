const schemeForm = document.getElementById('scheme-form');

schemeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const baseUrl = 'https://www.thecolorapi.com/scheme?'
    const hexNumber = document.getElementById('color-input').value.slice(1)
    const mode = document.getElementById('mode-select').value
    console.log(mode)
    console.log(hexNumber)
    fetch(`${baseUrl}hex=${hexNumber}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {console.log(data)
            console.log(data.colors[0].hex.value)
            const colorList = data.colors;
            colorList.forEach((color, index) => {
                document.getElementById(`color-bar-${index}`).style.backgroundColor = color.hex.value
                document.getElementById(`hex-code-${index}`).textContent = color.hex.value
            })
        })
})

