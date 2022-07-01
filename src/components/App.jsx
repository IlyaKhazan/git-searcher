import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main/Main';
import styles from './App.module.less';

const App = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
