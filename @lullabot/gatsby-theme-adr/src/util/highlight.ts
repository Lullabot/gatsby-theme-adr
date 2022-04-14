import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

export function highlightCode() {
  const codeblocks: HTMLElement[] = Array.from(
    document.querySelectorAll('pre > code'),
  );

  codeblocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
}
