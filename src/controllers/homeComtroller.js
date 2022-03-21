import db from '../models/index'

class HomeController {
    // GET /
    async getHomePage(req, res) {
        const data = await db.User.findAll({
            raw: true
        })
        res.send({
            data
        })
    }
}

module.exports = new HomeController()