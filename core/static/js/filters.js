
document.getElementById('todo').addEventListener('click', () => {
    const rows = document.getElementsByClassName('tbody_child')
    for (let row of rows) {
        if (row.className === 'tbody_child no-display') {
            row.classList.remove('no-display')
        }
    }
    for (let row of rows) {
        let status = row.attributes[2].textContent
        if (status === 'False') {
            row.classList.add('no-display')
        }
    }
})

document.getElementById('done').addEventListener('click', () => {
    const rows = document.getElementsByClassName('tbody_child')
    for (let row of rows) {
        if (row.className === 'tbody_child no-display') {
            row.classList.remove('no-display')
        }
    }
    for (let row of rows) {
        let status = row.attributes[2].textContent
        if (status === 'True') {
            row.classList.add('no-display')
        }
    }
})

document.getElementById('all').addEventListener('click', () => {
    const rows = document.getElementsByClassName('tbody_child')
    for (let row of rows) {
        if (row.className === 'tbody_child no-display') {
            row.classList.remove('no-display')
        }
    }
})
