import { Request, Response } from "express";
import * as yup from 'yup';

import { validation } from "../../shared/middlewares";

interface iCidades {
    nome: string;
};

export const creatValidation = validation((getSchema)=>({
    body: getSchema<iCidades>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
}));

export const create = async (req: Request<{},{}, iCidades>, res: Response)=>{
    console.log(req.body);

    return res.status(500).send('Não implementado!');
};


