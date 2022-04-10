import tuitsDao from "../schema/tuits-dao.js";
// import posts from "./tuits.js";
// let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()

    res.json(tuits);
}

const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const createTuitByUser = async (req, res) => {
    let newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);

    res.json(insertedTuit);
}

const findTuitsByUser = (req, res) => {
    const userId = req.params['uid'];
    const tuitsByUser = tuits
        .filter(tuit => tuit.postedBy === userId);
    res.json(tuitsByUser);
}

const tuitController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.post('/api/users/:uid/tuits', createTuitByUser)
    app.get('/api/users/:uid/tuits', findTuitsByUser)
}

export default tuitController;