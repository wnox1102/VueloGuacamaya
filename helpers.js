// FS is a built in module to node that let's us read files from the system we're running on
const fs = require("fs");

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require("moment");

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// inserting an SVG
exports.icon = name => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteTitle = `Express Template`;

exports.menu = [
    {text: 'Vuelos', path:'/Vuelos'},
    {text: 'Reservar Vuelos', path:'/Reserva'},
    {text:'Aeropuertos', path: '/Aeropuertos'},
    {text: 'Vuelos Charter', path:'/VuelosCharter'},
    {text:'Empleados', path:' /Empleados'},
    {text:'Mantenimiento' , path:' /Mantenimiento'},
    {text:'Aviones', path:'/Aviones'}
];

exports.links=[
    {text:'link 1'},
    {text:'link 2'},
    {text:'link 3'}

];

exports.empleado = [
    {text: "Nombre:", id: 'name'},
    {text: "Apellido:", id:'lastname'},
    {text:'Cedula:', id:'cedula'},

];

exports.option = [
     {text:" Tipo Empleado",option: ['Administrador', 'Encargado', 'Presidente', 'Piloto', 'Aeromosa']}
];


exports.Modelos = [
    {label:'Modelo de Avion',text: ['Boeing 747', 'Avioneta']},
];

exports.formAvion = [
    {text:'Tipo de Combustible', id:'tipocombus'},
    {text:'Cantidad Maxima de Asientos', id:'maxasientos'},
    {text:'Cantidad de Salidas', id:'cantsalidas'},
    {text:'Cantidad de banos', id:'cantbanos'},
    {text:'Velocidad Maxima', id:'velocidadMax'},
    {text:'Velocidad Crucero', id:'velocidadCrucero'},
    {text:'Peso del Avion', id:'pesoavion'},
    {text:'Peso Maximo del Avion con Carga', id:'pesomax'},
    {text:'Equipo Medico',id:'equipomec'},
    {text:'Distancia Maxima de despegue', id:'dismaxdespegue'},

];


exports.ReservarVuelo=[
    {text:' Origen: ', id:'origen'},
    {text:'Destino', id:'destino'},
    {text:'Nombre del Cliente:', id:'nombre'},
    {text:'Cedula del Cliente', id:'cedula'},
    {text:'Ingrese la cantidad de Pasajeros', id:'cantpasajeros'}

];

exports.Pasajes=[
  {text:['1','2','3','4','5']}
];

