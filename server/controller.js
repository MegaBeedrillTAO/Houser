async function getHouse(req, res){
    let houses = await req.app.get('db').getHouses();
     res.status(200).send(houses);
}
async function addHouse(req,res){
    const {name, address, city, state, zip} = req.body;
    const house = await req.app.get('db').addHouse(name, address, city, state, zip);
    return res.status(200).send(house);
}
async function deleteHouse(req, res){
    const {id} = req.params;
    await req.app.get('db').deleteHouse(id);
    return res.sendStatus(200);
}

module.exports = {
    getHouse,
    addHouse,
    deleteHouse
}