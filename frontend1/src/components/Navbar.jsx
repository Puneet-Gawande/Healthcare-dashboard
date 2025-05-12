import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">Healthcare Dashboard</div>
      <div className="space-x-4">
        <button className="hover:underline">Profile</button>
        <button className="hover:underline">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
