import { PingBusiness } from "../../src/business/PingBusiness"

describe("Testing PingBusiness", () => {
    const pingBusiness = new PingBusiness(
        // não possui dependências
    )
    
    test("deve retornar 'Pong!' em caso de sucesso", async () => {
        const response = await pingBusiness.ping()
        expect(response.message).toBe("Pong!")
    })
})