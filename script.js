function addStudent() {

    let fullName = document.getElementById("fullName").value;
    let roll = document.getElementById("roll").value;
    let classSel = document.getElementById("classSel").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let stream = document.getElementById("stream").value;
    let notes = document.getElementById("notes").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    gender = gender ? gender.value : "";

    document.getElementById("studentlist").innerHTML += `
        <tr>
            <td>${fullName}</td>
            <td>${roll}</td>
            <td>${classSel}</td>
            <td>${dob}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${address}</td>
            <td>${gender}</td>
            <td>${stream}</td>
            <td>${notes}</td>
            <td>
            <button onclick="deleteStudent(this)">Delete</button>
            </td>
        </tr>
    `;

    document.getElementById("entryform").reset();
}
function deleteStudent(button) {

    let row = button.parentElement.parentElement;

    row.remove();
}
