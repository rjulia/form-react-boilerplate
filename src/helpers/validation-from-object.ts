/* eslint-disable no-prototype-builtins */
import * as Yup from 'yup';
import {
  validationType,
} from '../components/form/form/type'
interface ValidationMap {
  [key: string]: () => Yup.Maybe<any>;
}

const validationMap: ValidationMap = {
  string: () => Yup.string(),
  number: () => Yup.number(),
  date: () => Yup.date(),
  boolean: () => Yup.boolean(),
  array: () => Yup.array(),
  object: () => Yup.object(),
  mixed: () => Yup.mixed(),
  // add more mappings as needed
};

const validationFromObject = (validationObject:validationType) => {
  const schema = {} as validationType;


  for (const key in validationObject) {
    if (validationObject.hasOwnProperty(key)) {
      const rules: validationType = validationObject[key];
      if (rules.type) {
        let fieldSchema = validationMap[rules.type]?.()
        if (rules.required) {
          fieldSchema = fieldSchema.required(rules.message || `${key} is required`);
        }
        if (rules.max) {

          fieldSchema = fieldSchema.max(rules.max, `${key} must be at most ${rules.max} characters`);
        }
        if (rules.min) {
          fieldSchema = fieldSchema.min(rules.min, `${key} must be at least ${rules.min} characters`);
        }
        if(rules.email) {
          fieldSchema= fieldSchema.email(`${key} must be a valid email`);
        }
        if(rules.type === 'array') {
          fieldSchema = fieldSchema.of(validationFromObject(rules.of))
        }
        if(rules.type === 'object') {
          fieldSchema = fieldSchema.shape(validationFromObject(rules.shape))
        }

        if(rules.matches) {
          fieldSchema = fieldSchema.matches(rules.matches.regex, rules.matches.message)
        }

        if(rules.oneOf) {
          fieldSchema = fieldSchema.oneOf(rules.oneOf)
        }
        if(rules.notOneOf) {
          fieldSchema = fieldSchema.notOneOf(rules.notOneOf)
        }

        if(rules.defined) {
          fieldSchema = fieldSchema.defined()
        }

        schema[key] = fieldSchema ;
      }
    }
  }

  return Yup.object().shape(schema);
};

export default validationFromObject;