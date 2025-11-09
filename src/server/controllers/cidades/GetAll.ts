import { Request, Response } from "express";
import * as yup from 'yup';

import { validation } from "../../shared/middlewares";

interface iQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
};

export const getAllValidation = validation((getSchema)=>({
    query: getSchema<iQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string(),
    })),
}));

export const getAll = async (req: Request<{},{},{},iQueryProps>, res: Response)=>{
    console.log(req.query);

    return res.status(500).send('Não implementado!');
};


