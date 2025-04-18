// Colocamos lo que vayamos a 
// exportar dentro de las llaves
module.exports = {
    
    // Crea una funcion anonima 
    // y la guarda en "suma" 
    suma:(a,b)=>{ 
        return a+b
    } ,
    // La coma nos separa de los 
    // siguentes elementos a exportar 
    resta: function(a,b){  //Esta es otra forma de funcion anonima
        return a-b
    },
    creador: 'Nicolas', 
    alumnos: ['Walter', 'Nehuen', 'Melisa', 'Santiago', 'Thomas'],
}