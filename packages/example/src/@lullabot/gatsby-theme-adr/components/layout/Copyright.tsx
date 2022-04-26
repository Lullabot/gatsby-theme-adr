import React from 'react';

const Copyright: React.FC = () => (
  <p className="ml-3 xl:ml-6 text-center text-base text-gray-400">
    &copy; {new Date().getFullYear()} My Company, Inc. All rights reserved.
  </p>
);

export default Copyright;
