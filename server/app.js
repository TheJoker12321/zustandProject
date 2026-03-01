import products from "./routes/getData.js";
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
// app.use(express.json()) // if u want to add post route.
app.use('/get/products', products)


app.listen(3000, () => {

    console.log('Am Israel Hai');
    
})