import Link from 'next/link'
import Image from 'next/image'
import {Badge} from 'react-bootstrap'


export default function Navigation() {
    return (
      <div className="shadow sticky-top p-2 mb-2 bg-danger">
        <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
                <a> 
                    <Image src={'/images/logo.png'} alt='Logo' width={180} height={75} />
                </a>
            </Link>
            <Link href="/warenkorb">
                <a> 
                    <Image src={'/images/warenkorb.png'} alt='Warenkorb' width={30} height={30} />
                    <Badge pill bg='success'>2</Badge>
                </a>
            </Link>
        </div>
      </div>
    );
  }
  