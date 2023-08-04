import { useState, useEffect } from 'react';
import s from '@/styles/SelectWithOptions.module.scss';

const options = ['1,5 kg', '2 kg', '2,5 kg', '3 kg', '3,5 kg', '4 kg', '4,5 kg', '5 kg']; 

export default function SelectWithOptions() {
    const[selectedOption, setSelectedOption] = useState('')

    const handleSelectChange = (event) => {
        const selectedValue  = event.target.value;
        setSelectedOption(selectedValue)
        localStorage.setItem('selectedOption', JSON.stringify(selectedValue));
    }

    useEffect(() => {
        const savedOption = JSON.parse(localStorage.getItem('selectedOption'))
        if (savedOption) {
            setSelectedOption(savedOption)
        }
    }, [])

    return (
        <select className={s.selectContainer} value={selectedOption} onChange={handleSelectChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
        </select>
    );
}
