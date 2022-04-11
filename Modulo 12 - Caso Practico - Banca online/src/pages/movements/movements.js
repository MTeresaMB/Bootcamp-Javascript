import {addMovementRows} from './movements.helpers';
import {getMovementList} from './movements.api';
import {mapMovementsListApiToViewModel, mapMovementsFromApiToViewModel} from './movements.mapper';
import {getAccountList} from '../account-list/account-list.api';
import {getAccount} from '../account/account.api';
import {mapAccountFromApiToViewModel} from '../account/account.mappers';
import {history} from '../../core/router/history';
import {onSetValues} from '../../common/helpers/element.helpers'

const params = history.getParams();

getMovementList().then( movement =>{
  addMovementRows(movement)
})

const isEditMode = Boolean(params.id);
if(isEditMode){
  console.log(params.id);
  getAccount(params.id).then(apiAccount =>{
    account = mapAccountFromApiToViewModel(apiAccount)
    onSetValues(account);
  })
}

getAccountList(params.id).then(data => {
  if(params.id){
    const account = data.filter(el => el.id === params.id);
    const balance = document.getElementById('balance');
    const iban = document.getElementById('iban');
    const name = document.getElementById('alias');
    balance.innerText = `${account[0].balance} €`;
    iban.innerText = account[0].iban;
    name.innerText = account[0].name;
  }else{
    document.querySelector('.subtitulo_paginas').style.visibility = 'hidden';
    document.querySelector('.saldo_disponible').style.visibility = 'hidden';
    document.querySelector('.iban').style.visibility = 'hidden';
  }
});

getMovementList().then(movementList => {
  if(params.id) {
    let listById = [];
    movementList.forEach(el => {
      if(el.accountId === params.id) {
        listById.push(el);
      }
    });
    addMovementRows(mapMovementsListApiToViewModel(listById));
  }else{
    addMovementRows(mapMovementsListApiToViewModel(movementList))
  }
})

