import { Request, Response } from "express";
import * as yup from 'yup';

const bodyValidation = yup.object({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(5),
});

type ICidades = yup.InferType<typeof bodyValidation>;

export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {
    let validatedData: ICidades | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body, { abortEarly: false });

    } catch (err) {
        const yupError = err as yup.ValidationError;

        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (error.path === undefined) return;

            errors[error.path] = error.message;
        });

        return res.status(400).json({
            errors: {
                default: errors,
            }
        });
    }
    console.log(validatedData);

    return res.send('Create!');
};