// const pagesModel = require('../models/pagesModel')

function showMainPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/index.ejs')
}


module.exports = {
    showMainPage,
}