import {useForm} from 'react-hook-form'
import { useData } from '@/contexts/DataContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import s from '../styles/PlaceOrderFormDateTime.module.scss';

export default function PlaceOrderFormDateTime() {
    const {register, handleSubmit, formState: {errors, isValid, isSubmitting}} = useForm({mode: 'onBlur'})
    const {formData, setValues} = useData()

    const [showErrorMessage, setShowErrorMessage] = useState(false);
    // const [buttonClass, setButtonClass] = useState(s.invalidButton)
    const [isDateFilled, setIsDateFilled] = useState(false);
    const [isTimeFilled, setIsTimeFilled] = useState(false);
    const [isWishesFilled, setIsWishesFilled] = useState(false);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        setIsDateFilled(Boolean(formData.date))
    }, [formData.date]);
    
    useEffect(() => {
        setIsTimeFilled(Boolean(formData.time))
    }, [formData.time]);

    useEffect(() => {
        setIsWishesFilled(Boolean(formData.wishes))
    }, [formData.wishes]);

    // useEffect(() => {
    //     if (isDateFilled && isTimeFilled && isWishesFilled && isValid) {
    //         setButtonClass(s.validButton)
    //     } else {
    //         setButtonClass(s.invalidButton)
    //     }
    // }, [isDateFilled, isTimeFilled, isWishesFilled, isValid]);

    const onSubmit = (data) => {
        console.log(data)
        setValues({ date: '', time: '', wishes: '' }); 
    };

    const handlePlaceOrderStep3 = () => {
        if (isValid) {
            router.push(`/menu/${id}/placeOrderStep3`);
        } else {
            setShowErrorMessage(true)
        }      
    };

    const handleInputValue  = (field, value) => {
        const newFieldValue = value
        localStorage.setItem(field, newFieldValue)
        setValues({[field]: newFieldValue})
        setShowErrorMessage(false)
    }
    
    return (
        <div className={s.formDecorContainer}>
            <p className={s.title}>please choose the desired date and time when you need the cake</p>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={`${s.inputWrapper}`}>
                    <label htmlFor='date' className={`${s.label}`}>enter the desired date</label>
                    <input
                        className={s.input}
                        {...register('date', {required: true})}
                        type='date'
                        value={formData.date || ''}
                        onChange={(e) => handleInputValue('date', e.target.value)}
                        aria-invalid={errors.date ? 'true' : 'false'}
                    />
                    {errors.date?.type === 'required' && !isDateFilled && (<p role='alert' className={`${s.error}`}>Date is required!</p>)}
                </div>
                <div className={`${s.inputWrapper}`}>
                    <label htmlFor='time' className={`${s.label}`}>enter the desired time</label>
                    <input
                        className={s.input}
                        {...register('time', {required: true})}
                        type='time'
                        value={formData.time || ''}
                        onChange={(e) => handleInputValue('time', e.target.value)}
                        aria-invalid={errors.time ? 'true' : 'false'}
                    />
                     {errors.time?.type === 'required' && !isTimeFilled && (<p role='alert' className={`${s.error}`}>Time is required!</p>)}
                </div>
                <div className={`${s.inputWrapper}`}>
                    <label htmlFor='wishes' className={`${s.label}`}>write your wishes regarding decoration or fillings</label>
                    <input
                        className={s.input}
                        {...register('wishes', {required: true, maxLength: 150})}
                        type='wishes'
                        value={formData.wishes || ''}
                        onChange={(e) => handleInputValue('wishes', e.target.value)}
                        style={{ backgroundColor: '#e9e0e0' }}
                        aria-invalid={errors.wishes ? 'true' : 'false'}
                        placeholder='max 150 symbols'
                    />
                     {errors.wishes?.type === 'required' && !isWishesFilled && (<p role='alert' className={`${s.error}`}>Wishes are required!</p>)}
                    {errors.wishes?.type === 'maxLength' && (<p role='alert' className={`${s.error}`}>Maximum length must be 150 symbols!</p>)}
                </div>
                <Button disabled={!isValid || isSubmitting} text={'next step'} onClick={handlePlaceOrderStep3} className={`${s.btnAdd} mx-auto mt-10 ${isValid ? s.validButton : s.invalidButton}`} />
                {/* <Button disabled={!isValid || isSubmitting} text={'next step'} onClick={handlePlaceOrderStep3} className={`${s.btnAdd} mx-auto mt-10 ${buttonClass}`} /> */}
               
                {showErrorMessage && (
                     <p role="alert" className={`${s.error}`}>
                     Please fill out all the required fields before proceeding.
                 </p>
                )}
            </form>
        </div>
    );
  }