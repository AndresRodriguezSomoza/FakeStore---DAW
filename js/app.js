var app = angular.module("tiendaApp", []);

// El principal controlador
app.controller("tiendaController", [
  "$http",
  function ($http) {
    var vm = this;

    // ========== Estas seran nuestras variables a utilizar ==========
    vm.productos = [];
    vm.categorias = []; // Lista de productos
    vm.categoriaSeleccionada = ""; // Categoría seleccionada
    vm.busqueda = ""; // Texto de búsqueda
    vm.carrito = []; // Carrito de compras
    vm.totalCarrito = 0; // Total del carrito
    vm.productoSeleccionado = {};

    vm.verDetalles = function (producto) {
      vm.productoSeleccionado = producto;
    };

    // ========== Funciones a implementar ==========

    // Parte pendiente del Integrante 2 obtener productos desde la API
    vm.obtenerProductos = function () {
      $http
        .get("https://fakestoreapi.com/products")
        .then(function (response) {
          // Guardar productos
          vm.productos = response.data;

          // Modificar productos manualmente
          if (vm.productos.length > 0) {
            vm.productos[0].title = "Motor 5.3L Vortec (LM7 / L59)";
            vm.productos[0].price = 950.0;
            vm.productos[0].image = "assets/img/Lsvort.png";
            vm.productos[0].category = "Motores";
            vm.productos[0].description =
              "Motor de chevrolet equipado de con su ramal con excelente relacion potencia/peso ideal para swaps tipo LS o proyectos";
          }

          if (vm.productos.length > 1) {
            vm.productos[1].title = "Motor 2JZ Toyota Supra";
            vm.productos[1].price = 4000.0;
            vm.productos[1].image = "assets/img/2jz.jpg";
            vm.productos[1].category = "Motores";
            vm.productos[1].description =
              "Motor proveniente de Toyota tipo 2jz ideal para swaps o proyectos";
          }

          if (vm.productos.length > 2) {
            vm.productos[2].title = "Honda K20 VTEC Turbo";
            vm.productos[2].price = 4500.0;
            vm.productos[2].category = "Motores";
            vm.productos[2].image = "assets/img/k20.jpg";
            vm.productos[2].description =
              "Motor proveniente de Honda para swaps tipo K20 VTEC con su turbo incluido y ramal de conexion para una instalacion efectiva";
          }

          if (vm.productos.length > 3) {
            vm.productos[3].title = "Nissan RB26DETT";
            vm.productos[3].price = 8500.0;
            vm.productos[3].category = "Motores";
            vm.productos[3].image = "assets/img/rb26.jpg";
            vm.productos[3].description =
              "Motor proveniente del legendario Nissan Skyline R34 ofreciendo potencia en cada caballo de fuerza y una sensacion increible";
          }

          if (vm.productos.length > 4) {
            vm.productos[4].title = "Garrett GTX3582R";
            vm.productos[4].price = 1899.99;
            vm.productos[4].category = "Turbos";
            vm.productos[4].image = "assets/img/garrett.jpg";
            vm.productos[4].description =
              "Turbo Garrett GTX3582R para agregar mas potencia a tu proyecto de manera segura y eficiente";
          }

          if (vm.productos.length > 5) {
            vm.productos[5].title = "HKS GTIII-RS";
            vm.productos[5].price = 1599.99;
            vm.productos[5].category = "Turbos";
            vm.productos[5].image = "assets/img/hks.jpg";
            vm.productos[5].description =
              "Turbo HKS GTIII-RS para agregar mas potencia a tu proyecto de manera segura y eficiente";
          }

          if (vm.productos.length > 6) {
            vm.productos[6].title = "Whipple Supercharger";
            vm.productos[6].price = 4200.0;
            vm.productos[6].category = "Supercargadores";
            vm.productos[6].image = "assets/img/whipple.jpg";
            vm.productos[6].description =
              "Supercargador Marca Whipple para agregar mas potencia a tu proyecto de manera segura y eficiente";
          }

          if (vm.productos.length > 7) {
            vm.productos[7].title = "Edelbrock E-Force";
            vm.productos[7].price = 3899.99;
            vm.productos[7].category = "Supercargadores";
            vm.productos[7].image = "assets/img/super.jpg";
            vm.productos[7].description =
              "Supercargador Edelbrock E-Force de alto flujo que incrementa significativamente la potencia.";
          }

          if (vm.productos.length > 8) {
            vm.productos[8].title = "Volk Racing TE37";
            vm.productos[8].price = 3200.0;
            vm.productos[8].category = "Rines";
            vm.productos[8].image = "assets/img/te37.jpg";
            vm.productos[8].description =
              "Rines Volk Racing TE37 para demostrar tu estilo en cada rueda";
          }

          if (vm.productos.length > 9) {
            vm.productos[9].title = "BBS LM";
            vm.productos[9].price = 4500.0;
            vm.productos[9].category = "Rines";
            vm.productos[9].image = "assets/img/bbs.jpg";
            vm.productos[9].description =
              "Rines BBS LM para demostrar tu estilo en cada rueda";
          }

          if (vm.productos.length > 10) {
            vm.productos[10].title = "Work Emotion CR Kai";
            vm.productos[10].price = 2100.0;
            vm.productos[10].category = "Rines";
            vm.productos[10].image = "assets/img/kai.jpg";
            vm.productos[10].description =
              "Rines Work Emotion CR Kai para demostrar tu estilo en cada rueda de tu proyecto";
          }

          if (vm.productos.length > 11) {
            vm.productos[11].title = "Advan Racing RG-D2";
            vm.productos[11].price = 2800.0;
            vm.productos[11].category = "Rines";
            vm.productos[11].image = "assets/img/race.jpg";
            vm.productos[11].description =
              "Rines Advan Racing RG-D2 para demostrar tu estilo en cada rueda de tu proyecto";
          }

          if (vm.productos.length > 12) {
            vm.productos[12].title = "Short Throw Shifter";
            vm.productos[12].price = 180.0;
            vm.productos[12].category = "Interior";
            vm.productos[12].image = "assets/img/short.jpg";
            vm.productos[12].description =
              "Short Shifter de recorrido corto que reduce la distancia entre cambios, ofreciendo una conducción más deportiva, rápida y precisa.";
          }

          if (vm.productos.length > 13) {
            vm.productos[13].title = "Front Mount Intercooler";
            vm.productos[13].price = 450.0;
            vm.productos[13].category = "Performance";
            vm.productos[13].image = "assets/img/inter.jpg";
            vm.productos[13].description =
              "Intercooler de alto rendimiento diseñado para reducir la temperatura del aire comprimido por el turbo, mejorando la potencia, eficiencia y confiabilidad del motor.";
          }

          if (vm.productos.length > 14) {
            vm.productos[14].title = "Cold Air Intake";
            vm.productos[14].price = 240.0;
            vm.productos[14].category = "Performance";
            vm.productos[14].image = "assets/img/cold.jpg";
            vm.productos[14].description =
              "Cold Air Intake de alto rendimiento diseñado para reducir la temperatura del aire comprimido por el turbo, mejorando la potencia, eficiencia y confiabilidad del motor.";
          }

          if (vm.productos.length > 15) {
            vm.productos[15].title = "Defi Boost Gauges";
            vm.productos[15].price = 450.0;
            vm.productos[15].category = "Electronica";
            vm.productos[15].image = "assets/img/boost.jpg";
            vm.productos[15].description =
              "Medidor de presión Boost diseñado para monitorear en tiempo real la presión generada por el sistema turbo, permitiendo un control preciso del rendimiento del motor.";
          }

          if (vm.productos.length > 16) {
            vm.productos[16].title = "Carbon Aero Canards";
            vm.productos[16].price = 180.0;
            vm.productos[16].category = "Exterior";
            vm.productos[16].image = "assets/img/carbon.jpg";
            vm.productos[16].description =
              "Accesorio exterior para mejorar la estética y aerodinámica del vehículo";
          }

          if (vm.productos.length > 17) {
            vm.productos[17].title = "Rocket Bunny Widebody Kit";
            vm.productos[17].price = 4600.0;
            vm.productos[17].category = "Exterior";
            vm.productos[17].image = "assets/img/wide.jpg";
            vm.productos[17].description =
              "Accesorio exterior para mejorar la estética y aerodinámica del vehículo";
          }

          if (vm.productos.length > 18) {
            vm.productos[18].title = "Sequential LED Front Lights";
            vm.productos[18].price = 650.0;
            vm.productos[18].category = "Exterior";
            vm.productos[18].image = "assets/img/angel.jpg";
            vm.productos[18].description =
              "Accesorio exterior para mejorar la estética y aerodinámica del vehículo";
          }

          if (vm.productos.length > 19) {
            vm.productos[19].title = "Carbon Rear Diffuser";
            vm.productos[19].price = 530.0;
            vm.productos[19].category = "Exterior";
            vm.productos[19].image = "assets/img/difu.jpg";
            vm.productos[19].description =
              "Accesorio exterior para mejorar la estética y aerodinámica del vehículo";
          }

          // Llenar el dropdown de categorías
          vm.categorias = [
            ...new Set(
              vm.productos.map(function (producto) {
                return producto.category;
              }),
            ),
          ];

          console.log("Productos cargados correctamente");
        })
        .catch(function (error) {
          console.error("Error al obtener productos:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudieron cargar los productos",
          });
        });
    };

    // Función mejorada para agregar al carrito con SweetAlert
    vm.agregarAlCarrito = function (producto) {
      vm.carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(vm.carrito));
      vm.calcularTotal();

      // SweetAlert de confirmación
      Swal.fire({
        icon: "success",
        title: "¡Agregado al carrito!",
        text: `${producto.title} ha sido agregado correctamente`,
        showConfirmButton: false,
        timer: 1500,
        position: "top-end",
        toast: true,
      });
    };

    // Nueva función para eliminar producto del carrito con SweetAlert
    vm.eliminarDelCarrito = function (index) {
      const productoEliminado = vm.carrito[index];

      Swal.fire({
        title: "¿Eliminar producto?",
        text: `¿Estás seguro de eliminar "${productoEliminado.title}" del carrito?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          vm.carrito.splice(index, 1);
          localStorage.setItem("carrito", JSON.stringify(vm.carrito));
          vm.calcularTotal();

          Swal.fire({
            icon: "success",
            title: "¡Eliminado!",
            text: "El producto ha sido eliminado del carrito",
            showConfirmButton: false,
            timer: 1500,
            position: "top-end",
            toast: true,
          });
        }
      });
    };

    vm.calcularTotal = function () {
      vm.totalCarrito = 0;
      vm.carrito.forEach(function (producto) {
        vm.totalCarrito += producto.price;
      });
    };

    vm.cargarCarrito = function () {
      var carritoGuardado = localStorage.getItem("carrito");
      if (carritoGuardado) {
        vm.carrito = JSON.parse(carritoGuardado);
        vm.calcularTotal();
      }
    };

    // Función de pago mejorada con SweetAlert
    vm.pagar = function () {
      if (vm.carrito.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "Carrito vacío",
          text: "No tienes productos en el carrito para pagar",
          confirmButtonText: "Entendido",
        });
        return;
      }

      const total = vm.totalCarrito;
      const cantidadProductos = vm.carrito.length;

      Swal.fire({
        title: "¿Confirmar compra?",
        html: `Vas a comprar <strong>${cantidadProductos}</strong> productos por un total de <strong>$${total.toFixed(2)}</strong><br><br>¿Deseas continuar?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, pagar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          vm.carrito = [];
          vm.totalCarrito = 0;
          localStorage.removeItem("carrito");

          Swal.fire({
            icon: "success",
            title: "¡Pago realizado!",
            text: "Tu compra se ha procesado correctamente",
            confirmButtonText: "¡Gracias!",
          });
        }
      });
    };

    vm.obtenerProductos();
    vm.cargarCarrito();
  },
]);
