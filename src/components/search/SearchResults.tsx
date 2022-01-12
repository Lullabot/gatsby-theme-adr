import React, { ReactElement } from 'react';
import SearchResult, { SearchResultProps } from './SearchResult';

type SearchResultsProps = {
  readonly results: SearchResultProps[];
};
const SearchResults = ({ results }: SearchResultsProps): ReactElement => {
  if (!results.length) {
    return <p>No result for this search.</p>;
  }
  return (
    <ul className="divide-y divide-gray-200">
      {results.map(({ title, deck, slug }, i) => (
        <SearchResult key={i} title={title} deck={deck} slug={slug} />
      ))}
    </ul>
  );
};

export default SearchResults;
