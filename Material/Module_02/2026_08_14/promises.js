function eating () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ('Done Eating')
        }, 1500)
    })
}

function coding () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ('Done Coding')
        }, 2000)
    })
}

function sleeping () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ('Done Sleeping')
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
})