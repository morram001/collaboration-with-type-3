var client = contentful.createClient({
    space: '688a6fjxwdtq',
    accessToken: 'cUc71Wcesc0x5FYjObcWjOQSKXaJ1EILakYwE4KNa9I',
  });

  var textInURL = window.location.search;

    var parametersInURL = new URLSearchParams(textInURL);
    
    var id = parametersInURL.get('id');


    client.getEntry(id).then(function (entry) {
      
      var firstResources = document.createElement('div');

      var firstResources = document.getElementById('product-page')
      
      var image = document.createElement('img');
      image.src = 'http:' +entry.fields.image.fields.file.url;
      firstResources.append(image);
      
      var name = document.createElement('h3');
      name.innerHTML = entry.fields.name;
      firstResources.append(name);

      var price = document.createElement('p');
      price.innerHTML = entry.fields.price;
      firstResources.append(price);

      var summary = document.createElement('p');
      summary.innerHTML = entry.fields.summary;
      firstResources.append(summary);

  });


  client.getEntries().then(function (entries) {

    entries.items.forEach(function (entry) {

        if (entry.fields.category == "Frequently Bought Together") {
    
            var resource = document.createElement('div');
            document.getElementById('frequently-bought-together').append(resource);

            var image = document.createElement('img');
            image.src = 'http:' +entry.fields.image.fields.file.url;
            resource.append(image);
            
            var name = document.createElement('h3');
            name.innerHTML = entry.fields.name;
            resource.append(name);

            var price = document.createElement('p');
            price.innerHTML = entry.fields.price;
            resource.append(price);

            var resourceButton = document.createElement('a');
            resourceButton.innerHTML = "Check it Out";
            resource.append(resourceButton);
            resourceButton.href = "products.html?id="+entry.sys.id;
          }
    });
}); 