import * as React from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

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
    <div className="ml-3 block">
      <Link to={slug} className="text-sm"><h3 className="text-sm font-medium text-gray-900">{title}</h3></Link>
      <div className="text-sm text-gray-500 prose"><ReactMarkdown>{deck}</ReactMarkdown></div>
    </div>
  </li>
);

export default SearchResult;
