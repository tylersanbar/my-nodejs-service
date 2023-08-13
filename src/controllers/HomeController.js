exports.index = (req, res) => {
    res.render('home', { 
        pageTitle: 'Home',
        viewCss: '/css/home.css' 
    });
}