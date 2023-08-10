import { useData } from '@/contexts/DataContext';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useRouter } from 'next/router';
import Button from './Button';
import s from '../styles/PlaceOrderFormDateTime.module.scss';

export default function PlaceOrderFormDateTime() {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid, isSubmitting}} = useForm({mode: "onBlur"})
    const {formData, setValues} = useData()

    const router = useRouter();
    const { id } = router.query;

    // useEffect(() => {
    //     const storedDate = localStorage.getItem('date');
    //     if (storedDate) {
    //         setValues({ date: storedDate });
    //     }
    //     console.log(setValues);
    // }, []);
    
    const onSubmit = (data) => {
        console.log(data)
        setValues({ date: '' }); 
        // setValues(data)
        // reset();
    };

    const handlePlaceOrderStep3 = () => {
    router.push(`/menu/${id}/placeOrderStep3`);
    };

    const handleInputDateValue = (e) => {
        const newDate = e.target.value;
        localStorage.setItem('date', newDate);
        setValues({ date: newDate });
        // localStorage.setItem('date', e.target.value)
    }
    
    return (
        <div className={s.formDecorContainer}>
            <p className={s.title}>please choose the desired date and time when you need the cake</p>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={`${s.inputWrapper}`}>
                    <label htmlFor='date' className={`${s.label}`}>enter the desired date</label>
                    <input
                        {...register('date', {required: true})}
                        type='date'
                        value={formData.date || ''}
                        // value={data.date || ''}
                        className={s.input}
                        onChange={handleInputDateValue}
                        aria-invalid={errors.date ? 'true' : 'false'}
                    />
                    {errors.date?.type === 'required' && (<p role='alert' className={`${s.error}`}>Date is required!</p>)}
                </div>
                <div className={`${s.inputWrapper}`}>
                    <label htmlFor='time' className={`${s.label}`}>enter the desired time</label>
                    <input
                        className={s.input}
                        type='time'
                        {...register('time', {required: true})}
                        aria-invalid={errors.time ? 'true' : 'false'}
                    />
                    {errors.time?.type === 'required' && (<p role='alert' className={`${s.error}`}>Time is required!</p>)}
                </div>
                <div className={`${s.inputWrapper}`}>
                    <label htmlFor='wishes' className={`${s.label}`}>write your wishes regarding decoration or fillings</label>
                    <input
                        className={s.input}
                        style={{ backgroundColor: '#e9e0e0' }}
                        type='wishes'
                        {...register('wishes', {required: true, maxLength: 150})}
                        aria-invalid={errors.wishes ? 'true' : 'false'}
                        placeholder='max 150 symbols'
                    />
                    {errors.wishes?.type === 'required' && (<p role='alert' className={`${s.error}`}>Wishes are required!</p>)}
                    {errors.wishes?.type === 'maxLength' && (<p role='alert' className={`${s.error}`}>Maximum length must be 150 symbols!</p>)}
                </div>
                <Button disabled={!isValid || isSubmitting} text={'next step'} onClick={handlePlaceOrderStep3} className={`${s.btnAdd} mx-auto mt-10 ${isValid ? s.validButton : s.invalidButton}`} />
            </form>
        </div>
    );
  }
  


 
  
 