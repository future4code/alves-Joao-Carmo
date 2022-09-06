// Herança
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const user1 = new User("1", "teste@teste.com", "nometeste", "senhateste")
console.log(user1.getId(), user1.getEmail(), user1.getName())

// 1 a) Não é possivel acessar a senha do user1 pois não existe um getter para ela.
// 1 b) Apenas 1 vez

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer1 = new Customer("2", "teste2@teste.com", "nometeste2", "senhateste2", "cartao")
console.log(customer1.getId(), customer1.getEmail(), customer1.getName(), customer1.getCreditCard(), customer1.purchaseTotal)

// 2 a) Apenas 1 vez
// 2 b) Apenas 1 vez
// 3) Não é possivel imprimir a senha pois ainda não existe um getter para acessá-la.
// 4)
console.log(customer1.introduceYourself())

// Polimorfismo

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "teste",
    registrationNumber: 1,
    consumedEnergy: 10,
    calculateBill: () => {
        return 2
    }
}

// 1 a) Todas as propriedades.
console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// 2 a) Cannot create an instance of an abstract class.
// const place = new Place("cpfteste");
// 2 b) Ela será instanciada através de classes filhas.
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const residence = new Residence(5, "cep1")
const commerce = new Commerce(10, "cep2")
const industry = new Industry(2, "cep3")
console.log(residence.getCep(), commerce.getCep(), industry.getCep())


// 4 a) A classe possui os métodos e propriedades presentes na interface Client e na Classe pai Residence.
class ResidentialClient extends Residence implements Client {
    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        cep: string,
        residentsQuantity: number,
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return 0.75 * this.consumedEnergy
    }
}

// 5 a) Ambas são da mesma interface, então tem name, registrationNumber, consumedEnergy e calculateBill(), além do CEP herdado da classe Place.
// 5 b) São filhas de classes diferentes. Uma tem cpf a outra cnpj, uma tem residentsQuantity a outra floorsQuantity, além da tarifa diferenciada.

class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        cep: string,
        floorsQuantity: number,
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj
    }

    public calculateBill(): number {
        return 0.53 * this.consumedEnergy
    }
}

// 6 

class IndustrialClient extends Industry implements Client {
    constructor(
        private industrialRegs: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        cep: string,
        machinesQuantity: number,
    ) {
        super(machinesQuantity, cep)
    }

    public getindustrialRegs(): string {
        return this.industrialRegs
    }

    public calculateBill(): number {
        return (0.45 * this.consumedEnergy) + (100 * this.machinesQuantity)
    }
}


