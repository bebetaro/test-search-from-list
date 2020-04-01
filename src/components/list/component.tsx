import React from 'react'

type Props = {
  names: string[]
}

export const List: React.FC<Props> = (props) => {
  return (
    <div>
      {
        props.names.map((name) => {
          return <div style={{ textDecoration: 'underline', paddingBottom: '15px', textAlign: 'center' }}>{name}</div>
        })
      }
    </div>

  )
}

List.defaultProps = {
  names: []
}