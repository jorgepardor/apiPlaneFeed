const getAllPlanes = async (req, res) => {
	res.send("This will return a list of all planes detected in the radar");
}

const addModel = async (req, res) => {
    res.send("This will create an airplane model in the database");
}



module.exports = {
    getAllPlanes,
    addModel
}