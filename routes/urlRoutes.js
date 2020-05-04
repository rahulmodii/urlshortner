const express = require('express')

const router = express.Router();

const UrlSchema = require('../schema/UrlSchema')

const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

router.get('/',async(req,res,next)=>{
    const data = await UrlSchema.find({})
    res.json({'message':'getfunction','data':data})
})
router.get('/response',async(req,res,next)=>{
    // const shortcode = 
    const data = await UrlSchema.find({'code':''})
    res.json({'message':'getfunction','data':data})
})
router.post('/',async(req,res,next)=>{
    // console.log(req.body)
    const ip =req.connection.remoteAddress||req.headers['x-forwarded-for']
    const code = shortid.generate()
    const create=await UrlSchema.create({ip:ip,url:req.body.url,shortcode:code})
    const url =`http://${req.headers.host}/${code}` ;
    res.json({'message':'getfunction1','shorturl':url})
})
router.put('/',async(req,res,next)=>{
    res.json({'message':'getfunction2'})
})
router.patch('/',async(req,res,next)=>{
    res.json({'message':'getfunction4'})
})

router.delete('/',async(req,res,next)=>{
    res.json({'message':'getfunction3'})
})



module.exports = router
