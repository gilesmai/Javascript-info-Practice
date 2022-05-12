/**Write the code that returns the width of a standard scrollbar.

For Windows it usually varies between 12px and 20px. If the browser doesn’t reserve any space for it (the scrollbar is half-translucent over the text, also happens), then it may be 0px.

P.S. The code should work for any HTML document, do not depend on its content. */
function getScrollBarWidth() {
  // create a div with the scroll
  const div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  // must put it in the document, otherwise sizes will be 0
  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
  return scrollWidth;
}
