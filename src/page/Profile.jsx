import React from 'react';
import { ProfileContext } from '../components/Profile/ProfileContext.jsx';
import ProfileAddress from '../components/Profile/ProfileAddress.jsx';

export default function Profile() {
  return (
    <>
    <ProfileContext.Provider value="Jl. Mangga No. 1">
      <ProfileAddress />
    </ProfileContext.Provider>
    </>
  );
}
