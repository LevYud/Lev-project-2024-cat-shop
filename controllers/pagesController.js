// const pagesModel = require('../models/pagesModel')

function showMainPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/mainPage.ejs')
}

function showStorePage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/storePage.ejs')
}

function showContactPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/contactPage.ejs')
}

function showCartPage(req,res){
    // const data = pagesModel.getMainPageData()
    // res.render('articles.ejs',  { data })
    res.render('../views/cartPage.ejs')
}

module.exports = {
    showMainPage,
    showContactPage,
    showStorePage,
    showCartPage,
}