import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [success, setSuccess] = useState(false)

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    passwordConfirm: false
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorsObject = {
      email: false,
      password: false,
      passwordConfirm: false
    }

    if (email === '') {
      errorsObject.email = true
    }

    if (!password) {
      errorsObject.password = true
    }

    if (!passwordConfirm) {
      errorsObject.passwordConfirm = true
    }

    if(Object.values(errors).includes(true)) {
      setErrors(errorsObject)
      return;
    } else {
      setSuccess(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      {errors.email ? <span>Email is required</span> : null}

      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      {errors.password ? <span>Password is required</span> : null}

      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {console.log(errors.passwordConfirm)}
      {errors.passwordConfirm ? <span>You need to confirm your password</span> : null}

      <input type='submit' value='Submit' />

      {success ? <span>Your information was submited!</span> : null}
    </form>
  )
}
