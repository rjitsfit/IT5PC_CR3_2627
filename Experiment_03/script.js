// const & let

// const firstNumber = 5
// const secondNumber = '5'

// if (firstNumber === secondNumber)
//     console.log(true)
// else
//     console.log(false)

const submitBtn = document.getElementById('submit-btn')

const validate = (e) => {
    e.preventDefault()
    const username = document.getElementById('username')
    const email = document.getElementById('email-address')

    if (username.value === "") {
        alert('Please enter your username')
        username.focus()
        return false
    }

    if (email.value === "") {
        alert('Please enter your email address')
        email.focus()
        return false
    }

    alert('Hello World, Welcome')
    return true
}

submitBtn.addEventListener('click', validate)