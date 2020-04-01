import React, { useState, useCallback, } from 'react';
import { Input } from '../search-box'
import { List } from '../list'
import { filterData } from '../utils'
import { data } from '../constants'
import styles from './style.module.css'

export const Normal: React.FC = () => {
  const [text, setText] = useState<string>('')


  const onChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }, [])

  // Need to reduce array
  const filtered = text === '' ? data : filterData(text)

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Input value={text} onChange={onChangeText} />
      </div>
      <div className={styles.list}>
        <List names={filtered} />
      </div>
    </div>
  );
}


