import React from 'react';
import { Link } from 'gatsby';
import slugify from '../util/slugify';

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="text-sm flex flex-wrap">
      {tags.map((tag, i) => (
        <li key={i} className="mr-0.5 mb-0.5">
          <Link
            to={`/adrs/${slugify(tag)}`}
            className="px-2 py-0.5 text-xs font-bold bg-gray-200 text-charcoal-600 rounded-full font-sans"
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
