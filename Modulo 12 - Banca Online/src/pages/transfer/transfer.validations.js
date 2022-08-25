import {Validators, createFormValidation} from '@lemoncode/fonk'
import { ibanValidator } from './transfer.customValidator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.email,
        message: 'Email no valido'
      }
    ],
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: ibanValidator,
        customArgs:{
          countryCode: 'ES',
        }
      },
    ],
    name:[
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
    ],
    amount:[
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: positiveNumber.validator,
        customArgs: { allowZero: true },
      },
    ],
    concept:[
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
    ],
    notes:[
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
    ],
    date: [
      // {
      //   validator: laterDate.validator,
      //   customArgs:
      //     {
      //       date: new Date(),
      //       parseStringToDateFn: value => new Date(value)
      //     }
      // }
    ],
    day:[
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },

    ],
    month:[
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
    ],
    year:[
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
    ]
  },
};

export const formValidation = createFormValidation(validationSchema);
