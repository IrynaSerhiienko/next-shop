import { useState } from "react";
import s from '@/styles/Modal.module.scss'

export default function Modal() {

    const [modal, setModal] = useState(true)

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('activModal')
    } else {
        document.body.classList.remove('activModal')
    }


  return (
    <div>
        {/* <button onClick={toggleModal} className={s.btnModal}></button> */}

        {modal && (
            <div className={s.modal}>
                <div onClick={toggleModal} className={s.overlay}></div>
                <div className={s.modalContent}></div>
                <button className={s.closeModal} onClick={toggleModal}>X</button>
            </div>
        )}
      
    </div>
  )
}


