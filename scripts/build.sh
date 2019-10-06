rm -rf docs/
rm -rf public/
node_modules/.bin/gatsby build --output-dir=docs
mv public/ docs/