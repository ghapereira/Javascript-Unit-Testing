# Javascript Unit Testing
Exercising unit testing with Javascript (Mocha + Istanbul)


## Motivation
Wanting to exercise a little bit of
[Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
in Javascript, I got this problem of, in an 'ocean' composed by 'water' (0's)
and 'land' (1's), to find the largest 'island', that is, the longest
sequence of 1's that are adjacent to each other. For that, the algorithm
(the simplest I could imagine) was easy to implement, and I have used
only the simplest features of the language. The new things (for me) here
are the testing framework
[Mocha](https://mochajs.org/) in order to able to run it within
[Node](https://nodejs.org/en/). To get code coverage on the tests,
I have used [Istanbul](https://www.npmjs.com/package/istanbul).

## THAT IS A LOT OF NAMES!!!!!!
Indeed.

I really jumped into Javascript about one year ago. Then, I tried to learn
the simplest things and found too much names to look at. And
[I](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.b233zj2jv)
[wasn't](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.2wqgq2agw)
[alone](http://crookedcode.com/tag/javascript-fatigue/)
[in that](https://segment.com/blog/the-deep-roots-of-js-fatigue/).

But since starting to work with it, my approach became to:

a) Stick to the basics, and

b) Just use the recommended tools, or the first you get on with good docs.

This way, making this small project became very simple.

## The road for this one
At first, I wanted to run these tests on my machine's terminal, not in
a browser. For this, Node.js was the choice, as it is a Javascript platform.
Then, I wrote the code as the specification required, being it a function
that took three parameters (matrix, number of rows, number of columns). This
wasn't necessary, as length of an array is an attribute of it in Javascript,
but the specs needed to be satisfied. Also, I had to pass on the reference
to the matrix, and it would be better off as an instance attribute for a
class, but again the specification (define a function for solving this) was
made.

After deciding the platform and basic structure, I needed a testing framework.
Looking in the internet, the first one to come was
[Unit.js](http://unitjs.com). But to use Unit.js I needed a test _runner_,
that was Mocha. Then I found that Unit.js is an assertion library, and as I
am sure that are use cases that it fills best, basic assertion would be fine
for me, so I used them. Then, I remembered that I have used test coverage
in [another project](https://github.com/ghapereira/jogo_da_vida). [Code
coverage](https://en.wikipedia.org/wiki/Code_coverage) helps looking at how
much the code is tested, so why not? For that, another query made me find
Istanbul.

With all set, I just needed to take a look the pages, that had really good
info on how to write the tests and run them, and proceeded with writing the
program with the tests.

## Commands
For those who are not well acquainted with the state of Javascript at this
moment, the way I did this was to:

a) Have Node installed

b) Have [npm](https://www.npmjs.com/) installed. ANOTHER NAME, I KNOW. That
is the Node package manager. Just that

c) Install Mocha: ```npm install -g mocha```. The '-g' stands for 'global install'.
This is not the best practice, since one may want to only install it
locally for a project, but I wanted to keep things simple on this one. I was
already taking too much time on tooling instead of coding

d) Install Istanbul: ```npm install -g istanbul```

e) Just run: ```istanbul cover _mocha tests```


## Last thoughts
After that I got all tests passing and a good code coverage, a good thing
was to check the code itself for Javascript styling and code correctness.
[Static code analyzers](https://en.wikipedia.org/wiki/Static_program_analysis)
are old friends for programmers, and in scripting languages they shine.
This way, I just used one I knew, [jshint](http://jshint.com/) - THIS IS
THE LAST NEW NAME HERE I PROMISE -, and used it to check:

```
jshint largestisland.js
```

On installing *jshint*? Unsurprisingly:
```
npm install -g jshint
```
