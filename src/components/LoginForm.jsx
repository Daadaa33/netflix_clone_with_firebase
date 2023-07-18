import React from 'react'
import back from "../../public/images/misc/home.jpeg"
import logo from "../../public/images/logo/Logonetflix.png"
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form"
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <img
        src={back}
        className="absolute -z-10 h-screen w-full object-cover opacity-60 "
      />
      <Link to="/">
        <img
       
          src={logo}
          className="md:w-[150px ] absolute left-1 top-3 w-[100px] object-contain"
        />
      </Link>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute mt-24 space-y-8 rounded bg-black/70 px-6 py-10 md:mt-0 md:max-w-md"
      >
        <h1 className="my-6 text-2xl  font-semibold text-white">Sing In</h1>
        <label className="inline-block w-full">
          <input
            {...register("Email", { required: true })}
            className="form-control"
            type="email"
          />
          {errors.Email && <p className='pt-2 text-sm text-orange-500'>This Field Is required</p>}
        </label>
        <label className="inline-block w-full">
          <input
            {...register("password", { required: true })}
            className="form-control"
            type="password"
          />
          {errors.password && <p className='pt-2 text-sm text-orange-500'>This Field Is required</p>}
        </label>
        <button className="btn">Sing In</button>
      </form>
    </div>
  );
}

export default LoginForm