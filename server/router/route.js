// endpoints

import { Router } from "express";
const router = Router();

// IMPORT ALL CONTROLLER

import * as controller from '../controllers/appController.js'

// post method
router.route('/register').post(controller.register);
// router.route('/registerMail').post(); //send the email
router.route('/authenticate').post((req, res) => res.end()); //authenticate user
router.route('/login').post(controller.login); //login in web app


// get method
router.route('/user/:username').get(controller.getUser); //user with username
router.route('/generateOTP').get(controller.generateOTP); //generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP); // verify generate OTP
router.route('/createResetSession').get(controller.createResetSession); //reset all the variables

// delete method
router.route('/updateuser').put(controller.updateUser); //is use to update the user profile
router.route('/resetPassword').put(controller.resetPassword); //use to reset password


export default router;