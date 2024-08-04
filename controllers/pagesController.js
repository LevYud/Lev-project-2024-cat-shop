// const pagesModel = require('../models/pagesModel')

function showMainPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/pages/mainPage.ejs')
}

function showStorePage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/pages/storePage.ejs')
}

function showContactPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/pages/contactPage.ejs')
}

function showCartPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/pages/cartPage.ejs')
}

module.exports = {
    showMainPage,
    showContactPage,
    showStorePage,
    showCartPage,
}