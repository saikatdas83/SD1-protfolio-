const scriptURL = 'https://script.google.com/macros/s/AKfycbwm-AV5uWWh2oaYWGdRYRqUMVsZKgbizhJ1QSG1oCIORXpXSbyll5McQJ3PhUEEp5cP/execYOUR_WEB_APP_URL_এখানে_বসান'
const form = document.querySelector('#contact-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।"))
    .catch(error => console.error('Error!', error.message))
})

// এই ফাংশনটি ইমেইল ঠিক আছে কি না তা পরীক্ষা করে
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// এটিই হলো 'Unit Test'
function runTests() {
    const testEmail = "test@example.com";
    if (validateEmail(testEmail)) {
        console.log("Test Passed: Email format is correct.");
    } else {
        console.error("Test Failed: Email format is incorrect.");
    }
}
runTests();

