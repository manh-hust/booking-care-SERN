class HomeController {
    getHomePage(req, res) {
        res.render('home.ejs')
    }
}

module.exports = new HomeController()