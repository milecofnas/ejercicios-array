//---EJERCICIO 1---//
let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 
'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

console.log (playlistFoo [1], playlistFoo[4]) 

//---EJERCICIO 2---//
let bandas = ["Red Hot Chilli Peppers", "The Strokes", "The Artic Monkeys",
"Redondos", "Calamaro", "Nirvana", "Jorja Smith", "Bersuit", "Charly Garcia",
"Twenty One Pilots", "La Vela Puerca"]

let primeraBanda = bandas[0]
let terceraBanda = bandas[2]
let sextaBanda = bandas[5]

console.log(`La banda en primer lugar es:: ${primeraBanda}`)
console.log(`La banda en tercer lugar es: ${terceraBanda}`)
console.log(`La banda en sexto lugar es: ${sextaBanda}`)

//---EJERCICIO 3---//
let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sumaNotas = notas[0] + notas[3] + notas[4] + notas[9]

console.log(sumaNotas)

// ---EJERCICIO 5---//
let alumnas = ["Ada", "Grace", "Radia", "Janie", "Sherly", "Hedy"]

console.log("Indice 0: " + alumnas[0])
console.log("Indice 1: " + alumnas[1])
console.log("Indice 2: " + alumnas[2])
console.log("Indice 3: " + alumnas[3])
console.log("Indice 4: " + alumnas[4])
console.log("Indice 5: " + alumnas[5])

// ---EJERCICIO 8---//
let etiquetasHtml = ["<html>", "<p>", "<br>", "<img>", "<div>", "<span>", "<h1>", "<h2>", 
"<h3>", "<h4>", "<h5>", "<h6>", "<iframe>", "<main>", "<section>", "<aside>"]

console.log(etiquetasHtml[1].toUpperCase())
console.log(etiquetasHtml.length)

// ---EJERCICIO 9---//
let ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 
'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

console.log(ganadorasRupaul.length - 1)
console.log(ganadorasRupaul[0] + ganadorasRupaul[9])

// ---EJERCICIO 10---//
let playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

if (playlistNirvana.length > playlistFoo.length) {
    alert("La playlist de Nirvana tiene más canciones" )
}
else {
    alert("La playlist de Foo tiene más canciones")
}
