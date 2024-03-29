import {getProperty, getEquipment, isValidContact} from './property-detail.api';
import {history} from '../../core/router';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyFromApiToVM } from './property-detail.mappers';
import { getEquipment } from '../../common/api/common.api';
import { formValidation } from './property-detail.validations';
import {
    onUpdateField,
    onSetError,
    onSubmitForm,
    onSetFormErrors
} from '../../common/helpers';

const params = history.getParams();

Promise.all([
  getProperty(params.id),
  getEquipment(),
]).then(([propertyList, equipmentList]) => {
  loadProperty(propertyList, equipmentList);
});

const loadProperty = (propertyList, equipmentList) => {
  const vMProperties = mapPropertyFromApiToVM(propertyList, equipmentList);

  setPropertyValues(vMProperties);
}

let property = {
  id: '',
  mainImage: '',
  title: '',
  city: '',
  rooms: '',
  squareMeter: '',
  price: '',
  bathrooms: '',
  notes: '',
  mainFeatures: '',
  equipments: '',
  locationUrl: '',
  images: '',
};

let form = {
  email: '',
  message: '',
}


onUpdateField('email', (event) => {
  const value = event.target.value;

  form = {
      ...form,
      email: value
  };

  formValidation.validateField('email', form.email).then(result => {
      onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;

  form = {
      ...form,
      message: value
  };

  formValidation.validateField('message', form.message).then(result => {
      onSetError('message', result);
  });
});

const resetForm = () => {
  const form = document.getElementsByClassName('form-detalle-propiedad');

  form[0].reset();
};

const onNavigate = (isValid) => {
  if (isValid) {
      alert('Solicitud de contacto realizada correctamente');
  } else {
      alert('Error al enviar la solicitud de contacto');
  }
};

onSubmitForm('contact-button', ()=> {
  formValidation.validateForm(form).then(result => {
      onSetFormErrors(result);
      if (result.succeeded) {
          isValidContact(form).then(isValid => {
              onNavigate(isValid);
              resetForm();
          });
      }
  });
});
