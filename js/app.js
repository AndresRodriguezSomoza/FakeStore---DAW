var app = angular.module('tiendaApp', []);

// El principal controlador
app.controller('tiendaController', ['$http', function($http) {
    var vm = this;

    // ========== Estas seran nuestras variables a utilizar ==========
    vm.productos = [];              // Lista de productos
    vm.categoriaSeleccionada = "";  // Categoría seleccionada
    vm.busqueda = "";               // Texto de búsqueda
    vm.carrito = [];                // Carrito de compras
    vm.totalCarrito = 0;            // Total del carrito

    // ========== Funciones a implementar ==========

    // Parte pendiente del Integrante 2 obtener productos desde la API
    vm.obtenerProductos = function() {
        console.log("Pendiente: consumir API de productos");
        // Aquí irá: $http.get('https://fakestoreapi.com/products')
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