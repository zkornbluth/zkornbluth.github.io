import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CertificationBadge({ certification, alt, link }) {
    return (
        <Link href={link} rel="noopener noreferrer" target="_blank">
            <Image
                src={certification}
                alt={alt}
                title={alt}
                width={50}
                height={50}
                style={{marginTop: 20, marginRight: 10}}
            />
        </Link>
    )
}