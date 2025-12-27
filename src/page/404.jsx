import React from 'react';
import { useParams } from 'react-router';

export default function NotFound() {
    const params = useParams()

    return (
    <>
      <h1>404 - {params['*']} Page Not Found</h1>
    </>
  );
}