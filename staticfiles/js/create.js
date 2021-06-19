const validate = (event) => {
    // Preventing the default action from the form
    event.preventDefault()

    // Getting the value of the required input
    const task = document.getElementById('task').value

    // Validating if the length of the task is higher than 0
    if (task.length === 0) {
        // Adding a error css class to the input element
        const input_field = document.getElementById('task')
        input_field.classList.add('error')
        // Creating a new sweet alert to notify the user that he/she has to create a task with at least a name
        swal({
            title: 'Insert a task name!',
            text: 'A task name is required.',
            icon: 'error'
        })

        // Returning a null value to stop the function
        return null
    }

    // Removing the class error of the element if it exists
    const input_field = document.getElementById('task')
    if (input_field.className === 'input error') {
        input_field.classList.remove('error')
    }

    // Displaying a sweet alert to notify the user that he/she has added the task successfully into the database
    swal({
        title: 'Task addeded!',
        text: 'Task addeded successfully.',
        icon: 'success'
    }).then((value) => {
        if (value === null || value == true) {
            document.getElementById('form').submit()
        }
    })
}

// Biding the event listener to the validate arrow function above
document.getElementById('form').addEventListener('submit', validate)
