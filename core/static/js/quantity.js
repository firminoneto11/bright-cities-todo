/*
This function will fill the first <td> tag of each row with counter that is incremented
for the amount of rows. Also, will change the information of how many elements are in 
the table, bellow the table.
*/
function get_quantity(event) {
    // Selecting the elements and couting the occurences
    const tbody = document.getElementById('tbody')
    const tbody_children = tbody.children
    let quantity = 0
    for (let tr of tbody_children) {
        if (tr.className !== 'tbody_child no-display') {
            quantity += 1
            tr.firstElementChild.innerHTML = `${quantity}`
        }
    }
    // Updating the information of elements amount
    document.getElementById('quantity_display').innerHTML = `${quantity} items`
}

// Binding the event listeners to the function above
document.addEventListener('DOMContentLoaded', get_quantity)
document.getElementById('radio_elements').addEventListener('click', get_quantity)
