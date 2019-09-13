async function getHouses(req, res){
    const houses = await req.app.get('db').getHouses();
    res.status(200).send(houses);
}


module.exports = {
    getHouses
}