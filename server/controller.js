function getHouses(req, res){
    const houses = req.app.get('db').getHouses();
    res.status(200).send(houses);
}


module.exports = {
    getHouses
}