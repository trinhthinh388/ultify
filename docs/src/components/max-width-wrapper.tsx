import classNames from 'classnames';
import React from 'react';

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'nx-mx-auto nx-flex nx-max-w-[90rem] nx-gap-2 nx-py-2 nx-px-4 nx-flex',
        className,
      )}
    >
      {children}
    </div>
  );
};
