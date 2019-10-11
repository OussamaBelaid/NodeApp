const express = require('express');
const router = express.Router();

router.get('/', (req,rep) => {
    rep.send('server is up runnig')
});


module.exports = router;