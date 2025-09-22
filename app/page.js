"use client"

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
const SpaceScene = dynamic(() => import('@/components/SpaceScene'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='bg-gray-950' style={{ height: '100vh', position: 'relative' }}>
        <SpaceScene />
        {/* <div style={{ position: 'absolute', top: '20%', left: '10%', color: 'white' }}>
          <h1>🌌 قصص الطقس الفضائي</h1>
          <p>استمتع بمغامرات مشوقة في عالم الشمس والفضاء!</p>
        </div> */}
      </div>
    </>
  );
}
