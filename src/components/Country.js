import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_QUERY } from '../queries/getCountry';
import Holidays from './Holidays';

export default function Country({ ip }) {
  const { data, loading, error } = useQuery(GET_COUNTRY_QUERY, {
    variables: { ip },
  });
  const [country, setCountry] = useState('');
  const [holidays, setHolidays] = useState(null);

  useEffect(() => {
    if (data) {
      setCountry(data.location.country);
      setHolidays(data.location.holidays);
    }
  }, [data, country, holidays]);

  if (loading || !holidays) return <p>Loading your holidays this year...</p>;
  if (error) return <p>{error.message}</p>;

  if (holidays) {
    return (
      <div>
        <h2 className="text-center mb-3">Your holidays in 2021 in {holidays[0].country}</h2>
        <Holidays holidays={holidays} />
      </div>
    );
  }
}
