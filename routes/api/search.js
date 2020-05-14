const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db');

let connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=hwl36879;PWD=mcm9c6x9zrm0@089;";

router.get('/', (req,res)=>{
    res.render('search')
})

router.post('/getdata',(req,res)=>{
const complaintnumber = req.body.complaintnumber
const department = req.body.department
    ibmdb.open(connStr,function(err,conn){
        if(err){
            console.log(err);
        }
        console.log("connection successful");
        if(department === 'Education'){
            var inputdata_education = "SELECT * FROM HWL36879.EDUCATION WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_education,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Health'){
            var inputdata_health = "SELECT * FROM HWL36879.HEALTH WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_health,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Civil Services'){
            var inputdata_civil = "SELECT * FROM HWL36879.CIVIL WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_civil,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Finance'){
            var inputdata_finance = "SELECT * FROM HWL36879.FINANCE WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_finance,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Agriculture'){
            var inputdata_agri = "SELECT * FROM HWL36879.AGRICULTURE WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_agri,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'PWC'){
            var inputdata_pwc = "SELECT * FROM HWL36879.PWC WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_pwc,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Transport'){
            var inputdata_transport = "SELECT * FROM HWL36879.TRANSPORT WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_transport,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Electricity'){
            var inputdata_electricity = "SELECT * FROM HWL36879.ELECTRICITY WHERE complaintnumber="+complaintnumber+";"
            conn.query(inputdata_electricity,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        
    });
});


module.exports = router