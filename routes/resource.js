
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var hill_controller = require('../controllers/hill'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// hill ROUTES /// 
 
// POST request for creating a hill.  
router.post('/hills', hill_controller.hill_create_post); 
 
// DELETE request to delete hill. 
router.delete('/hills/:id', hill_controller.hill_delete); 
 
// PUT request to update hill. 
router.put('/hills/:id', 
hill_controller.hill_update_put); 
 
// GET request for one hill. 
router.get('/hills/:id', hill_controller.hill_detail); 
 
// GET request for list of all hill items. 
router.get('/hills', hill_controller.hill_list); 
 
module.exports = router;