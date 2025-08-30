import { Router } from "express";
import {CidadesController} from './../controllers';

const router = Router();

router.post('/cidades',CidadesController.create);

router.post('/test', (req, res)=>{
    return res.json(req.body);
});


export {router};
