//Dependencies
const express = require('express')
const router  = express.Router()
const bcrypt = require('bcryptjs')
const ibmdb = require('ibm_db');

let connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=hwl36879;PWD=mcm9c6x9zrm0@089;";


//Routes
router.get('/login', (req, res)=>{
    res.render('login.ejs')
})

router.post('/login', (req, res)=>{
    const user =  req.body.username
   const pass =  req.body.password
 if(user === 'admin' && pass ==='admin' ){
        res.redirect('/admin/panel')
        console.log('User logged in')
   }
   else{
       res.redirect('back')
       console.log('Wrong creds')
   }
})

router.get('/panel', (req, res) =>{
    res.render('panel')
})


router.post('/panel', (req, res)=>{
    ibmdb.open(connStr,function(err,conn){
        const department = req.body.department
        if(err){
            console.log(err);
        } 
        else if(department === 'Education'){
            var inputdata = "SELECT * FROM HWL36879.EDUCATION;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("display",{info : data});
                        
                    });
                    
                }
            });
        }   
        else if(department === 'Health'){
            var inputdata = "SELECT * FROM HWL36879.HEALTH;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        else if(department === 'Civil Services'){
            var inputdata = "SELECT * FROM HWL36879.CIVIL;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Electricity'){
            var inputdata = "SELECT * FROM HWL36879.ELECTRICITY;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Finance'){
            var inputdata = "SELECT * FROM HWL36879.FINANCE;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Agriculture'){
            var inputdata = "SELECT * FROM HWL36879.AGRICULTURE;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Transport'){
            var inputdata = "SELECT * FROM HWL36879.TRANSPORT;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'PWC'){
            var inputdata = "SELECT * FROM HWL36879.PWC;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
    })
})

router.get("/checkinfo",(req,res)=>{
    var complaintnumber = req.query.complaintnumber;
    var department =req.query.dept;
    ibmdb.open(connStr,function(err,conn){
        if(err){
            Console.log(err);
        }else if(department === 'Education'){
            var education = "SELECT * FROM HWL36879.EDUCATION WHERE COMPLAINTNUMBER="+complaintnumber+";"
        conn.query(education,function(err,data){  //required
            if(err){
                console.log(err);
            }else{
                conn.close(function(){  //required
                    res.render("checkinfo",{info : data})
                });
            }
        });
        }else if( department === 'Health'){
            var health = "SELECT * FROM HWL36879.HEALTH WHERE COMPLAINTNUMBER="+complaintnumber+";"
            conn.query(health,function(err,data){
                if(err){
                    console.log(err.message);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }else if(department === 'Civil Services'){
            var health = "SELECT * FROM HWL36879.CIVIL WHERE COMPLAINTNUMBER="+complaintnumber+";"
            conn.query(health,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
            // //n>Agriculture</option>
            // <option>PWC</option>
            // <option>Transport</option>
            // <option>Electricity</option>
        }else if(department === 'Finance'){
            var finance = "SELECT * FROM HWL36879.FINANCE WHERE COMPLAINTNUMBER="+complaintnumber+";"
            conn.query(finance,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'Agriculture'){
            var agriculture = "SELECT * FROM HWL36879.AGRICULTURE WHERE COMPLAINTNUMBER="+complaintnumber+";"
            conn.query(agriculture,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'PWC'){
            var pwc = "SELECT * FROM HWL36879.PWC WHERE COMPLAINTNUMBER="+complaintnumber+";"
            conn.query(pwc,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        cres.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'Transport'){
            var transport = "SELECT * FROM HWL36879.TRANSPORT WHERE COMPLAINTNUMBER="+complaintnumber+";"
            conn.query(transport,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'Electricity'){
            var electricity = "SELECT * FROM HWL36879.ELECTRICITY WHERE COMPLAINTNUMBER="+complaintnumber+";"
            conn.query(electricity,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
    })
    
});

router.get("/updateaccept",(req,res)=>{
    var complaintnumber = req.query.complaintnumber;
    var department = req.query.dept;
    var accept = 1;
    var submitted = 0 ;
    var rejected = 0;
    var resolved = 0; 
    console.log(complaintnumber)
    ibmdb.open(connStr,(err,conn)=>{
       if(err){
           console.log(err);
       }else if(department === 'Education'){
           console.log("updare rooute entered")
                var update_education = "UPDATE HWL36879.EDUCATION SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                conn.query(update_education,function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        conn.close(function(){
                            console.log("data updated");
                            res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                       });
                    }
                });
            }else if(department === 'Health'){
                console.log("updare route entered")
                     var update_health = "UPDATE HWL36879.HEALTH SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                     conn.query(update_health,function(err,data){
                         if(err){
                             console.log(err);
                         }else{
                             conn.close(function(){
                                 console.log("data updated");
                                 res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                            });
                         }
                     });
                 }else if(department === 'Civil Services'){
                    console.log("updare rooute entered")
                         var update_civil = "UPDATE HWL36879.CIVIL SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                         conn.query(update_civil,function(err,data){
                             if(err){
                                 console.log(err);
                             }else{
                                 conn.close(function(){
                                     console.log("data updated");
                                     res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                });
                             }
                         });
                     }else if(department === 'Finance'){
                        console.log("updare rooute entered")
                             var update_finance = "UPDATE HWL36879.FINANCE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                             conn.query(update_finance,function(err,data){
                                 if(err){
                                     console.log(err);
                                 }else{
                                     conn.close(function(){
                                         console.log("data updated");
                                         res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                    });
                                 }
                             });
                         }else if(department === 'Agriculture'){
                            console.log("updare rooute entered")
                                 var update_agriculture = "UPDATE HWL36879.AGRICULTURE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                 conn.query(update_agriculture,function(err,data){
                                     if(err){
                                         console.log(err);
                                     }else{
                                         conn.close(function(){
                                             console.log("data updated");
                                             res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                        });
                                     }
                                 });
                             }else if(department === 'PWC'){
                                console.log("updare rooute entered")
                                     var update_pwc = "UPDATE HWL36879.PWC SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                     conn.query(update_pwc,function(err,data){
                                         if(err){
                                             console.log(err);
                                         }else{
                                             conn.close(function(){
                                                 console.log("data updated");
                                                 res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                            });
                                         }
                                     });
                                 }else if(department === 'Transport'){
                                    console.log("updare rooute entered")
                                         var update_transport = "UPDATE HWL36879.TRANSPORT SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                         conn.query(update_transport,function(err,data){
                                             if(err){
                                                 console.log(err);
                                             }else{
                                                 conn.close(function(){
                                                     console.log("data updated");
                                                     res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                                });
                                             }
                                         });
                                     }else if(department === 'Electricity'){
                                        console.log("updare rooute entered")
                                             var update_electricity = "UPDATE HWL36879.ELECTRICITY SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                             conn.query(update_electricity,function(err,data){
                                                 if(err){
                                                     console.log(err);
                                                 }else{
                                                     conn.close(function(){
                                                         console.log("data updated");
                                                         res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                                    });
                                                 }
                                             });
                                         }
       
        
    });
})

router.get("/updateresolve",(req,res)=>{
    var complaintnumber = req.query.complaintnumber;
    var department = req.query.dept;
    var accept = 0;
    var submitted = 0 ;
    var rejected = 0;
    var resolved = 1; 
    ibmdb.open(connStr,(err,conn)=>{
       if(err){
           console.log(err);
       }else if(department === 'Education'){
           console.log("updare rooute entered")
                var update_education = "UPDATE HWL36879.EDUCATION SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                conn.query(update_education,function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        conn.close(function(){
                            console.log("data updated");
                            res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                       });
                    }
                });
            }else if(department === 'Health'){
                console.log("updare route entered")
                     var update_health = "UPDATE HWL36879.HEALTH SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                     conn.query(update_health,function(err,data){
                         if(err){
                             console.log(err);
                         }else{
                             conn.close(function(){
                                 console.log("data updated");
                                 res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                            });
                         }
                     });
                 }else if(department === 'Civil Services'){
                    console.log("updare rooute entered")
                         var update_civil = "UPDATE HWL36879.CIVIL SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                         conn.query(update_civil,function(err,data){
                             if(err){
                                 console.log(err);
                             }else{
                                 conn.close(function(){
                                     console.log("data updated");
                                     res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                });
                             }
                         });
                     }else if(department === 'Finance'){
                        console.log("updare rooute entered")
                             var update_finance = "UPDATE HWL36879.FINANCE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                             conn.query(update_finance,function(err,data){
                                 if(err){
                                     console.log(err);
                                 }else{
                                     conn.close(function(){
                                         console.log("data updated");
                                         res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                    });
                                 }
                             });
                         }else if(department === 'Agriculture'){
                            console.log("updare rooute entered")
                                 var update_agriculture = "UPDATE HWL36879.AGRICULTURE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                 conn.query(update_agriculture,function(err,data){
                                     if(err){
                                         console.log(err);
                                     }else{
                                         conn.close(function(){
                                             console.log("data updated");
                                             res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                        });
                                     }
                                 });
                             }else if(department === 'PWC'){
                                console.log("updare rooute entered")
                                     var update_pwc = "UPDATE HWL36879.PWC SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                     conn.query(update_pwc,function(err,data){
                                         if(err){
                                             console.log(err);
                                         }else{
                                             conn.close(function(){
                                                 console.log("data updated");
                                                 res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                            });
                                         }
                                     });
                                 }else if(department === 'Transport'){
                                    console.log("updare rooute entered")
                                         var update_transport = "UPDATE HWL36879.TRANSPORT SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                         conn.query(update_transport,function(err,data){
                                             if(err){
                                                 console.log(err);
                                             }else{
                                                 conn.close(function(){
                                                     console.log("data updated");
                                                     res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                                });
                                             }
                                         });
                                     }else if(department === 'Electricity'){
                                        console.log("updare rooute entered")
                                             var update_electricity = "UPDATE HWL36879.ELECTRICITY SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                             conn.query(update_electricity,function(err,data){
                                                 if(err){
                                                     console.log(err);
                                                 }else{
                                                     conn.close(function(){
                                                         console.log("data updated");
                                                         res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                                    });
                                                 }
                                             });
                                         }
       
        
    });
})

router.get("/updaterejected",(req,res)=>{
    var complaintnumber = req.query.complaintnumber;
    var department = req.query.dept;
    var accept = 0;
    var submitted = 0 ;
    var rejected = 1;
    var resolved = 0; 
    ibmdb.open(connStr,(err,conn)=>{
       if(err){
           console.log(err);
       }else if(department === 'Education'){
           console.log("updare rooute entered")
                var update_education = "UPDATE HWL36879.EDUCATION SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                conn.query(update_education,function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        conn.close(function(){
                            console.log("data updated");
                            res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                       });
                    }
                });
            }else if(department === 'Health'){
                console.log("updare route entered")
                     var update_health = "UPDATE HWL36879.HEALTH SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                     conn.query(update_health,function(err,data){
                         if(err){
                             console.log(err);
                         }else{
                             conn.close(function(){
                                 console.log("data updated");
                                 res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                            });
                         }
                     });
                 }else if(department === 'Civil Services'){
                    console.log("updare rooute entered")
                         var update_civil = "UPDATE HWL36879.CIVIL SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                         conn.query(update_civil,function(err,data){
                             if(err){
                                 console.log(err);
                             }else{
                                 conn.close(function(){
                                     console.log("data updated");
                                     res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                });
                             }
                         });
                     }else if(department === 'Finance'){
                        console.log("updare rooute entered")
                             var update_finance = "UPDATE HWL36879.FINANCE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                             conn.query(update_finance,function(err,data){
                                 if(err){
                                     console.log(err);
                                 }else{
                                     conn.close(function(){
                                         console.log("data updated");
                                         res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                    });
                                 }
                             });
                         }else if(department === 'Agriculture'){
                            console.log("updare rooute entered")
                                 var update_agriculture = "UPDATE HWL36879.AGRICULTURE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                 conn.query(update_agriculture,function(err,data){
                                     if(err){
                                         console.log(err);
                                     }else{
                                         conn.close(function(){
                                             console.log("data updated");
                                             res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                        });
                                     }
                                 });
                             }else if(department === 'PWC'){
                                console.log("updare rooute entered")
                                     var update_pwc = "UPDATE HWL36879.PWC SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                     conn.query(update_pwc,function(err,data){
                                         if(err){
                                             console.log(err);
                                         }else{
                                             conn.close(function(){
                                                 console.log("data updated");
                                                 res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                            });
                                         }
                                     });
                                 }else if(department === 'Transport'){
                                    console.log("updare rooute entered")
                                         var update_transport = "UPDATE HWL36879.TRANSPORT SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                         conn.query(update_transport,function(err,data){
                                             if(err){
                                                 console.log(err);
                                             }else{
                                                 conn.close(function(){
                                                     console.log("data updated");
                                                     res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                                });
                                             }
                                         });
                                     }else if(department === 'Electricity'){
                                        console.log("updare rooute entered")
                                             var update_electricity = "UPDATE HWL36879.ELECTRICITY SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE COMPLAINTNUMBER="+complaintnumber+";"
                                             conn.query(update_electricity,function(err,data){
                                                 if(err){
                                                     console.log(err);
                                                 }else{
                                                     conn.close(function(){
                                                         console.log("data updated");
                                                         res.redirect("/admin/checkinfo?complaintnumber="+complaintnumber+"&dept="+department);
                                                    });
                                                 }
                                             });
                                         }
       
        
    });
})


module.exports = router