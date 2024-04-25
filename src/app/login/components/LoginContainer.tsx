'use client'
import { useState } from 'react';

const LoginFields = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}: {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input
        className='bg-white text-black p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
        type='email'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='bg-white text-black p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          Login
        </div>
      </button>
    </form>
  );
};

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      <LoginFields
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginContainer;