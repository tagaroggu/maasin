# maasin
A very small JavaScript HTML templating library?

This is mostly just an experiment with being able to create a DOM tree like with how any given virtual dom library works. What seems to be different with this is that attributes and text nodes can be created with simple functions as well. There is no inherent reactivity with this, and so I'm using morphdom to diff DOM trees. `Element#replaceWith` could also be used.