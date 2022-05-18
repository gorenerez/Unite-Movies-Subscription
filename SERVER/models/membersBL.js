const Member = require('../models/membersModel');

const getAllMembers = function()
{
    return new Promise((resolve,reject) =>
    {
        Member.find({}, function(err, data)
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



const getMember = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Member.findById(id, function(err, data)
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



const addMember = function(obj)
{
    return new Promise((resolve,reject) =>
    {
       
       let mmbr = new Member(obj);

       mmbr.save(function(err)
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


const updateMember = function(id,obj)
{
    return new Promise((resolve,reject) =>
    {

        Member.findByIdAndUpdate(id,obj, function(err)
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


const deleteMember = function(id)
{
    return new Promise((resolve,reject) =>
    {

        Member.findByIdAndDelete(id, function(err)
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




module.exports = {getAllMembers, getMember, addMember, updateMember, deleteMember}