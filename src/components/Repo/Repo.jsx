import React from 'react';
import styles from './Repo.module.less';

const Repo = ({ repo }) => {
  return (
    <div className={styles.repo}>
      <div className={styles.repoHeader}>
        <div className={styles.repoName}>{repo.name}</div>
        <div className={styles.repoRate}>{repo.stargazers_count}</div>
      </div>
      <div className={styles.repoCommitInfo}>{repo.updated_at}</div>
      <a className={styles.repoLink} href={repo.html_url}>
        {repo.html_url}
      </a>
    </div>
  );
};

export default Repo;
