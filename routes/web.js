import express from "express"
import * as publicController from "../controller/publicController.js"



const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})


// web.get('/:username{/:bio}', publicController.publicProfile)

web.get('/:nama', publicController.nama)

export default web
