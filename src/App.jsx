import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'


function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}

      validate={(values) => {
        const errors = {}

        if (values.name== '') {
          errors.name = 'Name is required';
        }
        if (values.email == '') {
          errors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors
      }}

      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type='text' name='name' />
          <ErrorMessage name='name' component='div' />
        </div>

        <div>
          <label>Email</label>
          <Field type='text' name='email' />
          <ErrorMessage name='email' component='div' />
        </div>

        <div>
          <label>Message</label>
          <Field as='textarea' name='message' />
          <ErrorMessage name='message' component='div' />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}



function App() {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default App


