export default class auto {
constructor (marca, modelo, color="blanco", kilometraje = 0){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kilometraje = kilometraje;
    this.estado = "apagado";
    }

    mostrarEstado(){
        console.log(`El auto ${this.marca} ${this.color} del año ${this.modelo} tiene un kilometraje de ${this.kilometraje} kms y esta ${this.estado}`);
    }

    encender(){
        this.estado = "Encendido";
        this.mostrarEstado();

    }
    apagar() {
        this.estado = "Apagado";
        this.mostrarEstado();
    }

    avanzar(velocidad, tiempo) {
        if(this.estado === "apagado") {
            console.log("El auto no puede avanzar porque esta apagado");
        }else {
            let distancia = velocidad * tiempo;
            this.kilometraje = this.kilometraje + distancia;
            this.mostrarEstado();
        }
    }
}