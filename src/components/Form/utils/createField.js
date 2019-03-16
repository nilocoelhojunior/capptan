// @flow
import * as React from 'react';
import { get } from 'lodash';
import { Field } from 'formik';

import type { FieldProps } from 'formik/dist/formik';

export type InjectedFieldProps = {
  value: ?any,
  error: ?string,
  touched: ?boolean,
  setFieldTouched: Function,
  setFieldValue: Function,
};

type Props = {
  name: string,
};

const createField = <T>(Component: React.ComponentType<*>) => (props: Props): React.Node => (
  <Field
    name={props.name}
    render={({ form }: FieldProps) => {
      const value = get(form.values, props.name);
      const error = get(form.errors, props.name);
      const touched = get(form.touched, props.name);

      return (
        <Component
          {...props}
          value={value}
          error={error}
          touched={touched}
          setFieldTouched={form.setFieldTouched}
          setFieldValue={form.setFieldValue}
        />
      );
    }}
  />
);

export default createField;
