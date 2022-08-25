import{addMovementRows} from './movements.helpers';
import {getAccountMovement} from './movements.api';
import {mapMovementListFromApiToViewModel} from './movements.mapper';
import {onSetValues} from '../../common/helpers';
import {history} from '../../core/router';
import {getAccount} from '../account/account.api'
import { mapAccountFromApiToViewModel} from '../account/account.mapper';

const params = history.getParams();
console.log(params)
getAccountMovement(params.id).then((movement) => {
  const data = mapMovementListFromApiToViewModel(movement)
  addMovementRows(data)
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account)
  })
})



