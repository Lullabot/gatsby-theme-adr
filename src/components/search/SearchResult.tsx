import * as React from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';

export type SearchResultProps = Readonly<{
  title: string;
  deck: string;
  slug: string;
}>;

const SearchResult = ({
  title,
  deck,
  slug,
}: SearchResultProps): ReactElement => (
  <li className="py-4 flex">
    <Link to={slug} className="ml-3 block">
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{deck}</p>
    </Link>
  </li>
);

export default SearchResult;
