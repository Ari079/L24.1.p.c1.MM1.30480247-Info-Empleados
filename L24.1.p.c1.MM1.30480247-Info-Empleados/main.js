class Empleados{
    constructor(nombre, cargo, pago){
        this.nombre = nombre,
        this.cargo = cargo,
        this.pago = pago
    }
}

class Empresa{
    constructor(){
        this.acumulador_pago_obreros = 0,
        this.contador_obreros = 0,
        this.acumulador_pago_administrativos = 0,
        this.contador_administrativos = 0
    }
    procesarEmpleados(e){
        if(e.cargo === "Obrero"){
            this.contador_obreros++
            this.acumulador_pago_obreros += e.pago
        }else if(e.cargo === "Administrativo"){
            this.contador_administrativos++
            this.acumulador_pago_administrativos += e.pago
        }
    }
    promedioPagoObreros(){
        return this.acumulador_pago_obreros / this.contador_obreros
    }
    promedioPagoAdministrativos(){
        return this.acumulador_pago_administrativos / this.contador_administrativos
    }
}

let empleado1 = new Empleados('Juan', 'Obrero', 100)
let empleado2 = new Empleados('Ana', 'Obrero', 120)
let empleado3 = new Empleados('Lin', 'Administrativo', 200)
let empleado4 = new Empleados('Mary', 'Obrero', 50)
let empleado5 = new Empleados('Carlos', 'Administrativo', 150)


let empresa = new Empresa()

empresa.procesarEmpleados(empleado1)
empresa.procesarEmpleados(empleado2)
empresa.procesarEmpleados(empleado3)
empresa.procesarEmpleados(empleado4)
empresa.procesarEmpleados(empleado5)


let salida = document.getElementById('app')
salida.innerHTML = `

Monto total pagado a obreros: $${empresa.acumulador_pago_obreros}<br>
Promedio pagado a 3 obreros: $${empresa.promedioPagoObreros()}<br>
Monto total pagado a administrativos: $${empresa.acumulador_pago_administrativos}<br>
Promedio pagado a 2 administrativos: $${empresa.promedioPagoAdministrativos()} 

`