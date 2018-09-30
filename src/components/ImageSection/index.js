import React from 'react';
import cn from 'classnames';

import Section from '../Section';

import { colors, sizes, Button } from '@stoplight/ui';

const ImageSection = ({ title, description, image, rootClassName }) => {
  return (
    <Section rootClassName={cn(rootClassName, 'flex')} paddingClassName={'pt-48 pb-40'}>
      <div className="flex flex-col flex-1 w-1/2 md:w-100 text-right items-end pr-20">
        <h2 className="max-w-xs text-secondary text-right mb-10">{title}</h2>

        <div className="mb-12 pb-12 max-w-md leading-loose text-lg border-b border-darken-50">
          {description}
        </div>

        <a href="https://next.stoplight.io/join">
          <Button color={colors.purple} size={sizes.lg} className="rounded-md shadow">
            Get Started Now
          </Button>
        </a>
      </div>

      <div className="flex flex-col flex-1 w-1/2 md:hidden relative">
        <div
          className="absolute pin bg-left-top bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})`, top: -60, bottom: -200 }}
        />
      </div>
    </Section>
  );
};

export default ImageSection;
