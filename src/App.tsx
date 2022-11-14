import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Nav from './components/Nav';
import User from './pages/User';

const App = () => {
  return (
    <>
      <header className='bg-gray-600 text-white'>
        <div className='max-w-[1060px] w-full mx-auto py-12 flex items-center justify-between'>
          <h2 className='font-bold text-3xl'>SWR 연습용</h2>
          <Nav />
        </div>
      </header>
      <main className='bg-gray-400 min-h-[calc(100vh-132px)]'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </main>
    </>
  );
};
export default App;
