function eating (callback) {
    setTimeout (()=>{
        console.log ('Done Eating')
        callback ()
    }, 1500)
}

function coding (callback) {
    setTimeout (()=>{
        console.log ('Done Coding')
        callback ()
    }, 2000)
}

function sleeping (callback) {
    setTimeout (()=>{
        console.log ('Done Sleeping')
        callback ()
    }, 2500)
}

eating (()=> {
    coding (()=> {
        sleeping (() => console.log ('Completed all tasks') 
        )
    })
})