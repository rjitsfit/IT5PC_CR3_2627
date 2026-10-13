const User = require ('../models/user')

async function handleGetAllUsers (req, res) {
    const allDbUsers = await User.find ({})
    res.json (allDbUsers)
}

async function handleGetUserById (req, res) {
    // const id = Number (req.params.id)
    // const user = users.find ((user) => user.id === id)
    const user = await User.findById (req.params.id)
    if (!user)
        return res.status (404).json ({ error : 'User not found' })
    res.json (user)
}

async function handleUpdateUserById (req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                jobTitle: req.body.jobTitle,
                gender: req.body.gender
            },
            { returnDocument: 'after', runValidators: true } 
            // overwrite: true ensures the whole document is replaced
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json({ status: 'Success', data: updatedUser });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

async function handlePatchUserById (req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, // $set applies only the fields present in req.body
            { returnDocument: 'after', runValidators: true } // new: true returns the modified document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json({ status: 'Success', data: updatedUser });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

async function handleDeleteUserById (req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json({ status: 'Success', message: 'User deleted successfully', deletedUserId: req.params.id });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

async function handleCreateNewUser (req, res) {
    const body = req.body
    // console.log (body)

    if (!body.firstName || !body.lastName || !body.email)
        return res.status(400).json ({ message : "Some fields are missing" })

    // users.push ({ id: users.length + 1, ...body  })
    // fs.writeFile ('./MOCK_DATA.json', JSON.stringify (users), (err, data) => {
    //     res.status(201).json ({ status : "Success", id : users.length })
    // })
    const result = await User.create ({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        gender : body.gender,
        jobTitle : body.jobTitle
    })

    console.log (result)

    res.status (201).json ({ message : "Success" })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handlePatchUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}