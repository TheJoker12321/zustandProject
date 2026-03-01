import express from 'express'
import fs from 'fs'

const products = express.Router()


products.get('/', async (req, res) => {

    const result = JSON.parse(await fs.promises.readFile('data/products.json', 'utf-8'))

    res.status(200).json({

        result,

    })    
})

export default products