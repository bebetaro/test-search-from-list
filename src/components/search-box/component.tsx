import React from 'react'
import styles from './style.module.css'

type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = props => {
  return <input className={styles.search} type='text' value={props.value} onChange={props.onChange} />
}

Input.defaultProps = {
  value: '',
  onChange: () => { }
}


