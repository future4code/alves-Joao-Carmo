import app from "./app"
import { createUser } from "./endpoints/createUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAllProducts} from "./endpoints/getAllProducts"
import { createProduct } from "./endpoints/createProduct"
import { createPurchase } from "./endpoints/createPurchase"
import { getUserPurchases } from "./endpoints/getUserPurchases"

app.get("/users", getAllUsers);
app.get("/products", getAllProducts);
app.get("/users/:user_id/purchases", getUserPurchases)
app.post("/users", createUser);
app.post("/products", createProduct)
app.post("/purchases", createPurchase)