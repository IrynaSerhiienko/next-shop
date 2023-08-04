import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import s from '../styles/PlaceOrderFormDateTime.module.scss';
// import Button from './Button';

export default function PlaceOrderFormDateTime() {

    const [radioValue, setRadioValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [isRadioSelected, setIsRadioSelected] = useState(false);
    const [state, handleSubmit] = useForm("maykjyzj");
  
    const handleRadioChange = (event) => {
      setRadioValue(event.target.value);
      setIsRadioSelected(true);
    };
  
    const handleCheckboxChange = (event) => {
      setCheckboxValue(event.target.checked);
    };
  
    const isNextStepDisabled = !isRadioSelected;
  
    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
  
    return (
        <div className={s.formDecorContainer}>
            <p className={s.title}>please choose the desired date and time when you need the cake</p>
            <form onSubmit={handleSubmit} className={s.form}>
                <div className={`${s.textWrapper} flex mb-4`}>
                        <input
                            type="radio"
                            name="option"
                            value="option1"
                            checked={radioValue === 'option1'}
                            onChange={handleRadioChange}
                            className={s.input}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.option}`}>simple decor (berries, leaves)</p>
                            <span className={s.price}>+ 250 UAH</span>
                        </div>
                </div>
               
               
              
               {/* <Button/> */}
                <div>
                    
                    <button type="submit" disabled={isNextStepDisabled || state.submitting}>
                        Next Step
                    </button>
                </div>
                 
            </form>
        </div>
     
    );
  }


 
