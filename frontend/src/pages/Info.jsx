import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Info() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const sub = params.get('sub');
  const name = params.get('name');
  const given_name = params.get('given_name');
  const picture = params.get('picture');
  const email = params.get('email');
  console.log('Avatar URL:', picture);


  return (
    <div>
      <h2>Bienvenue, {name} ({given_name})</h2>
      <p>ID Google: {sub}</p>
      <p>Email: {email}</p>
      {picture && <img src={picture} alt={`${name}'s avatar`} />}
    </div>
  );
}
