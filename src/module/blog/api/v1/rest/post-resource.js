const express = require('express');
const router = express.Router();
const model = require('../../../model');

router.get(process.env.BASE_URL + '/api/v1/rest/post',
    async function(req, res) {
        let data = await model.psot.findAll();
        res.json(data);
    });

router.post(process.env.BASE_URL + '/api/v1/rest/post',
    async function (req, res){
        try{
        let data = await model.post.creat(req.body);
        res.json(data);
    } catch (error){
        res.status(500).json({error: error.message});
    }
    });

module.exports = router;
