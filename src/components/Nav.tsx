import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

const navList: { title: string; url: string }[] = [
  {
    title: 'Login',
    url: '/',
  },
  {
    title: 'User',
    url: '/user',
  },
];

const Nav = () => {
  const { user, isLoading } = useUser();

  return (
    <nav className='font-bold text-xl flex items-center gap-4'>
      {isLoading ? <h2>로딩중</h2> : <h2>{user?.username}</h2>}
      <ul className='flex items-center gap-4 font-light'>
        {navList.map(nav => (
          <li key={nav.title}>
            <Link to={nav.url}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
