import React, { ReactElement } from 'react';

type StatusBadgeProps = {
  status: 'accepted' | 'deprecated';
  size: 'small' | 'large';
};

const StatusBadge = (props: StatusBadgeProps): ReactElement => (
  <p
    className={`inline-flex font-semibold rounded ${
      props.status === 'deprecated'
        ? 'bg-red-100 text-red-400'
        : 'bg-blue-100 text-blue-500'
    } ${
      props.size === 'large'
        ? 'text-md leading-7 px-4'
        : 'text-xs leading-5 px-2'
    }`}
  >
    {props.status}
  </p>
);

export default StatusBadge;
