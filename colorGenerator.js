fs = require('fs');

let themes = ["DefaultTheme", "SteamGreen", "Digital", "NightShift", "Candy", "DEX"]
let bgcolor = ["#23262E", "#3E4637", "#010F02", "linear-gradient(43deg, #020609 0%, #0a3745 46%, #031519 100%)", "linear-gradient(45deg, #ffffff 0%, #cacaca 100%)", "linear-gradient(55deg, #304348, #2b3639)"]
let ptcolor = ["#1A9FFF", "#c4b550", "#19E015", "#f13292", "#8b929a", "#a59f93"]
let colors = [
    ["#000000", "#FFFFFF", "#1A9FFF", "#0E141B", "#3D4450"],
    ["#3e4637", "#c4b550", "#c4b550", "#0e141b", "#3e4637"],
    ["#102717", "#19E015", "#19E015", "#010F02", "#102717"],
    ["#102227", "#15D4E0", "#15D4E0", "#ffffff", "#18acb6"],
    ["#ffffff", "#3D4450", "#3D4450", "#3D4450", "#3D4450"],
    ["linear-gradient(55deg, #304348, #2b3639)", "#d5cebf", "#843978", "#ffffff", "#4e4d48"]
]

//background
for (let i = 0; i <= 10; i++) {
    let data = ""
    for (let j = 0; j < themes.length; j++) {
        let opacity = ((10 - i) / 10 * 255).toString(16).slice(0, 2).toUpperCase()
        data += `.${themes[j]} {\n    --background-color: ${bgcolor[j].replaceAll(/(#......)/ig, `$1${opacity}`)};\n}\n\n`
    }
    fs.writeFile(`Transparent Keyboard/backgroundTransparency/${i}0%.css`, data, () => undefined)
}
//pointer
for (let i = 0; i <= 10; i++) {
    let data = ""
    for (let j = 0; j < themes.length; j++) {
        let opacity = ((10 - i) / 10 * 255).toString(16).slice(0, 2).toUpperCase()
        data += `.${themes[j]} {\n    --key-pointer-background-color: ${ptcolor[j].replaceAll(/(#......)/ig, `$1${opacity}`)};\n}\n\n`
    }
    fs.writeFile(`Transparent Keyboard/pointerTransparency/${i}0%.css`, data, () => undefined)
}
//buttons
for (let i = 0; i <= 10; i++) {
    let data = `:root {\n`
    for (let j = 0; j < themes.length; j++) {
        let opacity = ((10 - i) / 10 * 255).toString(16).slice(0, 2).toUpperCase()

        for (let k = 0; k < colors[j].length; k++) {

            data += `--btn-transparent-${j}-${k}: ${colors[j][k].replaceAll(/(#......)/ig, `$1${opacity}`)};\n`
        }
    }
    data += `}\n\n`

    for (let j = 0; j < themes.length; j++) {
        data += `.${themes[j]} {
    --key-background-color: var(--btn-transparent-${j}-3);
    --key-focused-background-color: var(--btn-transparent-${j}-1);
    --key-meta-background-color: var(--btn-transparent-${j}-0);
    --key-tab-background-color: var(--btn-transparent-${j}-0);
    --key-caps-background-color: var(--btn-transparent-${j}-0);
    --key-shift-background-color: var(--btn-transparent-${j}-0);
    --key-enter-background-color: var(--btn-transparent-${j}-0);
    --key-backspace-background-color: var(--btn-transparent-${j}-0);
    --key-spacebar-background-color: var(--btn-transparent-${j}-3);
    --key-spacer-background-color: var(--btn-transparent-${j}-0);
    --key-extendedkey-background-color: var(--btn-transparent-${j}-2);
    --key-extendedkey-focused-background-color: var(--btn-transparent-${j}-1);
    --key-extendedkey-hover-background-color: var(--btn-transparent-${j}-1);
    --key-toggleon-background-color: var(--btn-transparent-${j}-2);
    --key-emoji-category-background-color: transparent;
    --key-emoji-category-highlight-background-color: var(--btn-transparent-${j}-4);
    --key-emoji-row-background-color: transparent;
    --key-emoji-background-color: transparent;
    --key-emoji-focused-background-color: var(--btn-transparent-${j}-4);
    --key-touched-background-color: var(--btn-transparent-${j}-1);
    --key-deadkey-background-color: var(--btn-transparent-${j}-0);
}\n
.${themes[j]} .virtualkeyboard_KeyboardKey_2KhPX.virtualkeyboard_Touched_3UFQq {
    background-color: var(--btn-transparent-${j}-2);
}\n`

    }

    fs.writeFile(`Transparent Keyboard/buttonTransparency/${i}0%.css`, data, () => undefined)
}
