const express = require ('express')
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handlePatchUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/user')

const router = express.Router ()

// router.get ('/users', async (req, res) => {

//     const allDbUsers = await User.find ({})

//     const html = `
//     <ul>
//         ${allDbUsers.map (user => `<li>${user.firstName} - ${user.email}</li>`).join('')}
//     </ul>
//     `
//     res.send (html)
// })

router
    .route ('/')
    .get (handleGetAllUsers)
    .post (handleCreateNewUser)

router
    .route ('/:id')
    .get (handleGetUserById)
    .put(handleUpdateUserById)
    .patch(handlePatchUserById)
    .delete(handleDeleteUserById)

module.exports = router