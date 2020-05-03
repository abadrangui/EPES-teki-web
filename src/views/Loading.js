import React from 'react';
import { Orbitals } from "react-spinners-css";

export default function Loading() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <Orbitals color="#ab47bc" />
        </div>
    );
}