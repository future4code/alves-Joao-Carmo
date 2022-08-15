function checaTriangulo(a: number, b: number, c: number): void {
    if (a !== b && b !== c) {
        return console.log('Escaleno')
    } else if ( a=== b && b === c) {
        return console.log('Equilátero')
    } else {
        return console.log('Isósceles')
    }
}

console.log(checaTriangulo(2, 2, 2))