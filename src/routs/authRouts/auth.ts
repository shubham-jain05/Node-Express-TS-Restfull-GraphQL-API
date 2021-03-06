import express from "express";
import {
  signIn,
  signUp,
  signOut,
  sendResetPassowrdLink,
  resetPassowrd,
} from "../../controllers/authController/authControler";
import {
  userSignupValidator,
  userSignInValidator,
} from "../../configuration/validator/authValidation";
import { runValidation } from "../../configuration/validator/validator_index";

const router = express.Router();

router.post("/signIn", userSignInValidator, runValidation, signIn);
router.post("/signUp", userSignupValidator, runValidation, signUp);
router.post("/sendResetPassowrdLink", sendResetPassowrdLink);
router.post("/resetPassword/:token", resetPassowrd);
router.post("/signOut", signOut);

export default router;
