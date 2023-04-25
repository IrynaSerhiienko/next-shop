import Link from 'next/link';
import {HiLocationMarker} from 'react-icons/hi';
import s from '../styles/Location.module.scss';

export default function Location() {
  return (
    <Link href='/'>
        <div className={s.location}>
            <div className={s.locationIcon}>
                <HiLocationMarker/>
            </div>
            <div className={s.locationText}>kyiv</div>
        </div>
    </Link>
  )
}


