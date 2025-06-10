'use client';
// import Link, {LinkProps} from 'next/link';
// import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink  = ({children, href}) => {
    const router = useRouter();
    const handleTransition = async(e) => {
e.preventDefault();
const body = document.querySelector('body');
body?.classList.add('page-transition');
await sleep(200);
router.push(href);
await sleep(200);

body?.classList.remove('page-transition');
    }
  return (
<Link href={href} onClick={handleTransition}>{children}</Link>
  )
}

export default TransitionLink;
