ESLINT = node_modules/.bin/eslint
WEBPACK = node_modules/webpack/bin/webpack.js

.PHONY: build install clean dev client

build:
	make clean
	$(WEBPACK) --optimize-minimize \
		--optimize-occurence-order \
		--devtool source-map \
		--verbose \
		--display-chunks \
		--bail

install:
	npm install --ignore-scripts

clean:
	-rm -rf ./dist

lint:
	$(ESLINT) --ext .js --ext .jsx .

client:
	nf run node index.js webpack
