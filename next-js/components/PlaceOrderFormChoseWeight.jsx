import {useForm} from 'react-hook-form'
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataContext';
import { useEffect} from 'react';
import Button from './Button';
import s from '../styles/PlaceOrderFormChoseWeight.module.scss';

const options = ['1,5 kg', '2 kg', '2,5 kg', '3 kg', '3,5 kg', '4 kg', '4,5 kg', '5 kg']; 


export default function PlaceOrderFormChoseWeight({cake}) {
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm({mode: 'onBlur'})
    const {formData, setValues} = useData()
    // const [selectedWeight, setSelectedWeight] = useState('');
    
    const router = useRouter();
    const { id } = router.query;
    // console.log(router.query);

    
    useEffect(() => {
        const savedOption = localStorage.getItem('weight')
        if (savedOption) {
            setValues({ weight: savedOption});
            // setSelectedWeight(savedOption)
            // console.log('formData after update:', JSON.stringify(formData, null, 2));
        }
    }, [])
    

    const onSubmit = (data) => {
        console.log(data)
        // setValues({ weight: ''}); 
        reset();
    };

    const handleSelectValue  = (field, value) => {
        const newFieldValue = value
        localStorage.setItem(field, newFieldValue)
        setValues({[field]: newFieldValue})
    }

    const handlePlaceOrderStep1 = () => {
        router.push(`/menu/${id}/placeOrderStep1`);
        handleSelectValue('selectedImage', cake.image)
        handleSelectValue('selectedName', cake.name)
        // localStorage.setItem('selectedImage', cake.image)
        // setValues({ selectedImage: cake.image });
    };
    
    return (
        <div className={s.formChoseWeightContainer}>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={`${s.selectWrapper}`}>
                    <label htmlFor='weight' className={`${s.label}`}>chose the weight</label>
                    <select
                     className={s.selectContainer}
                     {...register('weight')}
                     value={formData.weight || ''}
                     onChange={(e) => handleSelectValue('weight', e.target.value)}
                     aria-invalid={errors.date ? 'true' : 'false'}
                     >
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <Button disabled={isSubmitting} text={'order'} onClick={handlePlaceOrderStep1} className={`${s.btnAdd}`}/>
            </form>
        </div>
    );
  }