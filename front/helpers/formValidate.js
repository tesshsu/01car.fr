import Select from 'react-select'
import { Form, Field, FieldRenderProps } from 'react-final-form';

//form validation
export const required = value => (value ? undefined : 'champs obligatoire')
export const mustBeNumber = value => (isNaN(value) ? "Doit être en chiffre" : undefined);
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const pattern= new RegExp("(.+ .*)|(.* .+)");
export const matchMarqueModel = value => (!pattern.test(value) ? "Il faut Marque avec model par example CITROEN C4" : undefined);

export const formatDate = value => {
  if (!value) return value;
  return `${value.slice(0, 4)}-${value.slice(5, 7)}-${value.slice(8,10)}`;
}

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const ReactSelectAdapter = ({ input, value, note, ...rest }) => (
  <Select {...input} {...value} {...note} {...rest} searchable />
)

export const Condition = ({ when, is, children }) => (
    <Field component={ReactSelectAdapter} name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
)

export const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true, value: true }}>
    {({ meta: { error, touched, value } }) =>
      error && touched ? <span className="text-orange-500 text-sm">{error}</span> : null
    }
  </Field>
)
