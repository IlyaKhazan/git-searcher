import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';

import styles from './Main.module.less';

import Repo from '../Repo/Repo';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div>
      Main
      {repos.map((repo) => (
        <Repo repo={repo} />
      ))}
    </div>
  );
};

export default Main;
