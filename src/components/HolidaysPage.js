import publicIp from 'public-ip';
import { useState, useEffect } from 'react';

import Country from './Country';

export default function HolidaysPage() {
  const [ipAddress, setIp] = useState('');

  useEffect(() => {
    async function getIp() {
      let ip = await publicIp.v4();
      if (ip.length === 0) ip = '86.181.200.161';
      setIp(ip);
    }

    getIp();
  }, []);

  return (
    <div className="container mt-5">
      <Country ip={ipAddress} />
      <p className="small text-center">Erica Melo de Carvalho and Aamir Bakhtiar | 2021</p>
    </div>
  );
}
