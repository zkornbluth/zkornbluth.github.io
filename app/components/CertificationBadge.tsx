import React from 'react';
import Image from 'next/image';

export default function CertificationBadge({ certification, alt }) {
    return (
        <Image
            src={certification}
            alt={alt}
            width={50}
            height={50}
            style={{marginTop: 20, marginRight: 10}}
        />
    )
}