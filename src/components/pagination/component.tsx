import React, { useState, useCallback, useMemo } from 'react';
import { Input } from '../search-box'
import { List } from '../list'
import { filterData } from './utils'
import { data } from './constants'
import styles from './style.module.css'

export const Pagination: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [pageNum, setPageNum] = useState<number>(0)

  const onChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }, [])

  // Need to reduce array
  const filtered = useMemo(() => text === '' ? data.slice(pageNum * 1000, pageNum * 1000 + 1000) : filterData(text, pageNum), [pageNum, text])

  const movePage = useCallback((increment: number) => () => {
    setPageNum(prevNum => prevNum + increment)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Input value={text} onChange={onChangeText} />
      </div>
      <p>{pageNum + 1} / {data.length / 1000}</p>
      <div className={styles.list}>
        <List names={filtered} />
      </div>
      <div className={styles.buttons}>
        <button type={'button'} className={styles.button} onClick={movePage(-1)} disabled={pageNum === 0}>Prev</button>
        <button type={'button'} className={styles.button} onClick={movePage(1)} disabled={pageNum === data.length / 1000 - 1}>Next</button>
      </div>
    </div>
  );
}


