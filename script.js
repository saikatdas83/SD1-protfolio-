const scriptURL = 'https://script.google.com/macros/s/AKfycbwm-AV5uWWh2oaYWGdRYRqUMVsZKgbizhJ1QSG1oCIORXpXSbyll5McQJ3PhUEEp5cP/execYOUR_WEB_APP_URL_এখানে_বসান'
const form = document.querySelector('#contact-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks! Message has been successfully sent."))
    .catch(error => console.error('Error!', error.message))
})

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function runTests() {
    const testEmail = "test@example.com";
    if (validateEmail(testEmail)) {
        console.log("Test Passed: Email format is correct.");
    } else {
        console.error("Test Failed: Email format is incorrect.");
    }
}
runTests();


