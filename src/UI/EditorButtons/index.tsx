import React from 'react'
import styles from './EditorButtons.module.scss'

interface ISwitchButton {
  onClickHandler?: () => void
  isSelected: boolean
  primaryText: string
  preamble?: string
}

interface IStartButton {
  onClickHandler?: () => void
  isStart: boolean
}

export const SwitchButton: React.FC<ISwitchButton & React.HTMLProps<HTMLButtonElement>> = ({
  onClickHandler,
  isSelected,
  primaryText,
  preamble,
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={`${styles.switchBtn} ${!isSelected ? styles.select : ''}`}
    >
      <div>
        {primaryText && <span>{primaryText}</span>}
        {preamble && <span>{preamble}</span>}
      </div>
    </button>
  )
}

export const StartButton: React.FC<IStartButton & React.HTMLProps<HTMLButtonElement>> = ({
  onClickHandler,
  isStart,
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={isStart ? styles.btnStart : styles.btnStop}
    ></button>
  )
}
