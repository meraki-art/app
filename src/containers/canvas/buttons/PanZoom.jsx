import React from 'react';
import { usePanZoom } from '../../../state/UserProvider';

export default function PinchZoom() {
  const { panZoom } = usePanZoom();
  return (
    <>
      {panZoom ? (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="52" height="52" fill="#E5E5E5" />
          <g id="Pan and zoom mode" clipPath="url(#clip0_130_410)">
            <rect
              width="360"
              height="640"
              transform="translate(-219.703 -14.3396)"
              fill="white"
            />
            <g id="Top Control Bar" filter="url(#filter0_d_130_410)">
              <rect
                width="360"
                height="80"
                transform="translate(-219.703 -14.3396)"
                fill="white"
              />
              <g id="Button">
                <rect
                  id="Body"
                  x="6.29688"
                  y="5.6604"
                  width="40"
                  height="40"
                  rx="10"
                  fill="#F99D1F"
                />
                <rect
                  id="Outline"
                  x="2.29675"
                  y="1.6604"
                  width="48.0002"
                  height="48.0002"
                  rx="10"
                  stroke="#F99D1F"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <g id="Icon">
                  <path
                    id="Vector"
                    d="M34.7426 36.9104H26.2969C25.857 36.9104 25.0469 36.4742 23.8665 35.6017C22.6862 34.7293 21.8541 33.9925 21.3702 33.3913C20.857 32.7315 20.2118 32.1377 19.4347 31.6098C18.6576 31.082 17.9611 30.6934 17.3453 30.4441C16.7294 30.1949 16.1942 29.9566 15.7397 29.7293C15.2852 29.502 15.0579 29.3151 15.0579 29.1685C15.0579 28.5086 15.2668 27.9918 15.6847 27.6179C16.1026 27.244 16.5975 27.057 17.1693 27.057C17.4626 27.057 17.8475 27.1303 18.324 27.277C18.8006 27.4236 19.2331 27.5739 19.6217 27.7278C20.0102 27.8818 20.5931 28.1274 21.3702 28.4647C21.4875 28.5086 21.7991 28.7542 22.3049 29.2015C22.8108 29.6487 23.203 29.8723 23.4816 29.8723C23.8042 29.8723 24.3027 29.711 24.9772 29.3884C25.6517 29.0658 26.2749 28.6736 26.8467 28.2117C27.4186 27.7498 27.7045 27.3649 27.7045 27.057V25.6494C27.7045 24.3737 27.6312 23.2154 27.4846 22.1743C27.3379 21.1333 27.1767 20.3525 27.0007 19.832C26.8247 19.3114 26.6635 18.8166 26.5168 18.3474C26.3702 17.8781 26.2969 17.5042 26.2969 17.2256V16.3019L26.3079 15.785L26.3739 15.2572L26.4948 14.8283L26.6928 14.5094L27.0007 14.4104C27.7778 14.4104 28.3497 14.7147 28.7162 15.3232C29.0828 15.9317 29.6033 17.255 30.2778 19.2931C30.3805 19.6157 30.4611 19.8576 30.5198 20.0189C30.725 20.6347 30.945 21.1773 31.1796 21.6465C31.4142 22.1157 31.5975 22.4309 31.7294 22.5922L31.9274 22.8342C32.1473 22.9515 32.4259 23.0981 32.7632 23.274C33.1004 23.45 33.6466 23.7872 34.4017 24.2858C35.1569 24.7843 35.7397 25.2388 36.1503 25.6494C36.4288 25.928 36.7331 26.4852 37.063 27.321C37.3929 28.1567 37.5579 28.7726 37.5579 29.1685V31.9837C37.5579 32.6582 37.5066 33.2667 37.4039 33.8092C37.3013 34.3517 37.1657 34.788 36.997 35.1179C36.8284 35.4478 36.6451 35.7374 36.4472 35.9866C36.2492 36.2359 36.0513 36.4155 35.8533 36.5255C35.6554 36.6355 35.4721 36.7234 35.3035 36.7894C35.1349 36.8554 34.9992 36.8957 34.8966 36.9104H34.7426ZM24.8893 19.3151C24.8893 19.5204 24.8233 19.689 24.6913 19.821C24.5593 19.9529 24.3907 20.0189 24.1854 20.0189H21.3702C21.1796 20.0189 21.0146 19.9529 20.8753 19.821C20.736 19.689 20.6664 19.5204 20.6664 19.3151V16.5218C20.6664 16.3166 20.736 16.1479 20.8753 16.016C21.0146 15.884 21.1796 15.818 21.3702 15.818C21.4728 15.818 21.6268 15.9207 21.8321 16.1259C22.0374 16.3312 22.2206 16.5292 22.3819 16.7198L22.6019 17.0277L23.6356 16.016C23.7822 15.8693 23.9545 15.796 24.1525 15.796C24.3504 15.796 24.5227 15.8693 24.6693 16.016C24.8159 16.1626 24.8893 16.3349 24.8893 16.5328C24.8893 16.7308 24.8159 16.9031 24.6693 17.0497L23.6356 18.0834C23.6356 18.0688 23.7419 18.1457 23.9545 18.3144C24.1671 18.483 24.3761 18.6699 24.5813 18.8752C24.7866 19.0805 24.8893 19.2271 24.8893 19.3151ZM18.5769 25.6494C18.4743 25.6494 18.3167 25.5468 18.1041 25.3415C17.8915 25.1362 17.7118 24.9309 17.5652 24.7256L17.3233 24.3957L16.2896 25.4295C16.1429 25.5761 15.9706 25.6494 15.7727 25.6494C15.5747 25.6494 15.4025 25.5761 15.2558 25.4295C15.1092 25.2828 15.0359 25.1105 15.0359 24.9126C15.0359 24.7147 15.1092 24.5424 15.2558 24.3957L16.2676 23.362C16.1796 23.3034 16.0696 23.2227 15.9376 23.1201C15.8057 23.0174 15.6261 22.8525 15.3988 22.6252C15.1715 22.3979 15.0579 22.233 15.0579 22.1303C15.0579 21.9397 15.1239 21.7748 15.2558 21.6355C15.3878 21.4962 15.5564 21.4265 15.7617 21.4265H18.5549C18.7602 21.4265 18.9289 21.4962 19.0608 21.6355C19.1928 21.7748 19.2588 21.9397 19.2588 22.1303V24.9456C19.2588 25.1509 19.1928 25.3195 19.0608 25.4515C18.9289 25.5834 18.7676 25.6494 18.5769 25.6494Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_130_410"
              x="-249.703"
              y="-42.3396"
              width="420"
              height="140"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_130_410"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_130_410"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_130_410">
              <rect
                width="360"
                height="640"
                fill="white"
                transform="translate(-219.703 -14.3396)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="49" height="49" fill="#E5E5E5" />
          <g id="Pan and zoom mode" clipPath="url(#clip0_130_410)">
            <rect
              width="360"
              height="640"
              transform="translate(-221.703 -15.3396)"
              fill="white"
            />
            <g id="Top Control Bar">
              <g id="Button">
                <g id="Icon">
                  <path
                    id="Vector"
                    d="M32.7425 35.9104H24.2968C23.8569 35.9104 23.0468 35.4742 21.8664 34.6017C20.6861 33.7293 19.8539 32.9925 19.3701 32.3913C18.8569 31.7315 18.2117 31.1377 17.4346 30.6098C16.6575 30.082 15.961 29.6934 15.3452 29.4441C14.7293 29.1949 14.1941 28.9566 13.7396 28.7293C13.285 28.502 13.0578 28.3151 13.0578 28.1685C13.0578 27.5086 13.2667 26.9918 13.6846 26.6179C14.1025 26.244 14.5974 26.057 15.1692 26.057C15.4625 26.057 15.8473 26.1303 16.3239 26.277C16.8004 26.4236 17.233 26.5739 17.6215 26.7278C18.0101 26.8818 18.593 27.1274 19.3701 27.4647C19.4874 27.5086 19.799 27.7542 20.3048 28.2015C20.8107 28.6487 21.2029 28.8723 21.4815 28.8723C21.8041 28.8723 22.3026 28.711 22.9771 28.3884C23.6516 28.0658 24.2748 27.6736 24.8466 27.2117C25.4185 26.7498 25.7044 26.3649 25.7044 26.057V24.6494C25.7044 23.3737 25.6311 22.2154 25.4844 21.1743C25.3378 20.1333 25.1765 19.3525 25.0006 18.832C24.8246 18.3114 24.6633 17.8166 24.5167 17.3474C24.3701 16.8781 24.2968 16.5042 24.2968 16.2256V15.3019L24.3078 14.785L24.3737 14.2572L24.4947 13.8283L24.6927 13.5094L25.0006 13.4104C25.7777 13.4104 26.3495 13.7147 26.7161 14.3232C27.0827 14.9317 27.6032 16.255 28.2777 18.2931C28.3803 18.6157 28.461 18.8576 28.5196 19.0189C28.7249 19.6347 28.9449 20.1773 29.1795 20.6465C29.4141 21.1157 29.5973 21.4309 29.7293 21.5922L29.9273 21.8342C30.1472 21.9515 30.4258 22.0981 30.763 22.274C31.1003 22.45 31.6465 22.7872 32.4016 23.2858C33.1567 23.7843 33.7396 24.2388 34.1501 24.6494C34.4287 24.928 34.733 25.4852 35.0629 26.321C35.3928 27.1567 35.5578 27.7726 35.5578 28.1685V30.9837C35.5578 31.6582 35.5064 32.2667 35.4038 32.8092C35.3012 33.3517 35.1655 33.788 34.9969 34.1179C34.8283 34.4478 34.645 34.7374 34.4471 34.9866C34.2491 35.2359 34.0512 35.4155 33.8532 35.5255C33.6553 35.6355 33.472 35.7234 33.3034 35.7894C33.1347 35.8554 32.9991 35.8957 32.8965 35.9104H32.7425ZM22.8891 18.3151C22.8891 18.5204 22.8232 18.689 22.6912 18.821C22.5592 18.9529 22.3906 19.0189 22.1853 19.0189H19.3701C19.1795 19.0189 19.0145 18.9529 18.8752 18.821C18.7359 18.689 18.6663 18.5204 18.6663 18.3151V15.5218C18.6663 15.3166 18.7359 15.1479 18.8752 15.016C19.0145 14.884 19.1795 14.818 19.3701 14.818C19.4727 14.818 19.6267 14.9207 19.832 15.1259C20.0372 15.3312 20.2205 15.5292 20.3818 15.7198L20.6017 16.0277L21.6355 15.016C21.7821 14.8693 21.9544 14.796 22.1523 14.796C22.3503 14.796 22.5226 14.8693 22.6692 15.016C22.8158 15.1626 22.8891 15.3349 22.8891 15.5328C22.8891 15.7308 22.8158 15.9031 22.6692 16.0497L21.6355 17.0834C21.6355 17.0688 21.7418 17.1457 21.9544 17.3144C22.167 17.483 22.3759 17.6699 22.5812 17.8752C22.7865 18.0805 22.8891 18.2271 22.8891 18.3151ZM16.5768 24.6494C16.4742 24.6494 16.3166 24.5468 16.1039 24.3415C15.8913 24.1362 15.7117 23.9309 15.5651 23.7256L15.3232 23.3957L14.2894 24.4295C14.1428 24.5761 13.9705 24.6494 13.7726 24.6494C13.5746 24.6494 13.4023 24.5761 13.2557 24.4295C13.1091 24.2828 13.0358 24.1105 13.0358 23.9126C13.0358 23.7147 13.1091 23.5424 13.2557 23.3957L14.2674 22.362C14.1795 22.3034 14.0695 22.2227 13.9375 22.1201C13.8056 22.0174 13.6259 21.8525 13.3987 21.6252C13.1714 21.3979 13.0578 21.233 13.0578 21.1303C13.0578 20.9397 13.1237 20.7748 13.2557 20.6355C13.3877 20.4962 13.5563 20.4265 13.7616 20.4265H16.5548C16.7601 20.4265 16.9287 20.4962 17.0607 20.6355C17.1927 20.7748 17.2586 20.9397 17.2586 21.1303V23.9456C17.2586 24.1509 17.1927 24.3195 17.0607 24.4515C16.9287 24.5834 16.7674 24.6494 16.5768 24.6494Z"
                    fill="#393939"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_130_410">
              <rect
                width="360"
                height="640"
                fill="white"
                transform="translate(-221.703 -15.3396)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
}
