const express=require("express");
const router=express.Router();
const UserController = require("../controllers/UserController");

router.get('/',(req,res)=>{
    res.render('Home', {title: 'Home'});
})

router.get('/Login',(req,res)=>{
    res.render('Login',{title:'Login'});
})

router.get('/Register',(req,res)=>{
    res.render('Register',{title:'Register'})
})

router.get('/Vuelos',(req,res)=>{
    res.render('Vuelos',{title:"Vuelos"})
})

router.get('/Ofertas',(req,res)=>{
    res.render('Ofertas', {title:'Ofertas'})
})

router.get('/Aeropuertos',(req,res)=>{
    res.render('Aeropuertos',{title:'Aeropuertos'});
    
})

router.get('/Reserva',(req,res)=>{
    res.render('Reserva',{title:'Reserva'})
   
})

router.get("/Create", (req, res) => {
    UserController.getUser((Users, err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to show Users'
        });
      else
        res.render("Prueba", {Users});
    });
  });

router.post('/create',(req,res)=>{
  console.log(req.body);
    UserController.createUser(req.body)
    res.redirect('/Create');
});


router.post("/eliminar/:id", (req, res) => {
    if (!!req.params.id) {
      UserController.deleteUser(req.params.id, (err) => {
        if (err)
          res.json({
            success: false,
            msg: 'Failed to delete product'
          });
        else
          res.redirect('/Create');
      });
    }
  });

  router.post("/Update/:id", (req, res) => {
    console.log(req.body);
    if (!!req.params.id) {
        console.log(req.body);
      UserController.UpdateUsers(req.body,req.params.id,(err) => {
        if (err)
          res.json({
            success: false,
            msg: 'Failed to update User'
          });
        else
          res.redirect('/Create');
      });
    }
  });


  
module.exports =router;