import express from "express"

const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})


web.get('/:username{/:bio}', (req, res) => {
    const username = req.params.username ?? 'tanpa title'
    res.render('public-profile', {
        username : `${username}`,
        bio : "Bio Wilbert Anderson"
    })
})

export default web
