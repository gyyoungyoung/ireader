import React from 'react';
import styles from './Reader.less';

function Reader({ dispatch, chapter, loading }) {
  return (
    <div className={styles.normal}>
      <div className={styles.body}>
        {chapter.body && chapter.body.split('\n').map((i, index) =>
          <p key={index}>{i}</p>,
        )}
      </div>
    </div>
  );
}

export default Reader;
