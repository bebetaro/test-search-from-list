import React from 'react'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import styles from './style.module.css'
type Props = {
  names: string[]
}

export const VirtualList: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <AutoSizer >
        {({ height, width }) => (
          <FixedSizeList
            itemCount={props.names.length}
            itemSize={20}
            height={height}
            width={width}
          >
            {({ index, style }) => {
              return <div className={styles.item} style={style}>{props.names[index]}</div>
            }}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  )
}

VirtualList.defaultProps = {
  names: []
}