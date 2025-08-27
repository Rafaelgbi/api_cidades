import { Router } from "express";

const router = Router();

router.post('/test', (req, res)=>{
    return res.json(req.body);
});


export {router};
