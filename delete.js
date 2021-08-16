document.getElementById('delete-button').addEventListener('click', function () {


    document.getElementById("beyadop").style.display = 'none';

})
document.getElementById('delete-prof').addEventListener('focus', function () {


    document.body.style.backgroundColor = 'red';


})
document.getElementById('delete-prof').addEventListener('blur', function () {


    document.body.style.backgroundColor = 'white';


})
document.getElementById('delete-prof').addEventListener('keydown', function () {
    const deleteFiled = document.getElementById('delete-prof')
    // console.log(deleteFiled.value)





})
document.getElementById('delete-prof').addEventListener('keyup', function (event) {
    const deleteFiled = document.getElementById('delete-prof')
    if (event.target.value == "delete") {
        document.getElementById('delete-button').removeAttribute('disabled');

    }
    else {
        document.getElementById('delete-button').setAttribute('disabled', true);

    }





})
document.getElementById('delete-prof').addEventListener('change', function () {
    const deleteFiled = document.getElementById('delete-prof')
    // console.log(deleteFiled.value)





})





