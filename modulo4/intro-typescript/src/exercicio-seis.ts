function operation(num1: number, num2: number): void {
    const add: number = num1 + num2
    const subtract: number = num1 - num2
    const multiply: number = num1 * num2
    let biggerNumber: number
    if (num1 < num2) {
        biggerNumber = num2
    } else {
        biggerNumber = num1
    }
    console.log(`Soma: ${add}, Subtração: ${subtract}, Multiplicação: ${multiply}, Maior número: ${biggerNumber}`)
}

operation(2, 5)