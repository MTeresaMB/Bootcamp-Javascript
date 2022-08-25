import {history} from '../../core/router';
import {setAccountOptions} from './transfer.helpers';
import {mapTransferFromWiewModelToApi} from './transfer.mapper'
import {getAccountList} from '../account-list/account-list.api';
import {onUpdateField, onSubmitForm, onSetError, onSetFormErrors} from '../../common/helpers';
import {formValidation} from './transfer.validations'
import {insertTransfer} from './transfer.api';

let transfer = {
  email: '',
  iban: '',
  name: '',
  amount:'',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  date: '',
}

getAccountList().then(accountList => {
  const params = history.getParams();
  const account = accountList;
  setAccountOptions(account, params.id)

})

onUpdateField('email', (event) =>{
  const value = event.target.value;
  transfer = {...transfer,email: value,};
  formValidation.validateField('email', transfer.email).then(result =>{
    onSetError('email', result);
  })
});

onUpdateField('iban', (event) =>{
  const value = event.target.value;
  transfer = {...transfer,iban: value,};
  formValidation.validateField('iban', transfer.iban).then(result =>{
    onSetError('iban', result);
  })
});

onUpdateField('name', (event) =>{
  const value = event.target.value;
  transfer = {...transfer,name: value,};
  formValidation.validateField('name', transfer.name).then(result =>{
    onSetError('name', result);
  })
});

onUpdateField('amount', (event) =>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };
  formValidation.validateField('amount', transfer.amount).then(result =>{
    onSetError('amount', result);
  })
});

onUpdateField('concept', (event) =>{
  const value = event.target.value;
  transfer = {...transfer,concept: value,};
  formValidation.validateField('concept', transfer.concept).then(result =>{
    onSetError('concept', result);
  })
});

onUpdateField('notes', (event) =>{
  const value = event.target.value;
  transfer = {...transfer, notes: value,};
  formValidation.validateField('notes', transfer.notes).then(result =>{
    onSetError('notes', result);
  })
});

onUpdateField('day', (event) =>{
  const value = event.target.value;
  transfer = {...transfer, day: value, date:`${transfer.year}-${transfer.month}-${value}`};
  formValidation.validateField('day', transfer.day).then(result =>{
    onSetError('day', result);
  })
});

onUpdateField('month', (event) =>{
  const value = event.target.value;
  transfer = {...transfer, month: value, date:`${transfer.year}-${value}-${transfer.day}`};
  formValidation.validateField('month', transfer.month).then(result =>{
    onSetError('month', result);
  })
});

onUpdateField('year', (event) =>{
  const value = event.target.value;
  transfer = {...transfer, year: value, date:`${value}-${transfer.month}-${transfer.day}`};
  formValidation.validateField('year', transfer.year).then(result =>{
    onSetError('year', result);
  })
});

onSubmitForm('transfer-button', () =>{
  formValidation.validateForm(transfer).then(result =>{
    onSetFormErrors(result);
    const apiTransfer = mapTransferFromWiewModelToApi(transfer);
    insertTransfer(apiTransfer).then(() =>{history.back()});
    // console.log(result);
    // console.log(transfer);
  })
})
