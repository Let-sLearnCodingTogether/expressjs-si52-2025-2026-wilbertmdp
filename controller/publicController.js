export const publicProfile = (req, res) => {
    const username = req.params.username ?? 'tanpa title'
    res.render('public-profile', {
        username : `${username}`,
        bio : "Bio Wilbert Anderson"
    })
}

export const nama = (req, res) => {
    const nama = req.params.nama ?? 'tanpa title'
    res.render('tampilnama', {
        nama : `${nama}`
    })
}