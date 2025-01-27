function setActive(active, inactive) {

    // Change iFrame
    let iframe = document.getElementById("entry-container")
    iframe.src = active + ".html"


    // Get elements
    active = document.getElementById(active)
    inactive = document.getElementById(inactive)

    // Set classes for active
    active.classList.remove("inactive")
    active.classList.add("active")

    // Set classes for inactive
    inactive.classList.remove("active")
    inactive.classList.add("inactive")
}