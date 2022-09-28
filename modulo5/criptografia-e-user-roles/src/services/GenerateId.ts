import { v4 } from "uuid"

// Utiliza no signup e endpoints de criação de recursos

class GenerateId {

    createId(): string {
        return v4();
    }
}

export default GenerateId

