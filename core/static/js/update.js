const validate = (event) => {
    // Preventing the default action from the form
    event.preventDefault()

    // Getting the value of the required input
    const task = document.getElementById('name')

    // Validating if the length of the task is higher than 0
    if (task.value.length === 0) {
        // Adding a error css class to the input element
        task.classList.add('error')
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
    if (task.className === 'input error') {
        task.classList.remove('error')
    }

    /*
    Getting a confirmation from the user, if he/she wants to update the current task and save the
    changes into the database.
    */
    swal({
        title: "Confirm update",
        text: "Are you really sure that you want to update this task?",
        icon: "warning",
        buttons: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal({
                title: 'Task updated!',
                text: 'Task updated successfully.',
                icon: 'success'
            }).then((value) => {
                if (value === null || value == true) {
                    document.getElementById('edit_form').submit()
                }
            })
        }
    });
}

// Biding the event listener to the validate arrow function above
document.getElementById('edit_form').addEventListener('submit', validate)
