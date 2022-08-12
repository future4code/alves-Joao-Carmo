type usuario = {
    name: string,
    email: string,
    role: string
}

const usuarios: usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornaAdmins(array: usuario[]): string[] {
    const admins = array.filter((item) => {
        return item.role === "admin"
    }).map((item) => {
        return item.email
    })
    return admins
}

console.log(retornaAdmins(usuarios))