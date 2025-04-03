const express = require('express');
const router = express.Router();
const model = require('../../../model');

router.get(process.env.BASE_URL + '/api/v1/rest/post',
    async function(req, res) {
        try {
            let data = await model.post.findAll(); 
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

router.post(process.env.BASE_URL + '/api/v1/rest/post',
    async function (req, res){
        try {
            let data = await model.Post.create(req.body); 
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

module.exports = router;
