const eventModels = require('../models/event')
const educationModels = require('../models/education')
const portfolioModels = require('../models/portfolio')
const ProfessionalExperienceModels = require('../models/ProfessionalExperience')
const projectModels = require('../models/project')

const adminSite = async (req, res, next) => {
    res.render('admin/admin')
}

const getEvent = async (req, res, next) => {
    res.render('admin/postEvent')
}

const postEvent = async (req, res, next) => {
    console.log(req.body)
    const { title, detail } = req.body
    const newPostEvent = {
        title : title,
        detail : detail
    }

    const eventPost = new eventModels(newPostEvent)
    eventPost.save()

    res.redirect('/admin')
}

const getEducation = async (req, res, next) => {
    res.render('admin/postEducation')
}

const postEducation = async (req, res, next) => {
    console.log(req.body)
    const { title, detail } = req.body
    const newPostEvent = {
        title : title,
        detail : detail
    }

    const eventPost = new educationModels(newPostEvent)
    eventPost.save()

    res.redirect('/admin')
}

const getProfessionalExperience = async (req, res, next) => {
    res.render('admin/ProfessionalExperience')
}

const postProfessionalExperience = async (req, res, next) => {
    const { title, detail } = req.body
    const newPostEvent = {
        title : title,
        detail : detail
    }

    const eventPost = new ProfessionalExperienceModels(newPostEvent)
    eventPost.save()

    res.redirect('/admin')
}

const getProject = async(req, res, next) => {
    res.render('admin/project')
}

const postProject = async (req, res, next) => {
    const { title, detail } = req.body
    const newPostEvent = {
        title : title,
        detail : detail
    }

    const eventPost = new projectModels(newPostEvent)
    eventPost.save()

    res.redirect('/admin')
}

const getPortfolio = async (req, res, next) => {
    res.render('admin/portfolio')
}

const getManager = async (req, res, next) => {
    const event = await eventModels.find().lean()
    const education = await educationModels.find().lean()
    const ProfessionalExperience = await ProfessionalExperienceModels.find().lean()
    const project = await projectModels.find().lean()
    res.render('admin/manager', { event : event, education : education, ProfessionalExperience : ProfessionalExperience, project : project})
}

module.exports = {
    adminSite,
    getEvent,
    postEvent,
    getProfessionalExperience,
    postProfessionalExperience,
    getEducation,
    postEducation,
    getProject,
    postProject,
    getPortfolio,
    getManager
}