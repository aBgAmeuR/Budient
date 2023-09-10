import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logox64.webp';
import defaultProfilePicture from '@/assets/img/default-profile-picture.png';
import { UserNav } from './ui/page-header/user-nav';

type Props = {};

export default function pageHeader({}: Props) {
  return (
    <header>
      <div className="logo">
        <Image src={logo} alt="logo" height={40} width={40} />
        <h1>Budient</h1>
      </div>
      <div className="searchBar">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z"
            fill="#808191"
          />
        </svg>
        <input type="text" name="search" placeholder="Search Property. Customer etc" />
      </div>
      <div className="profileContainer">
        <UserNav />
        {/* <Image src={defaultProfilePicture} alt="Profil picture" height={40} width={40} />
        <div className="infos">
          <h2>Antoine JOSSET</h2>
          <p>Full Stack Web Developer</p>
        </div> */}
      </div>
    </header>
  );
}
