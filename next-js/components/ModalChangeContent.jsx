import {useForm} from 'react-hook-form'
import { useData } from '@/contexts/DataContext';
import { useEffect} from 'react';
import Button from './Button';
import Image from 'next/image';

import s from '../styles/ModalChangeContent.module.scss';
// import s from '../styles/PlaceOrderFormChoseWeight.module.scss';

const options = ['1,5 kg', '2 kg', '2,5 kg', '3 kg', '3,5 kg', '4 kg', '4,5 kg', '5 kg']; 
const radio = ['+ 250 UAH', '+ 550 UAH', '+ 1000 UAH']; 


export default function ModalChangeContent() {
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm({mode: 'onBlur'})
    const {formData, setValues} = useData()
    
    useEffect(() => {
        const savedOption = localStorage.getItem('weight')
        const savedRadio1 = localStorage.getItem('radio1')
        const savedRadio2 = localStorage.getItem('radio2')
        const savedRadio3 = localStorage.getItem('radio3')

        if (savedOption) {
            setValues({ weight: savedOption});
        }

        if (savedRadio1) {
            setValues({radio1: savedRadio1})
        }

        if (savedRadio2) {
            setValues({radio2: savedRadio2})
        }

        if (savedRadio3) {
            setValues({radio3: savedRadio3})
        }

    }, [])
    

    const onSubmit = (data) => {
        console.log(data)
        // setValues({ weight: ''}); 
        reset();
    };

    const handleFieldValue = (field, value) => {

        Object.keys(formData).forEach((key) => {
            if (key.startsWith('radio') && key !== field) {
                localStorage.removeItem(key);
                setValues({[key]: undefined });
            }
        });

        const newFieldValue = value
        localStorage.setItem(field, newFieldValue)
        setValues({[field]: newFieldValue})
    };
    
    return (
        <div className={s.formContainer}>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={`${s.selectWrapper}`}>
                    <label htmlFor='weight' className={`${s.labelWishes}`}>chose the weight</label>
                    <select
                     className={s.selectContainer}
                     {...register('weight')}
                     value={formData.weight || ''}
                     onChange={(e) => handleFieldValue('weight', e.target.value)}
                     aria-invalid={errors.date ? 'true' : 'false'}
                     >
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={s.decorationDataTimeContainer}>
                    <div className="decorationContainer">
                        <p className={s.titleDecorationDataTime}>decoration (approximately)</p>
                        <div className={`${s.underlineContainer} mb-12`}>
                            <Image
                                alt='underline'
                                src='/img/modal/underline.svg'
                                fill
                            />
                        </div>
                        <div className={`${s.radioWrapper} flex`}>
                                <input
                                className={s.input}
                                {...register('radio')}
                                type='radio'
                                value={radio[0]}
                                onChange={(e) => handleFieldValue('radio1', e.target.value)}
                                aria-invalid={errors.radio1 ? 'true' : 'false'}
                                // checked={radioValue === 'option1'}
                                />
                                <span className={s.checkmark}></span>
                                <div className='flex pl-8'>
                                    <p className={`${s.radio}`}>simple decor</p>
                                    <span className={s.price}>+ 250 UAH</span>
                                </div>
                        </div>
                        <div className={`${s.radioWrapper} flex`}>
                                <input
                                className={s.input}
                                {...register('radio')}
                                type='radio'
                                value={radio[1]}
                                // value={formData.radio2}
                                onChange={(e) => handleFieldValue('radio2', e.target.value)}
                                aria-invalid={errors.radio2 ? 'true' : 'false'}
                                />
                                <span className={s.checkmark}></span>
                                <div className='flex pl-8'>
                                    <p className={`${s.radio}`}>medium decor</p>
                                    <span className={s.price}>+ 550 UAH</span>
                                </div>
                        </div>
                        <div className={`${s.radioWrapper} flex`}>
                                <input
                                className={s.input}
                                {...register('radio')}
                                type='radio'
                                value={radio[2]}
                                // value={formData.radio3}
                                onChange={(e) => handleFieldValue('radio3', e.target.value)}
                                aria-invalid={errors.radio3 ? 'true' : 'false'}
                                />
                                <span className={s.checkmark}></span>
                                <div className='flex pl-8'>
                                    <p className={`${s.radio}`}>individual design</p>
                                    <span className={s.price}>+ 1000 UAH</span>
                                </div>
                        </div>
                    </div>
                    <div className="dateTimeContainer">
                        <p className={s.titleDecorationDataTime}>date & time</p>
                        <div className={`${s.underlineContainer} mb-5`}>
                            <Image
                                alt='underline'
                                src='/img/modal/underline.svg'
                                fill
                            />
                        </div>
                        <div className={`${s.inputWrapper} mb-3`}>
                            <label htmlFor='date' className={`${s.labelDateTimeWishes}`}>desire date</label>
                            <input 
                                className={s.inputDateTime}
                                {...register('date', {required: true})}
                                type='date'
                                value={formData.date || ''}
                                onChange={(e) => handleFieldValue('date', e.target.value)}
                                aria-invalid={errors.date ? 'true' : 'false'}
                            />
                            {errors.date?.type === 'required' && !isDateFilled && (<p role='alert' className={`${s.error}`}>Date is required!</p>)}
                        </div>
                        <div className={`${s.inputWrapper}`}>
                            <label htmlFor='time' className={`${s.labelDateTimeWishes}`}>
                                desire time
                                <input
                                    className={s.inputDateTime}
                                    {...register('time', {required: true})}
                                    type='time'
                                    value={formData.time || ''}
                                    onChange={(e) => handleFieldValue('time', e.target.value)}
                                    aria-invalid={errors.time ? 'true' : 'false'}
                                />
                            </label>
                            {errors.time?.type === 'required' && !isTimeFilled && (<p role='alert' className={`${s.error}`}>Time is required!</p>)}
                        </div>
                    </div>
                </div>
                <div className={s.wishesContainer}>
                    <label htmlFor='wishes' className={`${s.labelDateTimeWishes}`}>
                        write your wishes    regarding decoration or fillings
                        <textarea
                            className={s.textareaWishes}
                            {...register('wishes', {required: true, maxLength: 150})}
                            value={formData.wishes || ''}
                            maxLength='150'
                            onChange={(e) => handleFieldValue('wishes', e.target.value)}
                            style={{ backgroundColor: '#e9e0e0' }}
                            aria-invalid={errors.wishes ? 'true' : 'false'}
                            // type='wishes'
                            // placeholder='max 150 symbols'
                        />
                    </label>
                    <p className={s.placeholderWishes}>max 150 symbols</p>
                    {/* {errors.wishes?.type === 'maxLength' && (<p role='alert' className={`${s.error}`}>Maximum length must be 150 symbols!</p>)} */}
                    {/* {errors.wishes?.type === 'required' && !isWishesFilled && (<p role='alert' className={`${s.error}`}>Wishes are required!</p>)} */}
                </div>
                <div className={s.infoContainer}>
                    <div className={s.namePhoneContainer}>
                        <label htmlFor='name' className={`${s.labelDateTimeWishes}`}>
                        name
                        <input 
                            className={s.inputDateTime}
                            {...register('name', {required: true})}
                            type='name'
                            value={formData.name || ''}
                            onChange={(e) => handleFieldValue('name', e.target.value)}
                            aria-invalid={errors.name ? 'true' : 'false'}
                        />
                        </label>
                        {/* {errors.name?.type === 'required' && !isDateFilled && (<p role='alert' className={`${s.error}`}>Name is required!</p>)} */}
                    </div>
                    <div className={s.namePhoneContainer}>
                        <label htmlFor='phone' className={`${s.labelDateTimeWishes}`}>
                        phone
                        <input 
                            className={s.inputDateTime}
                            {...register('phone', {required: true})}
                            type='phone'
                            value={formData.phone || ''}
                            onChange={(e) => handleFieldValue('phone', e.target.value)}
                            aria-invalid={errors.phone ? 'true' : 'false'}
                        />
                        </label>
                        {/* {errors.phone?.type === 'required' && !isDateFilled && (<p role='alert' className={`${s.error}`}>Phone is required!</p>)} */}
                    </div>
                </div>
                    
                 
                <Button
                text={'accept'}
                className={`${s.btnAdd} mx-auto`}
                // disabled={!isValid || isSubmitting}
                // onClick={handlePlaceOrderStep3}
                // className={`${s.btnAdd} mx-auto mt-10 ${buttonStyle}`}
                />
            </form>
        </div>
    );
  }