const User = require ('../models/user')

async function handleGetAllUsers (req, res) {
    const allDbUser = await User.find ({})
    res.json (allDbUser)
}

async function handleCreateUsers (req, res) {
    const body = req.body
        if (!body.first_name || !body.last_name || !body.email)
            return res.status (400).json ({message : "Some fields are missing"})

    const result = await User.create ({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTitle : body.job_title
    })

    console.log (result)

    res.status (201).json ({ message : "Success" })
}

async function handleUpdateUsingPut (req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate (
            req.params.id,
            {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                jobTitle : req.body.jobTitle,
                gender : req.body.gender
            },
            {
                returnDocument : 'after',
                runValidators : true
            }
        )
        return res.json ({ success : 'Record updated' })

    } catch (err) {
        return res.status (400).json ({ error : err.message })
    }
}

async function handleUpdateUsingPatch (req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate (
            req.params.id,
            { $set : req.body },
            {
                returnDocument : 'after',
                runValidators : true
            }
        )

        return res.json ({ success : 'Updated record' })

    } catch (err) {
        return res.status (400).json ({ error : err.message })
    }
}

async function handleDelete (req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete (req.params.id)

        if (!deletedUser)
            return res.status (400).json ({ error : 'User not found' })

        return res.json ({ status : 'Success' })
    } catch (err) {
        return res.status(500).json ({ error : err.message })
    }
}

async function handleGetUserById (req, res) {
    const user = await User.findById (req.params.id)
        if (!user)
            return res.status(404).json ({ message : "Not found" })
        res.json (user)
}

module.exports = {
    handleGetAllUsers,
    handleCreateUsers,
    handleUpdateUsingPut,
    handleUpdateUsingPatch,
    handleDelete,
    handleGetUserById,
}