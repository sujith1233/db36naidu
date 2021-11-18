var express = require("express");
var router = express.Router();

const hill_controlers= require('../controllers/hill'); 

router.get('/', hill_controlers.hill_view_all_Page ); 

router.get('/detail', hill_controlers.hill_view_one_Page); 

router.get('/create', hill_controlers.hill_create_Page); 

router.get('/update', hill_controlers.hill_update_Page); 

router.get('/delete', hill_controlers.hill_delete_Page); 

module.exports = router;