function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// General function for all inputs

function checkform(type, idelement) {

    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    var item = document.getElementById(idelement)
    if (type === "text") {
        if (item.value.length < 2) {
            console.log("Error")
            return ""
        }
    } else {
        if (!regex.test(item.value)) {
            console.log("Error")
            return ""
        }
    }
    console.log(idelement + " " + ":" + " " + item.value)
}
// Function for Form validation 
function validatModal() {
    var firstName = checkform("text", "prénom")
    var lastName = checkform("text", "nom")
    var message = checkform("text", "message")
    var email = checkform("email", "email")

    if (firstName != "" && lastName != "" && email != "" && message != "") {
        closeModal();

    }

}