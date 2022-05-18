const express = require('express');
const subscriptionsBL = require('../models/subscriptionsBL');

const router = express.Router()

//Get all suscriptions // suscriptions by MovieId // suscriptions by MemberId
router.route('/')
    .get( async function(req,resp)
    {
        if(req.query != null && req.query.movieid != null)
        {
        let movieid = req.query.movieid
        let data =  await subscriptionsBL.getAllSubscriptionsByMovieId(movieid);
        return resp.json(data)
        }

        else if(req.query != null && req.query.memberid != null)
        {
        let memberid = req.query.memberid
        let data =  await subscriptionsBL.getAllSubscriptionsByMemberId(memberid);
        return resp.json(data)
        }

        else
        {
            let data = await subscriptionsBL.getAllSubscriptions()
            return resp.json(data)  
        }
    })

//Get subscription by id
router.route('/:id')
    .get( async function(req,resp)
    {
        let id = req.params.id;
        let data = await subscriptionsBL.getSubscription(id)
        return resp.json(data);    
    })

//Add new subscription
router.route('/')
    .post( async function(req,resp)
    {
        let obj = req.body;
        let status = await subscriptionsBL.addSubscription(obj)
        return resp.json(status);    
    })

//Update exist subscription
router.route('/:id')
    .put( async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;

        let status = await subscriptionsBL.updateSubscription(id,obj);
        return resp.json(status);    
    })

//Delete subscriptions by movie id, member id, or subscription id
router.route('/')
    .delete( async function(req,resp)
    {
        if(req.query != null && req.query.movieid != null)
        {
            let movieid = req.query.movieid
            let status =  await subscriptionsBL.deleteSubscriptionsByMovieId(movieid);
            return resp.json(status)
        }
        else  if(req.query != null && req.query.memberid != null)
        {
            let memberid = req.query.memberid
            let status =  await subscriptionsBL.deleteSubscriptionsByMemberId(memberid);
            return resp.json(status)
        }
        else
        {
            let id = req.query.id;

            let status = await subscriptionsBL.deleteSubscription(id);
            return resp.json(status)
        }   
    })


module.exports = router;