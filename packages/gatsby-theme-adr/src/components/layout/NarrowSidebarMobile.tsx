import React, { Fragment, ReactElement } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import NarrowSidebarMobileLogo from './NarrowSidebarMobileLogo';
import { IconLinks } from '../../types';

type NarrowSidebarMobileProps = {
  show: boolean;
  onClose: (value: ((prevState: boolean) => boolean) | boolean) => void;
  onClick: () => void;
  menuLinks: IconLinks;
  callbackfn: (
    { name, uri, iconName }: IconLinks[number],
    index: number,
  ) => JSX.Element;
};
const NarrowSidebarMobile = ({
  show,
  onClose,
  onClick,
  menuLinks,
  callbackfn,
}: NarrowSidebarMobileProps): ReactElement => (
  <Transition.Root show={show} as={Fragment}>
    <Dialog as="div" className="md:hidden" onClose={onClose}>
      <div className="fixed inset-0 z-40 flex">
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-charcoal-700 pt-5 pb-4 flex-1 flex flex-col">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-1 right-0 -mr-14 p-1">
                <button
                  type="button"
                  className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={onClick}
                >
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  <span className="sr-only">Close sidebar</span>
                </button>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 px-4 flex items-center">
              <NarrowSidebarMobileLogo />
            </div>
            <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav className="h-full flex flex-col">
                <div className="space-y-1">{menuLinks.map(callbackfn)}</div>
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);

export default NarrowSidebarMobile;
