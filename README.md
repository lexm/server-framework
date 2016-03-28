#Basic Routing Framework

This package contains a "router.js" file which can be added to node programs via a require statement. The files in the "routes" directory, as well as the "server.js" are examples of how the framework can be used.

It can be installed by typing:

npm install basic-router-framework

at the command line. If the "--production" flag is not set. it will install chai, chai-http, gulp, gulp-eslint, and gulp-mocha as development dependencies.

Once a new Router() object is created, the .post(), .get(), .put(), and .delete() methods can be called to assign callbacks. The format is:

newRouter.post(resourceName, callback);

"resourceName" is the name of the resource as specified in the URL. For instance, in http://domain.name/rocks/14, the resourceName would be "rocks". The callback function will be passed three parameters corresponding to the HTTP request, the response, and (optionally) an array created by splitting the request.url field by the slash ('/') character. then removing the first element in the array if it's blank. This allows the rest of the url to be accessed: for instance, splitUrl[1] in the above example would be "14".
