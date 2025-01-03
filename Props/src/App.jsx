import React from 'react';
import Practice from './Practice';

const App = () => {
  return (
    <>
      <Practice name="Ali" Age={17} isStudent={true} />
      <Practice />
    </>
  );
};

export default App;
