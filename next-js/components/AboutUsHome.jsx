// import Animation from "./Animation"
import { useWindowSize } from 'react-use';

export default function AboutUsHome() {
    const { width } = useWindowSize();
    const isMobile = width < 767;

    return(
        <>
            {isMobile ?
            (<p>This is mobile view</p>) :
            (<p>This is desktop view</p>)}
        </>
    )
}

{/* <Animation/> */}