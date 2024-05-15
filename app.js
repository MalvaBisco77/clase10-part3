let alumnos=[]

function prueba(formulario){
    const {nombre,edad}=formulario
    let datosAlumno={nombre:nombre.value,edad:edad.value}
    alumnos.push(datosAlumno)
    console.log(alumnos)
    formulario.reset()
}

function reporte(){
    let suma=0
    alumnos.forEach(myfunction)

    alert(` el total de la suma de las edades es ${suma}`)

    function myfunction(item){
        suma+=parseInt(item.edad)
        return suma
    }
}