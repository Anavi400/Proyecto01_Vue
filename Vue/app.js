// 1 - Crear la app.
// Vue.createApp({}) se encarga de crear la app.

const app = Vue.createApp({
    // data() es un metodo que se encarga de crear los datos de la app.
    data() {
        // return es un metodo que se encarga de devolver los datos de la app.
        return {
            // tasksA es una variable que se encarga de almacenar la informacion de la app.
            tasksA: "Terminar el informe de Acreditables",
            tasksB: "Terminar el informe de Redes de Computadoras",
        }
    }
}); 

// 2 - Montar la app.
// app.mount('#app'); se encarga de montar la app.
// #task es el id del elemento que se va a montar.
app.mount('#task');


