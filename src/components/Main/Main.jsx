import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';

import styles from './Main.module.less';

import Repo from '../Repo/Repo';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);

  const [searchValue, setSearchValue] = useState('');

  const searchHandler = () => {
    dispatch(getRepos(searchValue));
  };

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div>
      <div className={styles.search}>
        <input
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          type="text"
        />
        <button className={styles.searchBtn} onClick={() => searchHandler()}>
          Поиск
        </button>
      </div>
      {isFetching ? (
        <div className={styles.fetching}>The data is fetching</div>
      ) : (
        <div>
          {repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
