fs = require('fs');

//background
for (let i = 0; i <= 10; i++) {
    const data =`:root {\n    --background-transparency: ${i};\n}\n\n` 
    fs.writeFile(`Transparent Keyboard/backgroundTransparency/${i}0%.css`, data, () => undefined)
}
//pointer
for (let i = 0; i <= 10; i++) {
    const data =`:root {\n    --pointer-transparency: ${i};\n}\n\n` 
    fs.writeFile(`Transparent Keyboard/pointerTransparency/${i}0%.css`, data, () => undefined)
}
//buttons
for (let i = 0; i <= 10; i++) {
    const data =`:root {\n    --button-transparency: ${i};\n}\n\n` 
    fs.writeFile(`Transparent Keyboard/buttonTransparency/${i}0%.css`, data, () => undefined)
}
