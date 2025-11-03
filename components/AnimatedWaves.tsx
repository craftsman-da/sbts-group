export default function AnimatedWaves() {
  return (
    <svg
      viewBox='0 0 1920 1080'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid slice'
      className='absolute inset-0 w-full h-full'
    >
      <defs>
        <linearGradient id='bgGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' style={{ stopColor: '#000000', stopOpacity: 1 }} />
          <stop offset='50%' style={{ stopColor: '#0a1820', stopOpacity: 1 }} />
          <stop
            offset='100%'
            style={{ stopColor: '#070709', stopOpacity: 1 }}
          />
        </linearGradient>

        <radialGradient id='vignette' cx='50%' cy='30%'>
          <stop offset='0%' style={{ stopColor: '#000000', stopOpacity: 0 }} />
          <stop
            offset='50%'
            style={{ stopColor: '#0a1418', stopOpacity: 0.4 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: '#050608', stopOpacity: 0.8 }}
          />
        </radialGradient>

        <filter id='glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <rect width='1920' height='1080' fill='url(#bgGradient)' />

      <g opacity='0.4' stroke='#0a7a9a' strokeWidth='0.5' fill='none'>
        <line x1='0' y1='400' x2='1920' y2='400'>
          <animate
            attributeName='y1'
            values='400;405;400'
            dur='4s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='y2'
            values='400;405;400'
            dur='4s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.6;0.4'
            dur='4s'
            repeatCount='indefinite'
          />
        </line>
        <line x1='0' y1='450' x2='1920' y2='450'>
          <animate
            attributeName='y1'
            values='450;456;450'
            dur='4.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='y2'
            values='450;456;450'
            dur='4.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.6;0.4'
            dur='4.5s'
            repeatCount='indefinite'
          />
        </line>
        <line x1='0' y1='500' x2='1920' y2='500'>
          <animate
            attributeName='y1'
            values='500;507;500'
            dur='5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='y2'
            values='500;507;500'
            dur='5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.6;0.4'
            dur='5s'
            repeatCount='indefinite'
          />
        </line>
        <line x1='0' y1='550' x2='1920' y2='550'>
          <animate
            attributeName='y1'
            values='550;558;550'
            dur='5.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='y2'
            values='550;558;550'
            dur='5.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.6;0.4'
            dur='5.5s'
            repeatCount='indefinite'
          />
        </line>
        <line x1='0' y1='600' x2='1920' y2='600'>
          <animate
            attributeName='y1'
            values='600;609;600'
            dur='6s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='y2'
            values='600;609;600'
            dur='6s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.6;0.4'
            dur='6s'
            repeatCount='indefinite'
          />
        </line>
      </g>

      <g opacity='0.3' stroke='#0a7a9a' strokeWidth='0.5' fill='none'>
        <path d='M 200 300 Q 200 600 150 900'>
          <animate
            attributeName='d'
            values='M 200 300 Q 200 600 150 900;
                    M 200 300 Q 205 600 155 900;
                    M 200 300 Q 200 600 150 900'
            dur='6s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 400 300 Q 400 600 370 900'>
          <animate
            attributeName='d'
            values='M 400 300 Q 400 600 370 900;
                    M 400 300 Q 407 600 377 900;
                    M 400 300 Q 400 600 370 900'
            dur='6.5s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 600 300 Q 600 600 590 900'>
          <animate
            attributeName='d'
            values='M 600 300 Q 600 600 590 900;
                    M 600 300 Q 609 600 599 900;
                    M 600 300 Q 600 600 590 900'
            dur='7s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 800 300 Q 800 600 810 900'>
          <animate
            attributeName='d'
            values='M 800 300 Q 800 600 810 900;
                    M 800 300 Q 811 600 821 900;
                    M 800 300 Q 800 600 810 900'
            dur='7.5s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 1000 300 Q 1000 600 1030 900'>
          <animate
            attributeName='d'
            values='M 1000 300 Q 1000 600 1030 900;
                    M 1000 300 Q 1013 600 1043 900;
                    M 1000 300 Q 1000 600 1030 900'
            dur='8s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 1200 300 Q 1200 600 1250 900'>
          <animate
            attributeName='d'
            values='M 1200 300 Q 1200 600 1250 900;
                    M 1200 300 Q 1215 600 1265 900;
                    M 1200 300 Q 1200 600 1250 900'
            dur='8.5s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 1400 300 Q 1400 600 1470 900'>
          <animate
            attributeName='d'
            values='M 1400 300 Q 1400 600 1470 900;
                    M 1400 300 Q 1417 600 1487 900;
                    M 1400 300 Q 1400 600 1470 900'
            dur='9s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 1600 300 Q 1600 600 1690 900'>
          <animate
            attributeName='d'
            values='M 1600 300 Q 1600 600 1690 900;
                    M 1600 300 Q 1619 600 1709 900;
                    M 1600 300 Q 1600 600 1690 900'
            dur='9.5s'
            repeatCount='indefinite'
          />
        </path>
        <path d='M 1800 300 Q 1800 600 1910 900'>
          <animate
            attributeName='d'
            values='M 1800 300 Q 1800 600 1910 900;
                    M 1800 300 Q 1821 600 1931 900;
                    M 1800 300 Q 1800 600 1910 900'
            dur='10s'
            repeatCount='indefinite'
          />
        </path>
      </g>

      <path
        fill='none'
        stroke='#0dd9ff'
        strokeWidth='2'
        opacity='0.8'
        filter='url(#glow)'
      >
        <animate
          attributeName='d'
          values='M -500 400 Q 480 340 960 400 T 2420 400;
                  M -500 400 Q 480 460 960 400 T 2420 400;
                  M -500 400 Q 480 340 960 400 T 2420 400'
          dur='8s'
          repeatCount='indefinite'
        />
      </path>

      <path
        fill='none'
        stroke='#0a9fb8'
        strokeWidth='1.5'
        opacity='0.6'
        filter='url(#glow)'
      >
        <animate
          attributeName='d'
          values='M -500 500 Q 480 464 960 500 T 2420 500;
                  M -500 500 Q 480 536 960 500 T 2420 500;
                  M -500 500 Q 480 464 960 500 T 2420 500'
          dur='10s'
          repeatCount='indefinite'
        />
      </path>

      <path fill='none' stroke='#086d84' strokeWidth='1' opacity='0.4'>
        <animate
          attributeName='d'
          values='M -500 600 Q 480 576 960 600 T 2420 600;
                  M -500 600 Q 480 624 960 600 T 2420 600;
                  M -500 600 Q 480 576 960 600 T 2420 600'
          dur='12s'
          repeatCount='indefinite'
        />
      </path>

      <g opacity='0.6'>
        <circle cx='300' cy='400' r='2' fill='#0dd9ff'>
          <animate
            attributeName='cy'
            values='400;600;400'
            dur='7s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.6;1;0.6'
            dur='7s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='800' cy='500' r='2' fill='#0dd9ff'>
          <animate
            attributeName='cy'
            values='500;350;500'
            dur='9s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.6;1;0.6'
            dur='9s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='1400' cy='450' r='2' fill='#0dd9ff'>
          <animate
            attributeName='cy'
            values='450;550;450'
            dur='8s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.6;1;0.6'
            dur='8s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='1700' cy='520' r='2' fill='#0dd9ff'>
          <animate
            attributeName='cy'
            values='520;420;520'
            dur='10s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.6;1;0.6'
            dur='10s'
            repeatCount='indefinite'
          />
        </circle>
      </g>
    </svg>
  );
}
