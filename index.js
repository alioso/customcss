// Create a new object based of the HTMLElement prototype
var LogoProductProto = Object.create(HTMLElement.prototype);

// Set up the element.
LogoProductProto.createdCallback = function() {
  // Create a Shadow Root
  var shadow = this.createShadowRoot();

  // Create a standard img element and set it's attributes.
  var img = document.createElement('img');
  img.alt = this.getAttribute('data-name');
  img.src = this.getAttribute('data-img');
  img.height = '150';
  img.className = 'product-img';

  // Add the image to the Shadow Root.
  shadow.appendChild(img);

  // Add an event listener to the image.
  img.addEventListener('click', function(e) {
    window.location = this.getAttribute('data-url');
  });

  // Create a link to the product.
  var link = document.createElement('a');
  link.innerText = this.getAttribute('data-name');
  link.href = this.getAttribute('data-url');
  link.className = 'product-name';

  // Add the link to the Shadow Root.
  shadow.appendChild(link);
};

// Register the new element.
var LogoProduct = document.registerElement('logo-product', {
  prototype: LogoProductProto
});
