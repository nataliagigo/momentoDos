let opcion;
do {
  let consumoEnergia = Number(
    prompt("Ingrese el consumo de la vivienda (en kWh): ")
  );
  let costoEnergia;

  if (consumoEnergia <= 100) {
    costoEnergia = 150 * consumoEnergia;
  } else if (consumoEnergia >= 101 && consumoEnergia <= 300) {
    costoEnergia = 200 * consumoEnergia;
  } else {
    costoEnergia = 250 * consumoEnergia;
  }

  console.log("El consumo de energia fue: " + consumoEnergia);
  console.log("El costo total de energía es: " + costoEnergia);
  console.log("------------------------");

  do {
    opcion = prompt("Desea ingresar otra vivienda? (1. si - 2 .no): ");
  } while (opcion != "1" && opcion != "2");
} while (opcion != "2");
