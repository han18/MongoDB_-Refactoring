import { Router } from "express";
import Grade from "../models/grades.js";
const router = new Router();

//===== GET Method ========
router.get("/", async (req, res) => {
  const users = await Grade.find({});
  res.status(200).json(users);
});

//=================== GET by ID ===========
router.get("/:id", async (req, res) => {
  const user = await Grade.findById({ _id: req.params.id });

  if (!user) return res.send("ID Not Found").status(404);
  else res.send(user).status(200);
  res.send(203).json(user);
});

//===============================

//==== POST METHOD =========
router.post("/", async (req, res) => {
  const user = await Grade.create(req.body);
  res.status(203).json(user);
});

//========== Patch Method=========

router.patch("/:d/add", async (req, res) => {
  let user = await Grade.findOne({ _id: req.params.id });

  if (!user) return res.send("Score Not Updated");
  user.scores.push(req.body);
  await user.save();
  res.send(user);
});

// ======================= DELETE ========

router.delete("/", async (req, res) => {
  const user = await Grade.deleteOne(req.body);
});

export default router;

// old patch

// router.patch("/:d/add", async (req, res) => {
//   let user = await Grade.findByIdAndUpdate({ _id: req.params.id });

//   if (!user) return res.send("Grade Not found").status(404);
//   user.scores.push(req.body);
//   await user.save();
//   res.send(user);
// });
