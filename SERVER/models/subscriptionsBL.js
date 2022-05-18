const Subscription = require('../models/subscriptionsModel');


//Get all suscriptions
const getAllSubscriptions = function()
{
    return new Promise((resolve,reject) =>
    {
        Subscription.find({}, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
}


//Get subscription by id
const getSubscription = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Subscription.findById(id, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
}


//Add new subscription
const addSubscription = function(obj)
{
    return new Promise((resolve,reject) =>
    {
       
       let sub = new Subscription(obj);

       sub.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created!');
            }

        })
    })
}


//Update exist subscription
const updateSubscription = function(id,obj)
{
    return new Promise((resolve,reject) =>
    {

        Subscription.findByIdAndUpdate(id,obj, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Updated!');
            }
        })
    })
}


//Delete subscription
const deleteSubscription = function(id)
{
    return new Promise((resolve,reject) =>
    {

        Subscription.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted!');
            }
        })
    })
}


//Delete subscriptions by their movie id
const deleteSubscriptionsByMovieId = function(movieid)
{
    return new Promise((resolve,reject) =>
    {

        Subscription.deleteMany({MovieId : movieid}, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted!');
            }
        })
    })
}

//Delete subscriptions by their member id
const deleteSubscriptionsByMemberId = function(memberid)
{
    return new Promise((resolve,reject) =>
    {

        Subscription.deleteMany({MemberId : memberid}, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted!');
            }
        })
    })
}

//Get all subscriptions by their movie id
const getAllSubscriptionsByMovieId = function(movieid)
{
    return new Promise((resolve,reject) =>
    {
        Subscription.find({MovieId : movieid}, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
}

//Get all subscriptions by their member id
const getAllSubscriptionsByMemberId = function(memberid)
{
    return new Promise((resolve,reject) =>
    {
        Subscription.find({MemberId : memberid}, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
}



module.exports = {  getAllSubscriptions,
                    getSubscription,
                    addSubscription,
                    updateSubscription,
                    deleteSubscription, 
                    getAllSubscriptionsByMovieId, 
                    getAllSubscriptionsByMemberId, 
                    deleteSubscriptionsByMovieId, 
                    deleteSubscriptionsByMemberId }