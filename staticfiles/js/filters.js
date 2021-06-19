/*
All the three functions below will be linked to the click event on all the three radio buttons. Their job is to
filter the tasks that are displayed in the table by their current status: Done or To Do.
*/

document.getElementById('todo').addEventListener('click', () => {
    // Restart the current display of the table row
    const rows = document.getElementsByClassName('tbody_child')
    for (let row of rows) {
        if (row.className === 'tbody_child no-display') {
            row.classList.remove('no-display')
        }
    }
    // Hiding the tasks that are completed in order to show only the ones that are not completed
    for (let row of rows) {
        let status = row.attributes[2].textContent
        if (status === 'True') {
            row.classList.add('no-display')
        }
    }
})

document.getElementById('done').addEventListener('click', () => {
    // Restart the current display of the table row
    const rows = document.getElementsByClassName('tbody_child')
    for (let row of rows) {
        if (row.className === 'tbody_child no-display') {
            row.classList.remove('no-display')
        }
    }
    // Hiding the tasks that aren't completed in order to show only the ones that are completed
    for (let row of rows) {
        let status = row.attributes[2].textContent
        if (status === 'False') {
            row.classList.add('no-display')
        }
    }
})

document.getElementById('all').addEventListener('click', () => {
    // Restart the current display of the table row
    const rows = document.getElementsByClassName('tbody_child')
    for (let row of rows) {
        if (row.className === 'tbody_child no-display') {
            row.classList.remove('no-display')
        }
    }
})
