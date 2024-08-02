// const pagesModel = require('../models/pagesModel')

function showMainPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/index.ejs')
}

function showStorePage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/store.ejs')
}

module.exports = {
    showMainPage,
    showStorePage,
}