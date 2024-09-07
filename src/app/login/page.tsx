// /pages/auth/login.tsx
'use client'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface IFormInputs {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: IFormInputs) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const result = await response.json();
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred');
    }
  };

  return (
    <div className="flex justify-center w-[60vw] ml-[20vw] items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="p-16 bg-white border rounded-lg">
        <h2 className="text-2xl mb-4">Login</h2>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            id="username"
            type="text"
            {...register('username')}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
