import { MaxWidthWrapper } from './max-width-wrapper';

export const HomePage = () => {
  return (
    <MaxWidthWrapper>
      <div className="mb-12">
        <h1 className="font-display font-black text-[min(4.375rem,max(8vw,2.5rem))] tracking-wide mt-[3.4rem]">
          Ultify
        </h1>
        <p className="text-[min(1.3rem,max(3.5vw,1.2rem))] mt-[1.5em]">
          A modern typescript & javascript utility library.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};
