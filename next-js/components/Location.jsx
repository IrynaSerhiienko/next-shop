import Link from 'next/link';
import {HiLocationMarker} from 'react-icons/hi';
import s from '../styles/Location.module.scss';

export default function Location() {
  const location = 'вулиця Ісаакяна, 3, Київ, 02000 My Cake Kyiv';
  const encodedLocation = encodeURIComponent(location); 
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

  return (
    <Link href={googleMapsUrl} target="_blank">
        <div className={s.location}>
            <div className={s.locationIcon}>
                <HiLocationMarker/>
            </div>
            <div className={s.locationText}>kyiv</div>
        </div>
    </Link>
  )
}


