import React from 'react';
import MainNavButton from './ui/main-nav/main-nav-button';

type Props = {};

export default function mainNav({}: Props) {
  return (
    <nav className="Sidebar">
      <ul>
        <li>
          <MainNavButton page="dashboard">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 5H6C5.44772 5 5 5.44772 5 6V8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8V6C9 5.44772 8.55228 5 8 5ZM6 3C4.34315 3 3 4.34315 3 6V8C3 9.65685 4.34315 11 6 11H8C9.65685 11 11 9.65685 11 8V6C11 4.34315 9.65685 3 8 3H6Z"
                fill="#808191"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 15H6C5.44772 15 5 15.4477 5 16V18C5 18.5523 5.44772 19 6 19H8C8.55228 19 9 18.5523 9 18V16C9 15.4477 8.55228 15 8 15ZM6 13C4.34315 13 3 14.3431 3 16V18C3 19.6569 4.34315 21 6 21H8C9.65685 21 11 19.6569 11 18V16C11 14.3431 9.65685 13 8 13H6Z"
                fill="#808191"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 5H16C15.4477 5 15 5.44772 15 6V8C15 8.55228 15.4477 9 16 9H18C18.5523 9 19 8.55228 19 8V6C19 5.44772 18.5523 5 18 5ZM16 3C14.3431 3 13 4.34315 13 6V8C13 9.65685 14.3431 11 16 11H18C19.6569 11 21 9.65685 21 8V6C21 4.34315 19.6569 3 18 3H16Z"
                fill="#808191"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 15H16C15.4477 15 15 15.4477 15 16V18C15 18.5523 15.4477 19 16 19H18C18.5523 19 19 18.5523 19 18V16C19 15.4477 18.5523 15 18 15ZM16 13C14.3431 13 13 14.3431 13 16V18C13 19.6569 14.3431 21 16 21H18C19.6569 21 21 19.6569 21 18V16C21 14.3431 19.6569 13 18 13H16Z"
                fill="#808191"
              />
            </svg>
            <p>Dashboard</p>
          </MainNavButton>
        </li>
        <li>
          <MainNavButton page="analytics">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8923_4291)">
                <path
                  d="M9.94609 1.94531C9.70117 2.00547 9.48203 2.18164 9.36172 2.42227L9.25 2.65V12.0043V21.3586L9.37031 21.5863C9.45625 21.7539 9.54648 21.8527 9.70117 21.9473L9.90742 22.0762H12H14.0926L14.2988 21.9473C14.4535 21.8527 14.5438 21.7539 14.6297 21.5863L14.75 21.3586V12V2.64141L14.6297 2.41367C14.5438 2.24609 14.4535 2.14726 14.2988 2.05273L14.0926 1.92383L12.0902 1.91523C10.9902 1.91094 10.0234 1.92383 9.94609 1.94531ZM12.9023 12V20.25H12H11.0977V12V3.75H12H12.9023V12Z"
                  fill="#6F767E"
                />
                <path
                  d="M17.1562 6.56874C16.9629 6.65468 16.7824 6.82226 16.6793 7.02421C16.602 7.1789 16.5977 7.38085 16.5977 14.2773C16.5977 20.5809 16.6063 21.3887 16.6621 21.5305C16.748 21.7324 16.877 21.8656 17.0918 21.9816C17.2594 22.0719 17.3109 22.0762 19.2359 22.0891C21.5219 22.1019 21.5434 22.1019 21.8355 21.7711C21.9559 21.6336 22.0203 21.509 22.0547 21.3543C22.0891 21.1953 22.0977 19.1543 22.0891 14.1441L22.0762 7.15742L21.9473 6.95117C21.8527 6.79648 21.7539 6.70624 21.5863 6.62031L21.3586 6.49999H19.3305C17.6203 6.50429 17.2852 6.51289 17.1562 6.56874ZM20.25 14.2988V20.25H19.3262H18.4023V14.2988V8.34765H19.3262H20.25V14.2988Z"
                  fill="#6F767E"
                />
                <path
                  d="M2.41367 12.1203C2.24609 12.2063 2.14726 12.2965 2.05273 12.4512L1.92383 12.6574L1.91094 16.8941C1.90234 20.0094 1.91094 21.191 1.94531 21.3629C1.98828 21.5477 2.03984 21.6379 2.20312 21.7969C2.50391 22.102 2.53828 22.1063 4.80273 22.0891L6.73633 22.0762L6.92969 21.9688C7.03281 21.9086 7.17891 21.7754 7.25195 21.6766L7.38086 21.4875L7.39375 17.0875C7.40234 12.8164 7.40234 12.6832 7.3207 12.5242C7.21328 12.318 7.03711 12.1504 6.83516 12.0688C6.69766 12.0086 6.38398 12 4.65664 12H2.64141L2.41367 12.1203ZM5.59766 17.0488V20.25H4.67383H3.75V17.0488V13.8477H4.67383H5.59766V17.0488Z"
                  fill="#6F767E"
                />
              </g>
              <defs>
                <clipPath id="clip0_8923_4291">
                  <rect width="22" height="22" fill="white" transform="translate(1 1)" />
                </clipPath>
              </defs>
            </svg>
            <p>Analytics</p>
          </MainNavButton>
        </li>
        <li>
          <MainNavButton page="categories">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8923_4300)">
                <path d="M13.28 6.37432V10.8148H17.776H22.256L22.16 10.0563C21.568 5.67902 18.48 2.62914 14.048 2.04445L13.28 1.94963V6.37432Z" fill="#6F767E" />
                <path
                  d="M8.96 4.74668C5.616 5.45779 2.736 8.23902 2.08 11.3995C1.808 12.6953 1.952 15.1131 2.368 16.2667C3.648 19.7274 6.976 22.0346 10.688 22.0346C13.216 22.0346 15.248 21.2128 16.944 19.522C18.464 18.0207 19.296 16.3141 19.6 14.0859L19.696 13.3432H15.216H10.72V8.91853V4.49384L10.368 4.50964C10.16 4.50964 9.536 4.62025 8.96 4.74668ZM13.84 14.6074H18.24V14.9551C18.24 15.1605 18.064 15.7294 17.856 16.2351C16.768 18.8267 14.176 20.6598 11.28 20.881C7.6 21.1654 4.224 18.7319 3.28 15.1289C2.272 11.3205 4.592 7.24347 8.448 6.07408L9.36 5.78964L9.408 10.1985L9.44 14.6074H13.84Z"
                  fill="#6F767E"
                />
              </g>
              <defs>
                <clipPath id="clip0_8923_4300">
                  <rect width="24" height="21.3333" fill="white" transform="translate(0 1.33334)" />
                </clipPath>
              </defs>
            </svg>
            <p>Categories</p>
          </MainNavButton>
        </li>
        <li>
          <MainNavButton page="transactions">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8923_4308)">
                <path
                  d="M2.76562 4.02656C2.27812 4.17656 2.01562 4.52344 2.01562 5.01563C2.01562 5.40938 2.26406 5.77031 2.63437 5.925C2.78906 5.99063 3.55781 6 9.50156 6H16.1953L16.4391 5.88281C16.6219 5.79844 16.7203 5.71406 16.8234 5.55C17.0953 5.12813 17.0578 4.69219 16.725 4.33125C16.3828 3.96094 16.8844 3.98438 9.47344 3.98906C5.85 3.98906 2.83125 4.00781 2.76562 4.02656Z"
                  fill="#6F767E"
                />
                <path
                  d="M2.52656 11.1234C2.41406 11.1844 2.25938 11.325 2.17969 11.4328C2.05313 11.6156 2.03906 11.6672 2.03906 11.9953C2.03906 12.3141 2.05313 12.3797 2.16563 12.5437C2.23594 12.6422 2.37188 12.7781 2.47031 12.8437L2.64375 12.9609H12H21.3563L21.5297 12.8437C21.6281 12.7781 21.7641 12.6422 21.8344 12.5437C21.9469 12.3797 21.9609 12.3141 21.9609 12C21.9609 11.6859 21.9469 11.6203 21.8344 11.4562C21.7641 11.3578 21.6281 11.2219 21.5297 11.1562L21.3563 11.0391L12.0469 11.025L2.73281 11.0156L2.52656 11.1234Z"
                  fill="#6F767E"
                />
                <path
                  d="M2.65297 18.0703C2.24516 18.2156 1.98735 18.6375 2.02485 19.0969C2.05297 19.425 2.22172 19.6875 2.51704 19.8609L2.74204 19.9922H7.49985H12.2577L12.4827 19.8609C13.0733 19.5141 13.1577 18.7172 12.6561 18.2625C12.5577 18.1734 12.3936 18.0797 12.2952 18.0516C12.1733 18.0187 10.6077 18 7.47641 18C3.65141 18.0047 2.80297 18.0141 2.65297 18.0703Z"
                  fill="#6F767E"
                />
              </g>
              <defs>
                <clipPath id="clip0_8923_4308">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Transactions</p>
          </MainNavButton>
        </li>
        <li>
          <MainNavButton page="subscription">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5353 23.845C13.3521 23.6711 13.2863 23.4457 13.338 23.1685C13.3615 23.0322 13.4836 22.8772 13.9581 22.3933L14.5501 21.792H12.981C11.2474 21.792 10.6132 21.7497 9.75352 21.5759C8.31126 21.2893 6.82673 20.5893 5.65696 19.6451C5.20126 19.2786 4.34625 18.3907 3.9986 17.9303C2.64091 16.1169 1.92214 13.8573 2.0067 11.668C2.06307 10.2117 2.37783 9.00435 3.04024 7.65605C3.38788 6.96076 3.51942 6.82922 3.89995 6.82922C4.27108 6.82922 4.56235 7.08291 4.60463 7.44465C4.62812 7.59968 4.58584 7.71712 4.32746 8.23859C3.5664 9.7701 3.27983 11.2875 3.45365 12.8566C3.84827 16.4646 6.48848 19.429 9.98371 20.19C10.7119 20.345 11.4072 20.3873 13.0279 20.3732L14.5501 20.3591L13.9863 19.7719C13.6763 19.4477 13.3991 19.1377 13.3709 19.0813C13.2253 18.8135 13.3615 18.4001 13.6528 18.2216C13.836 18.1089 14.1554 18.0995 14.3387 18.1934C14.4091 18.231 15.0198 18.8182 15.6963 19.4994C16.7628 20.5705 16.9272 20.7585 16.9554 20.9135C17.0258 21.2752 16.9648 21.3645 15.7339 22.6235C15.0997 23.2718 14.5125 23.8497 14.4232 23.9013C14.3105 23.9718 14.1883 24 13.9816 24C13.7232 24 13.681 23.9859 13.5353 23.845Z"
                fill="#808191"
              />
              <path
                d="M19.2808 17.1505C19.0553 17.0377 18.9049 16.7981 18.9049 16.5445C18.9049 16.3894 18.9707 16.2062 19.1915 15.7693C19.5157 15.121 19.7881 14.3411 19.9479 13.6177C20.0371 13.1902 20.0512 12.9835 20.0559 12.0674C20.0559 11.1466 20.0418 10.9399 19.9479 10.4795C19.7881 9.69024 19.5579 9.02314 19.1868 8.28557C18.7734 7.46344 18.3647 6.8856 17.7305 6.2232C16.5278 4.97356 15.1748 4.2125 13.4977 3.85076C12.793 3.70043 12.14 3.65815 10.4722 3.65815H8.92663L9.51856 4.25948C9.98366 4.72927 10.1199 4.89839 10.1622 5.04873C10.2467 5.35879 10.1293 5.65475 9.86151 5.81918C9.65011 5.95072 9.26018 5.93663 9.08166 5.79099C9.02059 5.74401 8.42396 5.15208 7.76155 4.47558L6.5495 3.25413V3.00514C6.5495 2.8736 6.57769 2.70448 6.61527 2.63401C6.65285 2.56354 7.24009 1.95282 7.92128 1.27632C8.9971 0.205204 9.18032 0.0454754 9.33535 0.0125902C9.85211 -0.0813676 10.2796 0.364932 10.1669 0.872304C10.134 1.00384 9.99305 1.17297 9.52796 1.64276L8.93603 2.23939L10.8763 2.26288C12.9386 2.29107 13.2581 2.31925 14.2399 2.57294C17.5989 3.44205 20.3049 6.17622 21.1834 9.59628C21.4042 10.4607 21.4888 11.1372 21.4888 12.0439C21.4888 13.6083 21.1693 14.9613 20.4693 16.3659C20.1828 16.9391 20.0794 17.0753 19.8586 17.1693C19.6566 17.2585 19.4781 17.2538 19.2808 17.1505Z"
                fill="#808191"
              />
              <path
                d="M11.4354 16.8733C11.3461 16.8263 11.224 16.7183 11.1676 16.629C11.0737 16.4928 11.0596 16.4082 11.0596 16.0183V15.5626L10.7307 15.5109C10.3126 15.4452 9.95556 15.2713 9.6267 14.9707C9.1851 14.5666 8.94551 14.0264 8.94551 13.4345C8.94551 12.7016 9.30725 12.0439 9.93676 11.6399C10.3408 11.3815 10.5146 11.3486 11.6562 11.3204C12.6099 11.2922 12.7085 11.2828 12.826 11.1936C13.0609 11.0197 13.1454 10.8647 13.1454 10.611C13.1454 10.3479 13.0515 10.1835 12.7978 10.0144C12.6427 9.90635 12.624 9.90635 11.0643 9.90635C9.65489 9.90635 9.46698 9.89695 9.32134 9.82178C8.81867 9.5728 8.81867 8.83053 9.32134 8.58154C9.45758 8.51107 9.61731 8.49698 10.275 8.49698H11.0596V8.03189C11.0596 7.63257 11.0737 7.55271 11.1676 7.41177C11.4542 6.98426 12.0179 6.99366 12.3468 7.43056C12.4219 7.53391 12.4454 7.65136 12.4595 8.0178L12.4783 8.47819L12.779 8.52987C13.6951 8.68959 14.3857 9.38018 14.5407 10.2963C14.6816 11.1325 14.2071 12.0862 13.4649 12.462C13.028 12.6828 12.7602 12.7251 11.7877 12.7251C11.0079 12.7251 10.8716 12.7345 10.7307 12.8143C10.2562 13.0633 10.2233 13.7351 10.6696 14.0264C10.7824 14.1016 10.9609 14.111 12.4501 14.1344C14.0286 14.1579 14.1132 14.1626 14.2353 14.2566C14.4655 14.4257 14.5501 14.5854 14.5548 14.8344C14.5595 15.0881 14.4749 15.2478 14.2353 15.4217C14.1179 15.5109 14.0286 15.5203 13.2911 15.5344L12.4783 15.5485L12.4595 16.0136C12.4454 16.5116 12.3938 16.629 12.1307 16.8263C11.9569 16.9579 11.6374 16.9767 11.4354 16.8733Z"
                fill="#808191"
              />
            </svg>

            <p>Subscription</p>
          </MainNavButton>
        </li>
        <li>
          <MainNavButton page="profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
                fill="#808191"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33284 17.7154 5.44116 19.5488C7.19693 21.0756 9.49052 22 12 22C14.4162 22 16.6323 21.143 18.3609 19.7165C18.4276 19.6614 18.4936 19.6055 18.5588 19.5488ZM12.2579 19.9959C12.1723 19.9986 12.0863 20 12 20C11.9914 20 11.9827 20 11.9741 20C11.8937 19.9997 11.8135 19.9983 11.7337 19.9956C10.3914 19.9517 9.13273 19.5772 8.03655 18.9508C8.95181 17.7632 10.3882 17 12 17C13.6118 17 15.0482 17.7632 15.9634 18.9508C14.865 19.5785 13.6033 19.9533 12.2579 19.9959ZM17.5624 17.7498C16.2832 16.0781 14.2675 15 12 15C9.73249 15 7.7168 16.0781 6.43759 17.7498C4.93447 16.2953 4 14.2568 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.2568 19.0655 16.2953 17.5624 17.7498Z"
                fill="#808191"
              />
            </svg>
            <p>My Profile</p>
          </MainNavButton>
        </li>
      </ul>
    </nav>
  );
}
