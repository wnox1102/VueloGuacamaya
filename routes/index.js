const express=require("express");
const router=express.Router();
const UserController = require("../controllers/UserController");
const EmpleadosController= require("../controllers/EmpleadoController");
const AvionController = require("../controllers/AvionController.js");
const ModeloAvionController = require("../controllers/ModeloAvionController.js");

// Ruta inicial de la aplicacion
router.get('/',(req,res)=>{
    res.render('Index', {title: 'Inicio'});
});

// Router para empleados y las rutas necesarias como el Crud entre otras
router.get("/Empleados", (req, res) => {
  EmpleadosController.getEmpleado((empleado, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to show empleados"
      });
    else {
      res.render("Empleados", { empleado});
    }
  });
});

router.post('/Empleados/EmpleadosC',(req,res)=>{
  EmpleadosController.createEmpleado(req.body);
  res.redirect('/Empleados');
});

// Router para el Crud de vuelos entre otras consultas
router.get('/Vuelos',(req,res)=>{
    res.render('Vuelos',{title:"Vuelos"});
});


// Router para los vuelos charter
router.get('/VuelosCharter',(req,res)=>{
  res.render("VuelosCharter",{title:'Vuelos-Charter'});
});

// router para los aeropuertos y las estadisticas necesarias
router.get('/Aeropuertos',(req,res)=>{
    res.render('Aeropuertos',{title:'Aeropuertos'});
    
});

// router para reservar vuelos 
router.get('/Reserva',(req,res)=>{
    res.render('Reserva',{title:'Reserva'})
   
});

// Router para El crud de Aviones y las funciones necesarias
router.get('/Aviones', (req,res)=>{
  res.render('Aviones', {title: 'Aviones de VuelosG'});
});


/*
  //Metodos Crud iniciacion del proyecto 

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
    UserController.createUser(req.body);
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
*/

  
module.exports =router;