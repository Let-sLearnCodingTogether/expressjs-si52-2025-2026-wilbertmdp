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

export const privateProfile = async (req, res) => {
    try{
        const user = req.user;

        res.status(200).json({
            message : "Private profile berhasil di akses",
            data : user,
        })
    }catch (error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}