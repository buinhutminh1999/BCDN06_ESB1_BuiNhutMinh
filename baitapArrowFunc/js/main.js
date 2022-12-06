const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];


const colorSelect = () => { 
    let content = ''
    for (const index in colorList) {
       content+= `<button class="color-button ${colorList[index]}" onclick="changeColor('${colorList[index]}')")"></button>`
    }
    document.querySelector('.color-controls').innerHTML = content
 }

 colorSelect()

 let changeColor = (index) => { 
   document.querySelector('.house').className = `house ${index}`
  }
