import express from "express"
import * as publicController from "../controller/publicController.js"



const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})


web.get('/:username', publicController.publicProfile)

web.get('/profile{/:nama}', publicController.nama)

export default web
