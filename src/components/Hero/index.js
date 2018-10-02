import React from 'react';
import { Link } from 'react-static';
import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CallToAction from '@components/CallToAction';
import { headerHeightClass } from '@components/Header';

let Particles;
if (typeof window !== 'undefined') {
  Particles = require('react-particles-js').default;
}

const indexMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
};

const HeroCard = ({ index, title, subtitle, href, bgColor, icon }) => {
  return (
    <Link
      to={href}
      className={cn(
        'HeroBlock',
        'md:mb-6',
        'shadow cursor-pointer relative flex flex-col flex-1 h-48 md:h-40 overflow-hidden rounded-md p-6 mx-3 text-left z-10 text-white',
        `block-${indexMap[index]}`,
        {
          [`bg-${bgColor}`]: bgColor,
        }
      )}
    >
      <div className="flex items-center">
        {icon && <FontAwesomeIcon icon={['fas', icon.name]} className="mr-3" />} <h3>{title}</h3>
      </div>
      {subtitle && <div className="mt-4 leading-loose">{subtitle}</div>}
      <div className={cn(`triangle-${indexMap[index]}`, 'platform-block-triangle')} />
    </Link>
  );
};

const HeroFeature = ({ name, icon, href, color }) => {
  const className = cn(
    'flex items-center py-3 text-grey-darkest pl-4 pr-6 sm:m-3 mx-3 shadow-md bg-white rounded-md',
    {
      'hover:opacity-93 cursor-pointer': href,
      'cursor-default': !href,
    }
  );

  const elems = [
    <FontAwesomeIcon
      key="1"
      icon={['fas', icon ? icon.name : 'check-circle']}
      className={cn('mr-2 text-lg', `text-${color || 'green'}`)}
    />,
    <h4 key="2" className="font-semibold">
      {name}
    </h4>,
  ];

  let elem;
  if (href) {
    elem = (
      <a href={href} className={className}>
        {elems}
      </a>
    );
  } else {
    elem = <div className={className}>{elems}</div>;
  }

  return <div className="sm:w-1/2">{elem}</div>;
};

const Hero = ({
  title,
  subtitle,
  cta,
  bgColor,
  cards = [],
  features = [],
  particles,
  image,
  skew,
  bowl,
  containerClassName,
}) => {
  const elems = [
    <div key="main" className="relative">
      <div className={cn(headerHeightClass, 'w-100')} />
      <div
        className={cn(
          containerClassName,
          'container text-white flex flex-col pt-32 md:pt-24 relative z-5 text-center'
        )}
      >
        <div
          className={cn(
            'mx-auto',
            !cta && !features.length && !cards.length ? 'pb-48 md:pb-40' : 'pb-24 md:pb-20'
          )}
        >
          <h1>{title}</h1>
          {subtitle && (
            <h2 className={cn('font-default opacity-75 mt-4 md:mt-6 text-xl mx-auto max-w-lg')}>
              {subtitle}
            </h2>
          )}
        </div>

        {cta && <CallToAction className="pb-24 mx-auto md:pb-20" size="xl" {...cta} />}

        {features.length ? (
          <div className="flex flex-wrap mx-auto pb-24 md:pb-16">
            {features.map((feature, i) => (
              <HeroFeature key={i} color={bgColor} {...feature} />
            ))}
          </div>
        ) : null}

        {cards.length ? (
          <div className="flex mx-auto md:flex-col">
            {cards.map((card, i) => (
              <HeroCard key={i} index={parseInt(i) + 1} {...card} />
            ))}
          </div>
        ) : null}
      </div>

      {particles && (
        <div
          className="absolute z-1 sm:hidden"
          style={{ left: -100, top: -100, right: -100, bottom: -100 }}
        >
          {Particles && (
            <Particles
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              params={{
                fps_limit: 15,
                retina_detect: false, // possible performance issues when true
                particles: {
                  number: {
                    value: 160,
                    density: {
                      enable: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      speed: 4,
                      size_min: 0.3,
                    },
                  },
                  line_linked: {
                    enable: false,
                  },
                  move: {
                    random: true,
                    speed: 1,
                    direction: 'top',
                    out_mode: 'out',
                  },
                },
              }}
            />
          )}
        </div>
      )}

      <div
        className={cn('absolute z-0 border-4 border-lighten-300 overflow-hidden sm:hidden', {
          [`bg-${bgColor}`]: bgColor,
          'background-repeat': !particles,
        })}
        style={{
          width: 8000,
          height: 8000,
          left: '50%',
          bottom: image ? -150 : 50,
          marginLeft: -4000,
          borderRadius: !bowl ? '0' : '50%',
          backgroundImage: !particles ? `url(/images/patterns/diagonal-stripes.png)` : undefined,
          transform: skew || image ? `skew(0, ${skew || '-3deg'})` : undefined,
        }}
      />

      <div
        className={cn(
          'absolute pin z-0 border-4 border-lighten-300 overflow-hidden sm:block hidden',
          {
            [`bg-${bgColor}`]: bgColor,
            'background-repeat': true,
          }
        )}
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(/images/patterns/diagonal-stripes.png)`,
        }}
      />

      <div
        className={cn('absolute pin z-0')}
        style={{
          background: 'linear-gradient(to right top, transparent, rgba(134, 218, 254, 0.1))',
          bottom: image ? -200 : 0,
        }}
      />
    </div>,
  ];

  if (image) {
    elems.push(
      <div key="image" className="sm:hidden w-2/3 mx-auto relative" style={{ height: 500 }}>
        <div
          className="absolute pin bg-left-top bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    );
  }

  return elems;
};

export default Hero;
