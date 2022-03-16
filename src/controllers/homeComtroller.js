import db from '../models/index'

class HomeController {
    // GET /
    async getHomePage(req, res) {
        const data = await db.User.findAll({
            raw: true
        })
        res.render('home.ejs', {
            message: "Home nha",
            data: data
        })
    }
}

module.exports = new HomeController()