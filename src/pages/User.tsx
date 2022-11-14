import useUser from '../hooks/useUser';

const User = () => {
  const { user } = useUser();

  return (
    <div className='max-w-[1060px] w-full mx-auto'>
      {user && (
        <h2>
          {user.lastName} {user.firstName}
        </h2>
      )}
    </div>
  );
};
export default User;
