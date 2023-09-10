import {useForm} from 'react-hook-form'
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataContext';
import { useEffect} from 'react';
import Button from './Button';
import s from '../styles/PlaceOrderFormDecor.module.scss';

const radio = ['+ 250 UAH', '+ 550 UAH', '+ 1000 UAH']; 

export default function PlaceOrderFormDecor() {
     const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm({mode: 'onBlur'})
     const {formData, setValues} = useData()

     const router = useRouter()
     const { id } = router.query;

     useEffect(() => {
        // setValues({radio1: localStorage.getItem('radio1')})
        const savedRadio1 = localStorage.getItem('radio1')
        const savedRadio2 = localStorage.getItem('radio2')
        const savedRadio3 = localStorage.getItem('radio3')
        const savedCheckbox = localStorage.getItem('checkbox');

        if (savedRadio1) {
            console.log("savedRadio1>>>", savedRadio1);
            setValues({radio1: savedRadio1})
        }
        if (savedRadio2) {
            console.log(savedRadio2);
            setValues({radio2: savedRadio2})
        }
        if (savedRadio3) {
            console.log(savedRadio3);
            setValues({radio3: savedRadio3})
        }
     }, [])

   
    const onSubmit = (data) => {
        console.log(data);
        // setValues({radio1: '', radio2: '', radio3: '', checkbox: ''})
        reset();
    }
  
    const handleInputValue = (field, value) => {

        Object.keys(formData).forEach((key) => {
            if (key.startsWith('radio') && key !== field) {
                localStorage.removeItem(key);
                setValues({[key]: undefined });
            }
        });

        const newFieldValue = value
        setValues({[field]: newFieldValue})
        localStorage.setItem(field, newFieldValue)
        console.log('newFieldValue>>>', newFieldValue);
        console.log('formData after update:', JSON.stringify(formData, null, 2));
    };

    const handlePlaceOrderStep2 = () => {
        router.push(`/menu/${id}/placeOrderStep2`);
    };
  
    
    return (
        <div className={s.formDecorContainer}>
            <p className={s.title}>please select the type of decor and the need for candles</p>
            <p className={s.subTitle}>* prices for decor are approximate. the final price will be determined after we contact you</p>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={`${s.radioWrapper} flex`}>
                        <input
                        className={s.input}
                        {...register('radio')}
                        type='radio'
                        value={radio[0]}
                        onChange={(e) => handleInputValue('radio1', e.target.value)}
                        aria-invalid={errors.radio1 ? 'true' : 'false'}
                        // checked={radioValue === 'option1'}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.radio}`}>simple decor (berries, leaves)</p>
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
                        onChange={(e) => handleInputValue('radio2', e.target.value)}
                        aria-invalid={errors.radio2 ? 'true' : 'false'}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.radio}`}>medium decoration with macarons, berries, flowers</p>
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
                        onChange={(e) => handleInputValue('radio3', e.target.value)}
                        aria-invalid={errors.radio3 ? 'true' : 'false'}
                        />
                        <span className={s.checkmark}></span>
                        <div className='flex pl-8'>
                            <p className={`${s.radio}`}>individual design (describe your expectations below in as much detail as possible)</p>
                            <span className={s.price}>+ 1000 UAH</span>
                        </div>
                </div>
                <div className={`${s.radioWrapper} flex`}>
                    <input
                    className={s.input}
                    {...register('checkbox')}
                    type='checkbox'
                    // value={formData.checkbox || ''}
                    // checked={formData.checkbox === 'true'}
                    onChange={(e) => handleInputValue('checkbox', e.target.checked ? 'true' : 'false')}
                    aria-invalid={errors.checkbox ? 'true' : 'false'}
                    />
                    <span className={s.checkmarkForCheckbox}></span>
                    <p className={`${s.addCandles} pl-8`}>if you need <b className={`text-xl font-medium`}>candles</b>, please click here, it’s free</p>
                </div>
               <Button disabled={isSubmitting} text={'next step'} onClick={handlePlaceOrderStep2} className={`${s.btnAdd}`}/>
            </form>
        </div>
    );
  }


  //  const [buttonStyle, setButtonStyle] = useState(s.invalidButton); 
    //  const [showErrorMessage, setShowErrorMessage] = useState(false);
    //  const [isRadio1Filled, setIsRadio1Filled] = useState(false);
    //  const [isRadio2Filled, setIsRadio2Filled] = useState(false);
    //  const [isRadio3Filled, setIsRadio3Filled] = useState(false);

    

    // useEffect(() => {
    //     setIsTimeFilled(Boolean(formData.time))
    // }, [formData.time]);

    

    

    // const [radioValue, setRadioValue] = useState('');
    // const [checkboxValue, setCheckboxValue] = useState(false);
    // const [isRadioSelected, setIsRadioSelected] = useState(false);

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
   // setShowErrorMessage(false)
    //   setRadioValue(event.target.value);
    //   localStorage.setItem('radioValue', event.target.value)
    //   localStorage.setItem('radioValue', JSON.stringify(event.target.value))
    //   setIsRadioSelected(true);