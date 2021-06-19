const validate_delete = (event) => {
    // Preventing the default action from the form
    event.preventDefault()

    /*
    Getting a confirmation from the user, if he/she wants to update the current task and save the
    changes into the database.
    */
    swal({
        title: "Confirm deletion",
        text: "Are you really sure that you want to delete this task?",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            swal({
                title: 'Task deleted!',
                text: 'Task deleted successfully.',
                icon: 'success'
            }).then((value) => {
                if (value === null || value == true) {
                    document.getElementById('delete_form').submit()
                }
            })
        }
    });
}

// Biding the event listener to the validate arrow function above
document.getElementById('delete_form').addEventListener('submit', validate_delete)
