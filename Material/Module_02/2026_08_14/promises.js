function eating () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const doneEating = true
            if (doneEating) {
                resolve ('Done Eating')
            } else {
                reject ('Not done eating')
            }
        }, 1500)
    })
}

function coding () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const doneCoding = false
            doneCoding ?
                resolve ('Done Coding') :
                reject ('Not done coding')
        }, 2000)
    })
}

function sleeping () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const doneSleeping = true
            if (doneSleeping)
                resolve ('Done Sleeping')
            else
                reject ('Not done sleeping')
        }, 2500)
    })
}

eating ().then (value => {
    console.log (value)
    return coding ()
}).then (value => {
    console.log (value)
    return sleeping ()
}).then (res => {
    console.log (res)
    console.log ('All tasks finished')
}).catch (err => console.log (err))