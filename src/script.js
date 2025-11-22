function showTab(tabId) {
    document.querySelectorAll('.content-section').forEach(sec => 
        sec.classList.remove('active')
    );
    document.getElementById(tabId).classList.add('active');
}

function submitFeedback() {
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedbackText').value;

    if (name.trim() === '' || feedback.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    document.getElementById('responseMsg').innerText =
        "Thank you for your feedback, " + name + "!";
 
}






