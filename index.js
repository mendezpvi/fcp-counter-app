const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}
let saveStr = ""
function save() {
  saveStr += count + " - "
  saveEl.textContent = "Previous entries: " + saveStr.slice(0, -3)
  count = 0
  countEl.textContent = count
}