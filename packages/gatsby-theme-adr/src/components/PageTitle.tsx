import React, { PropsWithChildren, ReactElement } from 'react';

type PageTitleProps = PropsWithChildren<{ preTitle: string; deck?: string }>;
const PageTitle = ({
  children,
  preTitle = '',
  deck = '',
}: PageTitleProps): ReactElement => {
  return (
    <>
      <div className="px-10 mx-auto 2xl:max-w-6xl">
        <h1 id="primary-heading">
          {preTitle ? (
            <span className="block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">
              {preTitle}
            </span>
          ) : (
            <></>
          )}
          <span className="mt-2 block text-6xl text-center font-extrabold tracking-tight text-gray-900">
            {children}
          </span>
        </h1>
        {deck ? (
          <p className="mt-8 text-2xl text-center text-gray-500 leading-8 font-serif">
            {deck}
          </p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PageTitle;
