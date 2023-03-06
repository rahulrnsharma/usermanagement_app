const RegModel = require('../Schema/RegSchema')

const createUser = async (name, email, mobile, password) => {
    await RegModel.create({ name: name, email: email, mobile: mobile, password: password })
}

const findUser = async (email, password) => {
    return await RegModel.findOne({ email: email, password: password })
}

const findUserAndUpdate = async (userId, updatedmobile, updatedpassword) => {
    await RegModel.findOneAndUpdate({ _id: userId }, { mobile: updatedmobile, password: updatedpassword })
}

const deleteActiveUser = async (userId) => {
    await RegModel.findOneAndDelete({ _id:userId })
}


module.exports = { createUser, findUser, findUserAndUpdate , deleteActiveUser}