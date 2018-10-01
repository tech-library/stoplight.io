import React from 'react';
import cn from 'classnames';

import Section from '@components/Section';

import { colors, sizes, Button } from '@stoplight/ui';

const ImageSection = ({ title, cta, description, image, rootClassName }) => {
  return (
    <Section rootClassName={cn(rootClassName, 'flex')} paddingClassName={'pt-48 pb-40'}>
      <div className="flex flex-col flex-1 w-1/2 md:w-100 text-right items-end pr-20">
        <h2 className="max-w-sm text-secondary text-right mb-10 text-3xl">{title}</h2>

        <div className="mb-12 pb-12 max-w-md leading-loose text-lg border-b border-darken-50">
          {description}
        </div>

        {cta && (
          <a href="https://next.stoplight.io/join">
            <Button
              color={colors[cta.color] || colors.purple}
              size={sizes.lg}
              className="rounded-md shadow"
            >
              {cta.name}
            </Button>
          </a>
        )}
      </div>

      <div className="flex-1 w-1/2 md:hidden relative">
        <div
          className="absolute pin bg-left-top bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})`, top: -60, bottom: -200 }}
        />
      </div>
    </Section>
  );
};

export default ImageSection;
