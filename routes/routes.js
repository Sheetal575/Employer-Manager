const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const ObjectId = require('mongoose').Types.ObjectId;
//get,post,put,delete apis

//get api--
router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log(err);
        }else{
            res.send(doc);
        }
    })
})


//post api
router.post('/',(req,res)=>{
    let emp = new Employee({
        name : req.body.name,
        position: req.body.position,
        dept:req.body.dept,
    });

    emp.save((err,doc)=>{
        if(err){
            console.log(err);
        }else{
            res.send(doc);
        }
    })
})


//get single employee api---
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc)=>{
            if(err){
                console.log(err);
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('No record found with id'+req.params.id);
    }
})

//put api--(use to update any data)
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            name : req.body.name,
            position: req.body.position,
            dept:req.body.dept,
        };

        Employee.findByIdAndUpdate(req.params.id, {$set:emp},{new:true},(err,doc)=>{
            if(err){
                console.log(err);
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('No record found with id'+req.params.id);
    }
})

//delete api--
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log(err);
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('No record found with id'+req.params.id);
    }
})


module.exports = router;


