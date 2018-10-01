import React from 'react';
import { Link } from 'react-static';
import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors, sizes, Button } from '@stoplight/ui';

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
        'shadow cursor-pointer relative flex flex-col flex-1 h-48 overflow-hidden rounded-md p-6 mx-3 text-left z-10 text-white',
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

const HeroFeature = ({ name, icon }) => {
  return (
    <div className="flex items-center py-3 text-black pl-4 pr-6 mx-3 shadow-md bg-white rounded-md opacity-93">
      <FontAwesomeIcon
        icon={['fas', icon ? icon.name : 'check-circle']}
        className="mr-2 text-green text-lg"
      />
      <h4>{name}</h4>
    </div>
  );
};

const Hero = ({ title, subtitle, cta, bgColor, cards = [], features = [], particles, image }) => {
  const elems = [
    <div key="main" className="relative">
      <div className={cn(headerHeightClass, 'w-100')} />
      <div className={cn('container text-white flex flex-col pt-32 relative z-5 text-center')}>
        <div className="pb-24 mx-auto ">
          <h1>{title}</h1>
          {subtitle && (
            <h2 className={cn('font-default opacity-75 mt-4 text-xl mx-auto max-w-xl')}>
              {subtitle}
            </h2>
          )}
        </div>

        {cta && (
          <a className=" pb-24 mx-auto" href="https://next.stoplight.io/join">
            <Button
              color={colors[cta.color] || colors.purple}
              size={sizes.xl}
              className="rounded-md shadow-md"
            >
              {cta.name}
            </Button>
          </a>
        )}

        {features.length ? (
          <div className="flex mx-auto pb-24">
            {features.map((feature, i) => (
              <HeroFeature key={i} {...feature} />
            ))}
          </div>
        ) : null}

        {cards.length ? (
          <div className="flex mx-auto">
            {cards.map((card, i) => (
              <HeroCard key={i} index={i} {...card} />
            ))}
          </div>
        ) : null}
      </div>

      {particles && (
        <div className="absolute z-1" style={{ left: -100, top: -100, right: -100, bottom: -100 }}>
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
        className={cn('absolute z-0 border-4 border-lighten-300 overflow-hidden', {
          [`bg-${bgColor}`]: bgColor,
          'background-repeat': !particles,
        })}
        style={{
          width: 8000,
          height: 8000,
          left: '50%',
          bottom: image ? -150 : 50,
          marginLeft: -4000,
          borderRadius: !particles ? '0' : '50%',
          backgroundImage: !particles ? `url(/images/patterns/diagonal-stripes.png)` : undefined,
          transform: image ? 'skew(0, -3deg)' : undefined,
        }}
      />
    </div>,
  ];

  if (image) {
    elems.push(
      <div key="image" className="w-2/3 mx-auto relative" style={{ height: 500 }}>
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
