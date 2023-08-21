import {useForm} from 'react-hook-form'
import { useData } from '@/contexts/DataContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import s from '../styles/PlaceOrderFormDecor.module.scss';
// import { useForm, ValidationError } from '@formspree/react';

export default function PlaceOrderFormDecor() {
     const {register, handleSubmit, reset, formState: {errors, isValid, isSubmitting}} = useForm({mode: 'onBlur'})
     const {formData, setValues} = useData()

     const [buttonStyle, setButtonStyle] = useState(s.invalidButton); 
     const [showErrorMessage, setShowErrorMessage] = useState(false);
     const [isRadio1Filled, setIsRadio1Filled] = useState(false);
     const [isRadio2Filled, setIsRadio2Filled] = useState(false);
     const [isRadio3Filled, setIsRadio3Filled] = useState(false);

    const router = useRouter()
    const { id } = router.query;
    // const {query} = router
    // const {formData} = useData() 

    // useEffect(() => {
    //     setIsTimeFilled(Boolean(formData.time))
    // }, [formData.time]);

    const onSubmit = (data) => {
        console.log(data);
        setValues({option1: '', option2: '', option3: '', agree: ''})
    }

    const handlePlaceOrderStep2 = () => {
        if (isValid) {
            router.push(`/menu/${id}/placeOrderStep2`);
        } else {
            setShowErrorMessage(true)
        }
    };

    const [radioValue, setRadioValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [isRadioSelected, setIsRadioSelected] = useState(false);

    // const [state, handleSubmit] = useForm("maykjyzj");
  
    const handleInputValue = (field, value) => {
        const newFieldValue = value
        localStorage.setItem(field, newFieldValue)
        setValues({[field]: newFieldValue})
        setShowErrorMessage(false)
    //   setRadioValue(event.target.value);
    //   localStorage.setItem('radioValue', event.target.value)
    //   localStorage.setItem('radioValue', JSON.stringify(event.target.value))
    //   setIsRadioSelected(true);
    };
  
    // const handleCheckboxChange = (event) => {
    //     setCheckboxValue(event.target.checked);
    //     // localStorage.setItem('checkboxValue', event.target.checked)
    //     localStorage.setItem('checkboxValue', JSON.stringify(event.target.checked))

    //     if (!event.target.checked) {
    //         localStorage.removeItem('checkboxValue');
    //     }
    // };

    // useEffect(() => {
    //     const savedRadioValue = localStorage.getItem('radioValue')
    //     if(savedRadioValue){
    //         setRadioValue(savedRadioValue)
    //     }

    //     const savedCheckboxValue = JSON.parse(localStorage.getItem('checkboxValue'));
    //     if (savedCheckboxValue) {
    //         setCheckboxValue(savedCheckboxValue);
    //     }
    // }, [])
  
    // const isNextStepDisabled = !isRadioSelected;
  
    // if (state.succeeded) {
    //   return <p>Thanks for joining!</p>;
    // }
  
    return (
        <div className={s.formDecorContainer}>
            <p className={s.title}>please select the type of decor and the need for candles</p>
            <p className={s.subTitle}>* prices for decor are approximate. the final price will be determined after we contact you</p>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={`${s.radioWrapper} flex mb-4`}>
                        <input
                        className={s.input}
                        {...register('option', {required: true})}
                        type='radio'
                        value={formData.option1}
                        onChange={handleInputValue}
                        // value="option1"
                        // checked={radioValue === 'option1'}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.option}`}>simple decor (berries, leaves)</p>
                            <span className={s.price}>+ 250 UAH</span>
                        </div>
                </div>
                <div className={`${s.radioWrapper} flex mb-4`}>
                        <input
                        className={s.input}
                        {...register('option', {required: true})}
                        type='radio'
                        value={formData.option2}
                        onChange={handleInputValue}
                        // value="option2"
                        // checked={radioValue === 'option2'}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.option}`}>medium decoration with macarons, berries, flowers</p>
                            <span className={s.price}>+ 550 UAH</span>
                        </div>
                </div>
                <div className={`${s.radioWrapper} flex mb-5`}>
                        <input
                        className={s.input}
                        {...register('option', {required: true})}
                        type='radio'
                        value={formData.option3}
                        onChange={handleInputValue}
                        // value="option3"
                        // checked={radioValue === 'option3'}
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
                    className={s.input}
                    {...register('agree')}
                    type='checkbox'
                    onChange={handleInputValue}
                    // onChange={handleCheckboxChange}
                    // checked={checkboxValue}
                    // className={s.checkBoxInput}
                    />
                    <span className={s.checkmarkForCheckbox}></span>
                    <p className={`${s.addCandles} pl-8`}>if you need <b className={`text-xl font-medium`}>candles</b>, please click here, it’s free</p>
                </div>
               <Button disabled={!isValid || isSubmitting} text={'next step'} onClick={handlePlaceOrderStep2} className={`${s.btnAdd} mx-auto mt-10 ${isValid ? s.validButton : s.invalidButton}`}/>
               {showErrorMessage && (
                     <p role="alert" className={`${s.error}`}>
                     Please fill out all the required fields before proceeding.
                 </p>
                )}
            </form>
        </div>
    );
  }


 
