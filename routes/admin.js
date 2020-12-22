var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin')

router.get('/', adminController.adminSite)

router.route('/postEvent')
    .get(adminController.getEvent)
    .post(adminController.postEvent)

router.route('/postEducation')
    .get(adminController.getEducation)
    .post(adminController.postEducation)

router.route('/postProject')
    .get(adminController.getProject)
    .post(adminController.postProject)

router.route('/postProfessionalExpress')
    .get(adminController.getProfessionalExperience)
    .post(adminController.postProfessionalExperience)

router.route('/postPostfolio')
    .get(adminController.getPortfolio)

router.get('/manager', adminController.getManager)

module.exports = router;
