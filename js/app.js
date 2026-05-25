var app = angular.module('tiendaApp', []);

// El principal controlador
app.controller('tiendaController', ['$http', function($http) {
    var vm = this;

    // ========== Estas seran nuestras variables a utilizar ==========
    vm.productos = [];  
    vm.categorias = [];          // Lista de productos
    vm.categoriaSeleccionada = "";  // Categoría seleccionada
    vm.busqueda = "";               // Texto de búsqueda
    vm.carrito = [];                // Carrito de compras
    vm.totalCarrito = 0;            // Total del carrito

    // ========== Funciones a implementar ==========

    // Parte pendiente del Integrante 2 obtener productos desde la API
    vm.obtenerProductos = function() {

    $http.get('https://fakestoreapi.com/products')

    .then(function(response) {

        // Guardar productos
        vm.productos = response.data;

        // Cambiar productos manualmente
        vm.productos[0].title = "Motor 5.3L Vortec (LM7 / L59)";
        vm.productos[0].price = 950.00;
        vm.productos[0].image = "assets/img/Lsvort.png";
        vm.productos[0].category = "Motores";

        vm.productos[1].title = "Motor 2JZ Toyota Supra";
        vm.productos[1].price = 4000.00;
        vm.productos[1].image = "assets/img/2jz.jpg";
        vm.productos[1].category = "Motores";

        vm.productos[2].title = "Honda K20 VTEC Turbo";
        vm.productos[2].price = 4500.00;
        vm.productos[2].category = "Motores";
        vm.productos[2].image = "assets/img/k20.jpg";

        vm.productos[3].title = "Nissan RB26DETT";
        vm.productos[3].price = 8500.00;
        vm.productos[3].category = "Motores";
        vm.productos[3].image = "assets/img/rb26.jpg";

        vm.productos[4].title = "Garrett GTX3582R";
        vm.productos[4].price = 1899.99;
        vm.productos[4].category = "Turbos";
        vm.productos[4].image = "assets/img/garrett.jpg"

        vm.productos[5].title = "HKS GTIII-RS";
        vm.productos[5].price = 1599.99;
        vm.productos[5].category = "Turbos";
        vm.productos[5].image = "assets/img/hks.jpg";

        vm.productos[6].title = "Whipple Supercharger";
        vm.productos[6].price = 4200.00;
        vm.productos[6].category = "Supercargadores";
        vm.productos[6].image = "assets/img/whipple.jpg"

        vm.productos[7].title = "Edelbrock E-Force";
        vm.productos[7].price = 3899.99;
        vm.productos[7].category = "Supercargadores";
        vm.productos[7].image = "assets/img/super.jpg"

        vm.productos[8].title = "Volk Racing TE37";
        vm.productos[8].price = 3200.00;
        vm.productos[8].category = "Rines";
        vm.productos[8].image = "assets/img/te37.jpg";

        vm.productos[9].title = "BBS LM";
        vm.productos[9].price = 4500.00;
        vm.productos[9].category = "Rines";
        vm.productos[9].image = "assets/img/bbs.jpg";

        vm.productos[10].title = "Work Emotion CR Kai";
        vm.productos[10].price = 2100.00;
        vm.productos[10].category = "Rines";
        vm.productos[10].image = "assets/img/kai.jpg";

        vm.productos[11].title = "Advan Racing RG-D2";
        vm.productos[11].price = 2800.00;
        vm.productos[11].category = "Rines";
        vm.productos[11].image = "assets/img/race.jpg";

        vm.productos[12].title = "Short Throw Shifter";
        vm.productos[12].price = 180.00;
        vm.productos[12].category = "Interior";
        vm.productos[12].image = "assets/img/short.jpg";

        vm.productos[13].title = "Front Mount Intercooler";
        vm.productos[13].price = 450.00;
        vm.productos[13].category = "Performance";
        vm.productos[13].image = "assets/img/inter.jpg";

        vm.productos[14].title = "Cold Air Intake";
        vm.productos[14].price = 240.00;
        vm.productos[14].category = "Performance";
        vm.productos[14].image = "assets/img/cold.jpg";

        vm.productos[15].title = "Defi Boost Gauges";
        vm.productos[15].price = 450.00;
        vm.productos[15].category = "Electronica";
        vm.productos[15].image = "assets/img/boost.jpg";

        vm.productos[16].title = "Carbon Aero Canards";
        vm.productos[16].price = 180.00;
        vm.productos[16].category = "Exterior";
        vm.productos[16].image = "assets/img/carbon.jpg";

        vm.productos[17].title = "Rocket Bunny Widebody Kit";
        vm.productos[17].price = 4600.00;
        vm.productos[17].category = "Exterior";
        vm.productos[17].image = "assets/img/wide.jpg";

        vm.productos[18].title = "Sequential LED Front Lights";
        vm.productos[18].price = 650.00;
        vm.productos[18].category = "Exterior";
        vm.productos[18].image = "assets/img/angel.jpg";

        vm.productos[19].title = "Carbon Rear Diffuser";
        vm.productos[19].price = 530.00;
        vm.productos[19].category = "Exterior";
        vm.productos[19].image = "assets/img/difu.jpg";

        //Llenar el dropdown
        vm.categorias = [...new Set(
            vm.productos.map(function(producto){
                return producto.category;
            })
        )];


        console.log("Productos cargados correctamente");

    })

    .catch(function(error) {

        console.error("Error al obtener productos:", error);

    });

};

    // Parte en conjunto de los integrantes 4 y 5 de agregar productos al carrito
    vm.agregarAlCarrito = function(producto) {
        console.log("Pendiente: agregar al carrito", producto);
    };

    // Parte pendiente del Integrante 5 se debe calcular el total del carrito
    vm.calcularTotal = function() {
        console.log("Pendiente: calcular total del carrito");
    };

    // Parte pendiente del Integrante 5 se debe cargar el carrito con localStorage
    vm.cargarCarrito = function() {
        console.log("Pendiente: cargar carrito guardado");
    };

    vm.obtenerProductos();
    vm.cargarCarrito();
}]);