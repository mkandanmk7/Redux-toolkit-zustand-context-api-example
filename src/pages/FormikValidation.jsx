import React from 'react'
import { useFormik } from "formik"
import * as YUP from "yup";
import { validate } from '../../../api/middlewares/validate';

const FormikValidation = () => {
  const fieldConfigurations = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'email', label: 'Email', type: 'email' },
  ];
  const useValidationSchema = YUP.object().shape({
    name: YUP.string().required("").max(10),
    password: YUP.string().required('Password should not be empty').max(10, 'Password should not exceed 10 characters'),
    email: YUP.string().required('Email should not'),
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      email: '',
    },
    validationSchema: useValidationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {fieldConfigurations.map((field) => (
          <div key={field.name} className='flex flex-col gap-2'>
            <label htmlFor={field.name}> {field.label}</label>
            <input
              className='border border-blue-100 p-2'
              value={formik.values[field.name]}
              type={field.type}
              name={field.name}
              onChange={formik.handleChange}
            />
            <span className='text-red-500 '>{formik.errors[field.name]}</span>

          </div>
        ))}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormikValidation
