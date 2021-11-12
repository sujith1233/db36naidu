var hill = require('../models/hill'); 

 
// for a specific hill. 
exports.hill_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: hill detail: ' + req.params.id); 
}; 
 
// Handle hill create on POST. 
exports.hill_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: hill create POST'); 
}; 
 
// Handle hill delete form on DELETE. 
exports.hill_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: hill delete DELETE ' + req.params.id); 
}; 
 
// Handle hill update form on PUT. 
exports.hill_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: hill update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.hill_list = async function(req, res) { 
    try{ 
        hills = await hill.find(); 
        res.send(hills); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 