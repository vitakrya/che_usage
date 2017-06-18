const createHtmlElement = require('create-html-element');

const postWrapper = createHtmlElement({
  attributes: {
    class: 'featured-post',
    param1: 'admin-on>y'
  }
});
const postHeader = createHtmlElement({
  name: 'h2',
  attributes: {
    class: 'rotated-header',
    'data-cont-wrap': 'top',
    cats: ['eat', 'design']
  },
  value: 'CHE is awesome'
});

console.log(postWrapper);
console.log(postHeader);
