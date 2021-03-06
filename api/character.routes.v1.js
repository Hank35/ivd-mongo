var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Characters = require('../model/Character.model');

//
// Geef een lijst van alle films.
//
routes.get('/characters', function(req, res) {
    res.contentType('application/json');
    Film.find({})
        .then((films) => {
            // console.log(characters);
            res.status(200).json(characters);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/characters/:id', function(req, res) {   
    res.contentType('application/json');
    Film.findById(req.params.id)
    .then((film) => {
        // console.log(characters);
        res.status(200).json(characters);
    })
    .catch((error) => res.status(401).json(error));
    });

    routes.put('/characters/:id', function(req, res) {
        
            res.contentType('application/json');
            var id = req.params.id;
        
            var update = { 
                "name" : req.body.name, 
                "description" : req.body.description,
                "imagePath": req.body.imagePath
            };
            Characters.findById(id)
                .then( characters => {
                    characters.set(update);
                    characters.save();
                    res.status(200).json(characters);
                    
                })
                .catch((error) => res.status(401).json(error));
        });

        routes.post('/characters', function(req, res) {
            var new_characters = new Characters(req.body);
            new_characters.save(function(err, task) {
              if (err)
                res.send(err);
                res.json(task);
            });
        });

    routes.delete('/characters/:id', function(req, res) {
        var id = req.params.id;
    
        Character.findById(id)
            .then(character => { 
                character.remove();
                res.status(200).send("Character verwijderd");
            })
            .catch(error => res.status(401).json(error));
    });

module.exports = routes;