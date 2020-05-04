const express = require('express')

const app = express()

const routes = require('./routes/urlRoutes')
const bodyParser = require('body-parser');
const UrlSchema = require('./schema/UrlSchema')
const dbconnection = require('./server/server')

dbconnection();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/:id',async(req,res)=>{
  const code=  req.originalUrl.replace('/','')
    // console.log(code)
    const response = await UrlSchema.find({shortcode:code},(err,result)=>{
        if(err){console.log(err)}
        if(result.length){
            res.json({'data':result})
        }
    })
 
})

app.use('/api/v1/url',routes)

app.listen(3000,()=>console.log('hello'))