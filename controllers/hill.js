var hill = require('../models/hill');


// List of all hills 
exports.hill_list = async function (req, res) {
    try {
        hills = await hill.find();
        res.send(hills);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.hill_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await hill.findById(req.params.id)
        // Do updates of properties 
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.height) toUpdate.height = req.body.height;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};


exports.hill_view_all_Page = async function (req, res) {
    try {
        hills = await hill.find();
        res.render('hill', { title: 'Hill Search Results', results: hills });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.hill_create_post = async function (req, res) {
    console.log(req.body)
    let document = new hill();
    document.name = req.body.name;
    document.height = req.body.height;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific hill.
exports.hill_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await hill
            .findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.hill_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await hill.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


exports.hill_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await hill.findById(req.query.id)
        res.render('hilldetail',
            { title: 'Hill Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.hill_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('hillcreate', { title: 'Hill Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 


exports.hill_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await hill.findById(req.query.id) 
        res.render('hillupdate', { title: 'Hill Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.hill_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await hill.findById(req.query.id) 
        res.render('hilldelete', { title: 'Hill Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 