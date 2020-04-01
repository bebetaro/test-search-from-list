import React from 'react'
import { StyledInput } from './style'

type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = props => {
  return <StyledInput type='text' value={props.value} onChange={props.onChange} />
}

Input.defaultProps = {
  value: '',
  onChange: () => { }
}


