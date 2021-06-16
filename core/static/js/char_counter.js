
const task_char_count = () => {
    // Getting initial data
    const task_input = document.getElementById('task')
    const task_panel = document.getElementById('task_panel')
    // Changing the panel value based in user's input
    task_panel.innerHTML = `${task_input.value.length}/25`
    // Checking if the limited exceeded
    if (task_input.value.length >= 25) {
        task_panel.classList.add('panel-full')
    }
    else if ((task_panel.className === 'panel panel-full') && (task_input.value.length < 25)) {
        task_panel.classList.remove('panel-full')
    }
}

const description_char_count = () => {
    // Getting initial data
    const description_input = document.getElementById('description')
    const description_panel = document.getElementById('description_panel')
    // Changing the panel value based in user's input
    description_panel.innerHTML = `${description_input.value.length}/255`
    // Checking if the limited exceeded
    if (description_input.value.length >= 255) {
        description_panel.classList.add('panel-full')
    }
    else if ((description_panel.className === 'panel panel-full') && (description_input.value.length < 255)) {
        description_panel.classList.remove('panel-full')
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const task_input = document.getElementById('task')
    const task_panel = document.getElementById('task_panel')
    task_panel.innerHTML = `${task_input.value.length}/25`

    if (task_input.value.length >= 25) {
        task_panel.classList.add('panel-full')
    }
})

document.addEventListener('DOMContentLoaded', (event) => {
    const description_input = document.getElementById('description')
    const description_panel = document.getElementById('description_panel')
    description_panel.innerHTML = `${description_input.value.length}/255`

    if (description_input.value.length >= 255) {
        description_panel.classList.add('panel-full')
    }
})
