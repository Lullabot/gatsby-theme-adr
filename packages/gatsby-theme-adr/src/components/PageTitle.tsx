import React, { PropsWithChildren, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

type PageTitleProps = PropsWithChildren<{ preTitle: string; context?: string }>;
const PageTitle = ({
  children,
  preTitle = '',
  context = '',
}: PageTitleProps): ReactElement => {
  return (
    <>
      <Helmet>
        <title>{children}</title>
        <meta name="description" content={context} />
      </Helmet>
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
        {context ? (
          <p className="mt-8 text-2xl text-center text-gray-500 leading-8 font-serif">
            {context}
          </p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PageTitle;
