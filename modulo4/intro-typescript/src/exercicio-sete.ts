function rnaTranscription(molecule: string): string {
    let rna:string = ""
    for (let i: number = 0; i < molecule.length; i++) {
        if (molecule[i] === 'G') {
            rna += molecule[i].replace('G', 'C');
        } else if (molecule[i] === 'C') {
            rna += molecule[i].replace('C', 'G');
        } else if (molecule[i] === 'T') {
            rna += molecule[i].replace('T', 'A');
        } else {
            rna += molecule[i].replace('A', 'U');
        }
    }

    return rna
}

console.log(rnaTranscription("ATTGCTGCGCATTAACGACGCGTA"))