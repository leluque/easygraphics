# Contributing to EasyGraphics

## General guidelines

Patches are welcome. EasyGraphics is at this point just a baby and it could use lots of help.

Here are some vague notes on WebDiagram's design philosophy:

 1. We won't accept patches that can't be internationalized using the JS environment's (e.g. the browser's) native capabilities. This means that most convenient humanization features are out of scope.
 2. EasyGraphics shouldn't contain simple conveniences that bloat the library to save callers a couple lines of code. Write those lines in your own code.
 
## IDE

The library has been developed using WebStorms.