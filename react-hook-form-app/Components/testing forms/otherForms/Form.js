import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import classes from './Form.module.scss';

const Form = () => {
      const [formData, setFormData] = useState(null)
      const { register, handleSubmit, formState: { errors } } = useForm()
      const onSubmit = data => { setFormData(data) }
      console.log(errors);
      return (
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                  <label htmlFor="block">Block</label>
                  <input id='block'  {...register("block", { required: "this field is required" })} />
                  {errors.block && <span>{errors.block.message}</span>} <br />
                  <label htmlFor="ward">Ward</label>
                  <input id='ward'  {...register("ward", { required: "this field is required" })} />
                  {errors.ward && <span>{errors.ward.message}</span>}<br />
                  <label htmlFor="gender">Gender</label>
                  <select id='gender' {...register("gender")}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                  </select><br />
                  <label htmlFor="firstName">FirstName</label>
                  <input id='firstName' {...register("firstName", { required: true, maxLength: 20 })} /><br />
                  <label htmlFor="email">Email</label>
                  <input id='email'{...register("email", { pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, required: "this field is required" })} />
                  {errors.email && <span>{errors.email.message}</span>}
                  {errors.email && errors.email.type === "pattern" && <span>enter valid email</span>}<br />
                  <label htmlFor="age">Age</label>
                  <input id='age' type="number" {...register("age", { min: 18, max: 99 })} /> <br />

                  <button type='submit'>submit</button>

                  {formData !== null && <div className={classes.div}>
                        <h3>Output :</h3>
                        <pre>
                              {JSON.stringify(formData, null, 2)}
                        </pre>
                  </div>
                  }
            </form>
      )
}

export default Form

// List of validation rules supported:

// required

// min

// max

// minLength

// maxLength

// pattern

// validate