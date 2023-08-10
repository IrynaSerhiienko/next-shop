import { useForm, ValidationError } from '@formspree/react';
// import {useForm} from 'react-hook-form'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import s from '../styles/PlaceOrderFormDecor.module.scss';

export default function PlaceOrderFormDecor() {

    const router = useRouter()
    const { id } = router.query;

    const handlePlaceOrderStep2 = () => {
        router.push(`/menu/${id}/placeOrderStep2`);
    };

    const [radioValue, setRadioValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [isRadioSelected, setIsRadioSelected] = useState(false);

    const [state, handleSubmit] = useForm("maykjyzj");
  
    const handleRadioChange = (event) => {
      setRadioValue(event.target.value);
    //   localStorage.setItem('radioValue', event.target.value)
      localStorage.setItem('radioValue', JSON.stringify(event.target.value))
      setIsRadioSelected(true);
    };
  
    const handleCheckboxChange = (event) => {
        setCheckboxValue(event.target.checked);
        // localStorage.setItem('checkboxValue', event.target.checked)
        localStorage.setItem('checkboxValue', JSON.stringify(event.target.checked))

        if (!event.target.checked) {
            localStorage.removeItem('checkboxValue');
        }
    };

    useEffect(() => {
        const savedRadioValue = localStorage.getItem('radioValue')
        if(savedRadioValue){
            setRadioValue(savedRadioValue)
        }

        const savedCheckboxValue = JSON.parse(localStorage.getItem('checkboxValue'));
        if (savedCheckboxValue) {
            setCheckboxValue(savedCheckboxValue);
        }
    }, [])
  
    const isNextStepDisabled = !isRadioSelected;
  
    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
  
    return (
        <div className={s.formDecorContainer}>
            <p className={s.title}>please select the type of decor and the need for candles</p>
            <p className={s.subTitle}>* prices for decor are approximate. the final price will be determined after we contact you</p>
            <form className={s.form}>
            {/* <form onSubmit={handleSubmit} className={s.form}> */}
                <div className={`${s.radioWrapper} flex mb-4`}>
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
                <div className={`${s.radioWrapper} flex mb-4`}>
                        <input
                        type="radio"
                        name="option"
                        value="option2"
                        checked={radioValue === 'option2'}
                        onChange={handleRadioChange}
                        className={s.input}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.option}`}>medium decoration with macarons, berries, flowers</p>
                            <span className={s.price}>+ 550 UAH</span>
                        </div>
                </div>
                <div className={`${s.radioWrapper} flex mb-5`}>
                        <input
                        type="radio"
                        name="option"
                        value="option3"
                        checked={radioValue === 'option3'}
                        onChange={handleRadioChange}
                        className={s.input}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.option}`}>individual design (describe your expectations below in as much detail as possible)</p>
                            <span className={s.price}>+ 1000 UAH</span>
                        </div>
                </div>
                <div className={`${s.radioWrapper} flex mb-5`}>
                {/* <div className={`${s.checkBoxWrapper} flex mb-5`}> */}
                    <input
                    type="checkbox"
                    name="checkbox"
                    checked={checkboxValue}
                    onChange={handleCheckboxChange}
                    className={s.input}
                    // className={s.checkBoxInput}
                    />
                    <span className={s.checkmarkForCheckbox}></span>
                    <p className={`${s.addCandles} pl-8`}>if you need <b className={`text-xl font-medium`}>candles</b>, please click here, it’s free</p>
                </div>
               <Button type={'button'} text={'next step'} onClick={handlePlaceOrderStep2} className={`${s.btnAdd} mx-auto mt-10`}/>
            </form>
        </div>
    );
  }


 
