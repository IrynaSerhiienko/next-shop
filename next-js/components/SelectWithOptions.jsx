import s from '@/styles/SelectWithOptions.module.scss';

const options = ['1,5 kg', '2 kg', '2,5 kg', '3 kg', '3,5 kg', '4 kg', '4,5 kg', '5 kg']; 

export default function SelectWithOptions() {
  return (
    <select className={s.selectContainer}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
