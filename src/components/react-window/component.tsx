import React, { useState, useCallback, } from 'react';
import { Input } from '../search-box'
import { VirtualList } from '../virtualList'
import { filterData } from '../utils'
import { data } from '../constants'
import styles from './style.module.css'

export const ReactWindow: React.FC = () => {
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
      <VirtualList names={filtered} />
    </div>
  );
}


