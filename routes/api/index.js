import express from "express";
import user from "./auth/users";
import members from "./members/members";
import offerings from "./offerings/offerings";

const router = express.Router();

router.use("/users", user);
router.use("/members", members);
router.use("/offerings", offerings);
router.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce((errors, key) => {
        errors[key] = err.errors[key].message;
        return errors;
      }, {})
    });
  }
  return next(err);
});

export default router;
