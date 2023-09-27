import Image from 'next/image';
import { useState } from 'react';
import ModalChangeContent from './ModalChangeContent';
import s from '../styles/EditDeleteIcons.module.scss';

// import Link from 'next/link';
// import Modal from './Modal';

export default function  EditDeleteIcons() {
    const [modal, setModal] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        console.log('click');
        setModal(!modal);
        // setIsModalOpen(true);
    }


    if (typeof window !== 'undefined') {
        if(modal) {
            document.body.classList.add('activeModal')
        } else {
            document.body.classList.remove('activeModal')
        }
    }
    

  return (
    <div className={s.editDeleteIconsContainer}>
        {/* <Link href='/'> */}
        {/* <button className={s.icon} onClick={openModal}> */}
        <button onClick={toggleModal} className={s.btnEditModal}>
            <Image
                alt='editIcon'
                src='/img/place_order/correctOrder.svg'
                fill
            />
            {/* {isModalOpen && <Modal/>} */}
        </button>
        {modal && (
            <div className={s.modal}>
                    <div onClick={toggleModal} className={s.overlay}></div>
                    <div className={s.modalContent}>
                        <ModalChangeContent/>
                        <button className={s.closeModal} onClick={toggleModal}></button>
                    </div>
            </div>
        )}
        {/* </Link> */}
            <div className={s.iconLine}>
                    <Image
                        alt='lineIcon'
                        src='/img/place_order/line.svg'
                        fill
                    />
            </div>
        {/* <Link href='/'> */}
            <div className={s.deleteIconContainer}>
                <Image
                    className={s.deleteIcon}
                    alt='deleteIcon'
                    // src='/img/place_order/deleteOrder.svg'
                    src='/img/place_order/trash-can-regular.svg'
                    fill
                />
            </div>
        {/* </Link> */}
    </div> 
  )
}


