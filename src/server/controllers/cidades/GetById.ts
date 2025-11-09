import { Request, Response } from "express";
import * as yup from 'yup';

import { validation } from "../../shared/middlewares";

interface iParamsProps {
    id?: number;
};

export const getByIdValidation = validation((getSchema)=>({
    params: getSchema<iParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));

export const getById = async (req: Request<iParamsProps>, res: Response)=>{
    console.log(req.params);

    return res.status(500).send('Não implementado!');
};


