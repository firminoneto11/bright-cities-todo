const validate = (event) => {
    event.preventDefault()
    swal({
        title: 'Tasked addeded!',
        text: 'Task addeded successfully',
        icon: 'success'
    }).then((value) => {
        if (value === null || value == true) {
            document.getElementById('form').submit()
        }
    })
}

document.getElementById('form').addEventListener('submit', validate)
