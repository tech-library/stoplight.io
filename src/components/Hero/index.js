import React from 'react';
import { Link } from 'react-static';
import cn from 'classnames';

import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';

import { colors, sizes, Button, Icon } from '@stoplight/ui';

import { headerHeightClass } from '../Header';

let Particles;
if (typeof window !== 'undefined') {
  Particles = require('react-particles-js').default;
}

const indexMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
};

const HeroCard = ({ index, title, subtitle, href, color }) => {
  return (
    <Link
      to={href}
      className={cn(
        'HeroBlock',
        'cursor-pointer relative flex flex-col flex-1 h-48 overflow-hidden rounded-md p-6 mx-3 text-left z-10 text-white',
        `block-${indexMap[index]}`,
        `bg-${color}`
      )}
    >
      <h3>{title}</h3>
      <div className="mt-4 leading-loose">{subtitle}</div>
      <div className={cn(`triangle-${indexMap[index]}`, 'platform-block-triangle')} />
    </Link>
  );
};

const Hero = ({ title, subtitle, image, rootClassName = '', cards = [] }) => {
  return (
    <div className="relative">
      <div className="relative">
        <div className={cn(headerHeightClass, 'w-100')} />
        <div className="container text-center text-white flex flex-col pt-32 relative z-5">
          <div className="pb-24">
            <h1>{title}</h1>
            {subtitle && (
              <h2 className="font-default opacity-75 mt-4 text-xl max-w-xl mx-auto">{subtitle}</h2>
            )}
          </div>

          <a className="pb-24 mx-auto" href="https://next.stoplight.io/join">
            <Button color={colors.purple} size={sizes.xl} className="rounded-md shadow-dark">
              Get Started Now <Icon icon={faRocket} className="ml-3" />
            </Button>
          </a>

          {cards.length ? (
            <div className="flex">
              {cards.map((card, i) => (
                <HeroCard key={i} index={i} {...card} />
              ))}
            </div>
          ) : null}
        </div>

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
      </div>

      <div
        className={cn(rootClassName, 'absolute z-0 border-4 border-lighten-300 overflow-hidden')}
        style={{
          width: 8000,
          height: 8000,
          left: '50%',
          bottom: 50,
          marginLeft: -4000,
          borderRadius: '50%',
        }}
      >
        {image && (
          <div
            className="absolute pin bg-center bg-cover bg-no-repeat z-1"
            style={{ backgroundImage: `url(${image})`, bottom: -60 }}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
