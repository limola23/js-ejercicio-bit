let n = prompt("Ingresa número de posiciones");
for (let i = 1; i <= n; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "# ";
    }
    console.log(fila);
}