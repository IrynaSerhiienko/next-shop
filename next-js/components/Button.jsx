import classNames from 'classnames';
import s from '../styles/Button.module.scss';

export default function Button({text, onClick, className, type, isValid}) {
    const buttonClasses = classNames(s.btn, className);

    return (
        <button type={type} isValid={isValid} className={buttonClasses} onClick={onClick}>{text}</button>
    )
   
}

// if(link) {
//     return (
//         <Link href={link}>
//             <button className={buttonClasses}>{text}</button>
//         </Link>
//     )
// } else {
//     return (
//         <button className={buttonClasses} onClick={onClick}>{text}</button>
//     )
// }


// const buttonStyles = {
    //     ...s.btn, // Стили кнопки по умолчанию из SCSS-модуля
    //     ...className, // Дополнительные стили переданные через пропсы
    //   };
    // const combinedClassName = `${s.btn} ${className}`.trim();

// export default function Button({text, width, height, color}) {
//     const buttonStyles = {
//         width: `${width}px`,
//         height: `${height}px`,
//         backgroundColor: color
//       };