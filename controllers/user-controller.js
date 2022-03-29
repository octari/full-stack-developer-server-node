// import users from './users.js';
import importedUsers from "./users.js";
let users = importedUsers;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(usr =>
                          usr._id === userId ?
                          updatedUser :
                          usr);
    res.sendStatus(200);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    // users = users.filter(usr => usr._id !== userId);
    const usersIndex = users.findIndex((u) => u._id === userId);
    users.splice(usersIndex, 1);
    res.sendStatus(200);
}


const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const findUsersByType = (type) =>
    users.filter(u => u.type === type);

const findAllUsers = (req, res) => {
    const type = req.query.type;

    if(type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

export default userController;
