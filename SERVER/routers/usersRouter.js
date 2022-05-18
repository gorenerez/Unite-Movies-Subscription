const express = require('express')
const usersBL = require('../models/usersBL')

const router = express.Router()

router.route('/')
    .get( async function(req,resp)
    {
        let data = await usersBL.getAllUsers()
        return resp.json(data);    
    })

router.route('/:id')
    .get( async function(req,resp)
    {
        let id = req.params.id
        let data = await usersBL.getUser(id)
        return resp.json(data)    
    })

router.route('/')
    .post( async function(req,resp)
    {
        if(!req.body.FullName)
        {
            let username = req.body.UserName
            let password = req.body.Password
            let obj = {UserName : username, Password : password}
            let data = await usersBL.checkUserLogin(obj)
            return resp.json(data)
        }
        else
        {
            let obj = req.body
            let status = await usersBL.addUser(obj)
            return resp.json(status)
        }
    })

router.route('/:id')
    .put( async function(req,resp)
    {
        let obj = req.body
        let id = req.params.id

        let status = await usersBL.updateUser(id,obj)
        return resp.json(status)   
    })

router.route('/:id')
    .delete( async function(req,resp)
    {
        let id = req.params.id

        let status = await usersBL.deleteUser(id)
        return resp.json(status)    
    })


module.exports = router