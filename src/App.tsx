import React, { useState, useCallback, } from 'react';
import { Normal } from './components/normal'
import { Pagination } from './components/pagination'
import { ReactWindow } from './components/react-window'
import styles from './app.module.css'

const App: React.FC = () => {
  const [tableType, setTableType] = useState<'normal' | 'page' | 'window' | 'none'>('none')
  const onChangeTableType = useCallback((type: 'normal' | 'page' | 'window' | 'none') => () => {
    setTableType(type)
  }, [])

  const showTable = (type: 'normal' | 'page' | 'window' | 'none') => {
    switch (type) {
      case 'normal':
        return <Normal />
      case 'page':
        return <Pagination />
      case 'window':
        return <ReactWindow />
      default:
        return <div></div>
    }
  }

  return <div className={styles.container}>
    <div className={styles.buttons}>
      <button className={styles.button} type={'button'} onClick={onChangeTableType('normal')}>Normal*Warning*</button>
      <button className={styles.button} type={'button'} onClick={onChangeTableType('page')}>Pagination</button>
      <button className={styles.button} type={'button'} onClick={onChangeTableType('window')}>React Window</button>
    </div>
    <div className={styles.list}>
      {showTable(tableType)}
    </div>
  </div>
}

export default App;
