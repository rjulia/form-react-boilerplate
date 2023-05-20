/* eslint-disable no-prototype-builtins */
import * as Yup from 'yup';
import {
  validationType,
} from '../../components/form/form/type'

const validationFromObject = (validationObject:validationType) => {
  const schema = {} as validationType;


  for (const key in validationObject) {
    if (validationObject.hasOwnProperty(key)) {
      const rules = validationObject[key];

      let fieldSchema;
      if (rules.required) {
        fieldSchema = Yup.string().required(`${key} is required`);
      }
      if (rules.maxLength) {
        fieldSchema = Yup.string().max(rules.maxLength, `${key} must be at most ${rules.maxLength} characters`);
      }
      if (rules.minLength) {
        fieldSchema = Yup.string().min(rules.minLength, `${key} must be at least ${rules.minLength} characters`);
      }
      if(rules.email) {
        fieldSchema= Yup.string().email(`${key} must be a valid email`);
      }
      schema[key] = fieldSchema ;
    }
  }

  return Yup.object().shape(schema);
};

export default validationFromObject;