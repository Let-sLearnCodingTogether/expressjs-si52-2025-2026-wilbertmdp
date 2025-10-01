
export const register = async (req, res) => {
    try {
        res.status(500).json({
            message : "berhasil register, silahkan login",
            data : null
        })
    } catch(e){
        res.status(500).json({
            message : e.message,
            data : null
        })
    }
}