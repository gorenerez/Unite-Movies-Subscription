const Movie = require('../models/moviesModel');

const getAllMovies = function()
{
    return new Promise((resolve,reject) =>
    {
        Movie.find({}, function(err, data)
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



const getMovie = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Movie.findById(id, function(err, data)
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



const addMovie = function(obj)
{
    return new Promise((resolve,reject) =>
    {
       
       let mov = new Movie(obj);

       mov.save(function(err)
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


const updateMovie = function(id,obj)
{
    return new Promise((resolve,reject) =>
    {

        Movie.findByIdAndUpdate(id,obj, function(err)
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


const deleteMovie = function(id)
{
    return new Promise((resolve,reject) =>
    {

        Movie.findByIdAndDelete(id, function(err)
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




module.exports = {getAllMovies, getMovie, addMovie, updateMovie, deleteMovie}