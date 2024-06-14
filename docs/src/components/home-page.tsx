import { ReactNode } from 'react';
import { MaxWidthWrapper } from './max-width-wrapper';
import { StackIcon } from './icons/stack';
import { FunctionIcon } from './icons/function';
import Link from 'next/link';

export const SectionCard = ({
  icon,
  title,
  href
}: {
  icon: ReactNode;
  title: string;
  href: string
}) => {
  return (
    <div className='relative flex gap-4 items-center shadow-card transition-shadow duration-300 px-7 py-6 rounded-2xl dark:shadow-cardDark dark:bg-[#202020] hover:shadow-cardHover dark:hover:shadow-cardHoverDark'>
      <div>{icon}</div>
      <p className='font-bold text-2xl'>{title}</p>
      <Link className='absolute w-full h-full top-0 left-0' href={href} />
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

      <div className="flex flex-col gap-4 max-w-xl mx-auto w-full mb-40">
        <SectionCard href='/docs/datastructures' icon={<StackIcon color='currentColor' />} title="Data structures" />

        <SectionCard href='/docs/functions' icon={<FunctionIcon color='currentColor' />} title="Functions" />
      </div>
    </MaxWidthWrapper>
  );
};
