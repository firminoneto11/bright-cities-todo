
function no_items() {
    // Selecting the elements to change
    const no_items = document.getElementById('no_items')
    const amount = document.getElementById('quantity_display')
    const wrapper = document.getElementById('wrapper')

    // Logic to change the display of the <p> tag and <table>
    if (amount.innerHTML === '0 items') {
        wrapper.classList.add('no-display')
        if (no_items.className === 'no-items no-display') {
            no_items.classList.remove('no-display')
        }
    }
    else if (amount.innerHTML !== '0 items') {
        if (wrapper.className === 'table-wrapper no-display') {
            wrapper.classList.remove('no-display')
            if (no_items.className === 'no-items') {
                no_items.classList.add('no-display')
            }
        }
    }
}

// Binding the event listener of the radio_elements to the no_items function
document.getElementById('radio_elements').addEventListener('click', no_items)
