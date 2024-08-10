'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LogInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push('/login');
  };

  return (
    <div>
      {auth ? (
        <>
          Hello {auth?.name} <span className="mx-2">|</span>
          <span>
            <a className="cursior-pointer" onClick={logout}>
              Logout
            </a>
          </span>
        </>
      ) : (
        <Link href={'/login'}>Login</Link>
      )}
    </div>
  );
};

export default LogInOut;
