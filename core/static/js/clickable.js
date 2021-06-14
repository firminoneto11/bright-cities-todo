const link_href = () => {
    /*
    This link_href function will select all the tr tags in the document and add a clickable link to
    each one of them. The link will redirect the user to the update/delete page.
    */
    const rows = document.querySelectorAll("tr[data-href]")

    for (let row of rows) {
        row.addEventListener('click', () => { window.location.href = row.dataset.href })
    }
}

// Biding the DOMContentLoaded event to the link_href function defined above
document.addEventListener('DOMContentLoaded', link_href)
