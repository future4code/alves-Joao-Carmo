function reverseString(str: string): string{
    let reversedString:string = "";
    for (let i:number = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseString('abcd'))