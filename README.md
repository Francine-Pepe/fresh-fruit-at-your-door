** THIS IS A MOCKUP PROJECT (INCLUDING THE API) **

This is a Work based on a Fruit e-commerce, where you can buy Fruits filtered by season.

The point of this project is work with FILTER and SHOPPING CART.

** Deployment on Github **

0. Add the address name in the package.json ("homepage": "https://francine-pepe.github.io/fresh-fruit-at-your-door")
1. npm install gh-pages --save-dev
2. In the package.json file, scroll down to the scripts property and add the following commands:

"predeploy" : "npm run build",
"deploy" : "gh-pages -d build",

3. git add .
4. git commit -m "setup gh-pages"
5. git push
6. npm run deploy