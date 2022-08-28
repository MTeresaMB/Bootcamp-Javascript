import { Validators, createFormValidation } from '@lemoncode/fonk';
import { ibanValidator } from './transfer.customValidator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.email,
        message: 'Email no valido',
      },
    ],
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: ibanValidator,
        customArgs: {
          countryCode: 'ES',
        },
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Introduzca una cantidad numérica positiva',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([1-9]|[1-2]\d|3[01])$/ },
        message: 'Introduzca un día válido',
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([1-9]|1[012])$/ },
        message: 'Introduzca un mes válido',
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^2[0-9][2-9](\d{1})$/ },
        message: 'Introduzca un año válido',
      },
    ],
    date: [
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'Fecha no válida',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
