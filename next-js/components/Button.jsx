import s from '../styles/Button.module.scss';

export default function Button({text, width, height, color}) {
    const buttonStyles = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color
      };

  return (
      <button className={s.btn} style={buttonStyles}>{text}</button>
  )
}