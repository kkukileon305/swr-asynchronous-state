import { useForm, SubmitHandler } from 'react-hook-form';
import useUser from '../hooks/useUser';

type Inputs = {
  userId: string;
  password: string;
};

const Login = () => {
  const { mutate, user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => mutate();

  return (
    <div className='max-w-[600px] w-full min-h-[calc(100vh-132px)] mx-auto py-12 flex items-center justify-center'>
      <div className='flex flex-col items-center p-10'>
        <form className='flex flex-col min-w-[500px] text-white' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='font-bold text-4xl mb-8'>Login</h2>
          <div className='relative mb-4'>
            <span className='absolute right-0 bottom-[calc(50%-12px)]'>{errors.userId && errors.userId.message}</span>
            <input //
              className='w-full bg-transparent border-white focus:outline-none border-b text-2xl placeholder:text-gray-200 p-2'
              placeholder='ID'
              {...register('userId', {
                minLength: {
                  value: 2,
                  message: '2글자 이상 입력해주세요',
                },
                required: {
                  value: true,
                  message: '아이디를 입력해주세요',
                },
              })}
            />
          </div>
          <div className='relative mb-4'>
            <span className='absolute right-0 bottom-[calc(50%-12px)]'>{errors.password && errors.password.message}</span>
            <input //
              className='w-full bg-transparent border-white focus:outline-none border-b text-2xl placeholder:text-gray-200 p-2'
              placeholder='Password'
              {...register('password', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
                minLength: {
                  value: 6,
                  message: '6글자 이상 입력해주세요',
                },
              })}
            />
          </div>
          <input value={'로그인'} className='cursor-pointer w-full bg-gray-300 text-gray-600 font-bold text-xl py-4' type='submit' />
        </form>
      </div>
    </div>
  );
};
export default Login;
