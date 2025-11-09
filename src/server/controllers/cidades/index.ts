import * as create  from './Creat';
import * as getAll from './getAll';
import * as getById from './GetById';
import * as updateById from './updateById';
import * as deleteById from './DeleteById';


export const CidadesController = {
    ...create,
    ...getAll,
    ...getById,
    ...updateById,
    ...deleteById,
};