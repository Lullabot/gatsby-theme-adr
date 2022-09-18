import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

type AdrToc = {
  id: string;
};

function TocLink({
  title,
  url,
  items,
  depth = 0,
}: LinkParts & { depth: number }) {
  return (
    <li>
      <Link
        to={url}
        className="text-blue-500 flex items-center ml-2 mt-1 px-2 py-1 text-sm font-medium hover:text-blue-800 hover:underline"
      >
        <span className="truncate">{title}</span>
      </Link>
      {items && items.length ? (
        <ul className={`ml-${depth * 2} mt-0.5`}>
          {items.map((item, index) => (
            <TocLink
              key={index}
              url={item.url}
              title={item.title}
              items={item.items}
              depth={depth + 1}
            />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </li>
  );
}

type LinkParts = { url: string; title: string; items?: LinkParts[] };
export default function AdrToc({ id }: AdrToc) {
  const {
    allMdx: { edges },
  } = useStaticQuery<{
    allMdx: {
      edges: {
        node: {
          id: string;
          tableOfContents: { items: LinkParts[] };
        };
      }[];
    };
  }>(graphql`
    query AdrToc {
      allMdx {
        edges {
          node {
            id
            tableOfContents(maxDepth: 4)
          }
        }
      }
    }
  `);
  const edge = edges.find(({ node: { id: edgeId } }) => id === edgeId);
  if (!edge) {
    return <></>;
  }
  const tocId = `toc-${id}`;
  return (
    <div className="px-4 py-4 bg-gray-100 font-sans">
      <h2
        id={tocId}
        className="block text-base text-xs text-charcoal-700 tracking-wide uppercase mb-2"
      >
        Table Of Contents
      </h2>
      <nav className="space-y-1 border-l border-gray-200" aria-label="Sidebar">
        <ul>
          {edge.node.tableOfContents.items.map(
            ({ title, url, items }, index) => (
              <TocLink
                key={index}
                url={url}
                title={title}
                items={items}
                depth={1}
              />
            ),
          )}
        </ul>
      </nav>
    </div>
  );
}
