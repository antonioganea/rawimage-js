This simple project renders proprietary digital camera formats in the browser. Anything that can be decoded by [dcraw](https://github.com/ncruces/dcraw/)

Drop a .NEF photo at this path : /public/nef/dog.NEF and check the website. You should see it rendered.

Considerations : performance-wise, the .wasm was built with a huge heap and stack, so you might want to tweak it / recompile it to your needs.
