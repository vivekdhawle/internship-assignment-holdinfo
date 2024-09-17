import { Router } from "express";
import { getData, setData } from "../controllers/data.controller.js";

const router=new Router()
router.route("/getdata").get(getData)
router.route("/setdata").get(setData)
export default router