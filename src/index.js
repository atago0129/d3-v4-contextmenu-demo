import { CollapsibleTreeDiagram } from './CollapsibleTreeDiagram';

if (document) {
  var scripts = document.getElementsByTagName('script');
  var current = scripts[scripts.length - 1];
  if (current && current.getAttribute('data-diagram')) {
    new CollapsibleTreeDiagram(JSON.parse(current.getAttribute('data-diagram')));
  }
}

export default CollapsibleTreeDiagram;
