import { ReactNode } from 'react';
import { MaxWidthWrapper } from './max-width-wrapper';
import { StackIcon } from './icons/stack';

export const SectionCard = ({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) => {
  return (
    <div>
      <div>
        <div>{icon}</div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export const HomePage = () => {
  return (
    <MaxWidthWrapper className="flex flex-col">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="font-display font-black text-[min(4.375rem,max(8vw,2.5rem))] tracking-wide mt-[3.4rem]">
          Ultify
        </h1>
        <p className="text-[min(1.3rem,max(3.5vw,1.2rem))] mt-[1.3em]">
          A modern{' '}
          <span className="bg-[#3178c6] text-white font-bold px-2 py-1">
            Typescript
          </span>{' '}
          &{' '}
          <span className="bg-[#f6de37] font-bold px-2 py-1 text-black">
            Javascript
          </span>{' '}
          utility library.
        </p>
      </div>

      <div className="grid gap-4">
        <SectionCard icon={<StackIcon />} title="Datastructure" />
      </div>
    </MaxWidthWrapper>
  );
};
