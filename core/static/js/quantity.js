
function get_quantity(event) {
    const tbody = document.getElementById('tbody')
    const children = tbody.children
    let quantity = 0
    for (let child of children) {
        if (child.className !== 'tbody_child no-display') {
            quantity += 1
        }
    }
    const quantity_display = document.getElementById('quantity_display')
    quantity_display.innerHTML = `${quantity} items`
}

function task_amount(event) {
    const tbody = document.getElementById('tbody')
    const children = tbody.children
    let quantity = 0
    for (let tr of children) {
        if (tr.className !== 'tbody_child no-display') {
            quantity += 1
            tr.firstElementChild.innerHTML = `${quantity}`
        }
    }
}

document.addEventListener('DOMContentLoaded', get_quantity)
document.getElementById('radio_elements').addEventListener('click', get_quantity)

document.addEventListener('DOMContentLoaded', task_amount)
document.getElementById('radio_elements').addEventListener('click', task_amount)
