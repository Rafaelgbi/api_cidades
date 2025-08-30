import { setLocale } from 'yup';

setLocale({
    mixed: {
        required: 'Este campo é obrigatorio',
        notType: 'Formato digitado invalido',
        defined: 'Este campo precisa ter valor definido',
        oneOf: 'Deve ser um dos seguintes valores: ${values}',
        notOneOf: 'Não pode ser um dos seguintes valores: ${values}',
    },
    string: {
        lowercase: 'Deve estar em maiúsculo',
        uppercase: 'Deve estar em minúsculo',
        url: 'Deve ter um formato de URL válida',
        max: 'Deve ter no maximo ${max} caracteres',
        min: 'Deve ter no minimo ${min} caracteres',
        email: 'Formato de e-mail digitado não é valido',
        length: 'Deve ter exatamente ${lenght} caracteres',
        uuid: 'Valor digitado não confere a um UUID valido',
        trim: 'Não deve conter espaços no inicio ou no fim.',
        matches: 'O valor deve corresponder ao padrão: ${regex}',
    },
    number: {
        min: 'Deve ser no minimo ${min}',
        max: 'Deve ser no maximo ${max}',
        integer: 'Deve ser um numero inteiro',
        lessThan: 'Deve ser menor que ${less}',
        moreThan: 'Deve ser maior que ${more}',
        positive: 'Deve ser um numero positivo',
        negative: 'Deve ser um numero negativo'
    },
    date: {
        min: 'Deve ser maior que a data ${min}',
        max: 'Deve ser menor que a data ${max}',
    },
    array: {
        min: 'Deve ter no mínimo ${min} itens',
        max: 'Deve ter no maximo ${max} itens',
        length: 'deve conter exatamente ${length} intens',
    },
    object: {
        noUnknown: 'Deve ser passado um valor definido',
    }
});