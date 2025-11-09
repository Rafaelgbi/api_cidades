import { Router } from "express";
import {CidadesController} from './../controllers';

const router = Router();

router.post('/cidades',CidadesController.creatValidation ,CidadesController.create);
router.get('/cidades',CidadesController.getAllValidation,CidadesController.getAll);
router.get('/cidades/:id',CidadesController.getByIdValidation,CidadesController.getById);
router.put('/cidades/:id',CidadesController.updateByIdValidation,CidadesController.updateById);
router.delete('/cidades/:id',CidadesController.deleteByIdValidation,CidadesController.deleteById);


router.post('/test', (req, res)=>{
    return res.json(req.body);
});


export {router};
