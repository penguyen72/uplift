'use client';

import NavBar from '@/components/nav-bar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
