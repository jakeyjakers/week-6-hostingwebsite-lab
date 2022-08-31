const signUpBtn = document.querySelector('.sign-up-btn')

const stateInput = document.getElementById('state')

const emaiInput = document.getElementById('email')

const formBtn = document.querySelector('.form-btn')

const message = () => {
    alert(`Are you ready to invest and make some money yet?`)
}

setTimeout(message, 10000)

const signedUp = () => {
    alert(`Thank you for signing up. \n
    We have grabed your info from Google.`)
}

signUpBtn.addEventListener('click', signedUp)

const submitForm = (event) => {
    event.preventDefault()

    const stateMessage = stateInput.value
    const emailMessage = emaiInput.value

    alert(`We have sent and email to ${emailMessage}, \n
    we needed your state so we know which agents to \n
    need to reach out to you. Agents in ${stateMessage}\n
    will be with you shortly. Thank You!`)
}

formBtn.addEventListener('click', submitForm)
