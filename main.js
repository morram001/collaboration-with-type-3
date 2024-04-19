var client = contentful.createClient({
    space: '688a6fjxwdtq',
    accessToken: 'cUc71Wcesc0x5FYjObcWjOQSKXaJ1EILakYwE4KNa9I',
  });

 client.getEntries().then(function (entries) {

    entries.items.forEach(function (entry) {

        if (entry.fields.category == "shirt") {
    
            var resource = document.createElement('div');
            document.getElementById('first-resources').append(resource);

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


client.getEntries().then(function (entries) {

    entries.items.forEach(function (entry) {

        if (entry.fields.category == "Explore More") {
    
            var resource = document.createElement('div');
            document.getElementById('secondary-resources').append(resource);

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
