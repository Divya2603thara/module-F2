// By default img 2,3,4 should be disabled at start
document.getElementById("img-2").disabled = true;
document.getElementById("img-3").disabled = true;
document.getElementById("img-4").disabled = true;

let msg = document.getElementById('msgDispaly');

// array to store input info like name, user name, and email
let formInfoArray = [];



// Image 1 Function : Open form
function openFormFunction() {
    document.getElementById('form').classList.remove('hidden');
}

//-----------------------------------------------------------------------------------------------------------

// Form submit Function : Take inputs from user and submit the form with storing the info in global array
function submitFormInfoFunction() {
    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (name && userName && email) {
        let obj = {
            Name: name,
            UserName: userName,
            Email: email,
        }

        formInfoArray.push(obj);
        document.getElementById("img-2").disabled = false;
        document.getElementById("img-1").disabled = true;
        msg.innerText = 'Your Info is Submitted successfully! Click on the next image to view your info.'
        document.getElementById('form').classList.add('hidden');
    } else {
        alert(`Please fill all the fields.`)
    }
}

//---------------------------------------------------------------------------------------------------------------

// Image 2 Function : Display form info 
function displayFormInfoFunction() {
    msg.classList.add('hidden');
    document.getElementById('info').innerText = `Name: ${formInfoArray[0].Name}, User Name: ${formInfoArray[0].UserName}, Email: ${formInfoArray[0].Email}`
    document.getElementById('displayInfo').classList.remove('hidden');
    document.getElementById("img-3").disabled = false;
    document.getElementById("img-2").disabled = true;
}

//-------------------------------------------------------------------------------------------------------------

// Image 3 Function : Display dice image with attempt no
function displayDiceWthScore() {
    RemainingDiceClick = 3;
    totalScore = 0;
    document.getElementById('diceClicks').innerText = RemainingDiceClick;
    document.getElementById('score').innerText = totalScore;
    document.getElementById('displayInfo').classList.add('hidden');
    attempt--;
    console.log(`attempt remaining= ${attempt}`);
    document.getElementById('attemptsLeft').innerText = attempt;
    document.getElementById('diceWthScore').classList.remove('hidden');
    document.getElementById("img-3").disabled = true;
}