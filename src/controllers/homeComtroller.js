class HomeController {
    getHomePage(req, res) {
        res.render('home.ejs', {
            message: "Home nha"
        })
    }
}

module.exports = new HomeController()