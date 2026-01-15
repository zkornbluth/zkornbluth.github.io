import Image from 'next/image';
import Link from 'next/link';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

export default function BottomLinks() {
  return (
    <div className='bottom-links'>
      <Link href="mailto:zkornbluth2007@gmail.com" title="Send me an email">
        <Image
          src={email}
          alt="Email Logo"
          width={30}
          height={30}
          className='bottom-link'
        />
      </Link>
      <Link href="https://github.com/zkornbluth" rel="noopener noreferrer" target="_blank" title="View my GitHub Profile">
        <Image
          src={github}
          alt="GitHub Logo"
          width={30}
          height={30}
          className='bottom-link'
        />
      </Link>
      <Link href="https://linkedin.com/in/zachary-kornbluth/" rel="noopener noreferrer" target="_blank" title="View my LinkedIn Profile">
        <Image
          src={linkedin}
          alt="LinkedIn Logo"
          width={30}
          height={30}
          className='bottom-link'
        />
      </Link>
    </div>
  )
}