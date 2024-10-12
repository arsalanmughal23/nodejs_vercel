import UserModel from "../models/User.js";

async function handleGetAllUsers(req, res) {
    const dataList = await UserModel.find({});
    return res.status(200).json({status: true, message: "Records retrive successfully", data: dataList});
}

async function handleGetUserById(req, res) {
    const data = await UserModel.findById(req.params.id);
    if(!data) return res.status(404).json({ error: "Record not found" });
    return res.status(200).json({status: true, message: "Record retrive successfully", data });
}

async function handleUpdateUserById(req, res) {
    const body = req.body;
    const data = await UserModel.findByIdAndUpdate(req.params.id, body, {new: true});
    return res.status(201).json({status: true, message: "Record updated successfully", data});
}

async function handleDeleteUserById(req, res) {
    const body = req.body;
    await UserModel.findByIdAndDelete(req.params.id);
    return res.status(201).json({status: true, message: "Record deleted successfully"});
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    const { firstName, lastName, email, jobTitle, gender } = body;
    const createdRecord = await UserModel.create({ firstName, lastName, email, jobTitle, gender })

    res.status(201).json({status: true, message: "Record created successfully", data: createdRecord});
}

export {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}