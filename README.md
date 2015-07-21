# distanceFromTop.js
JavaScript function that uses jQuery to find the location of a page element relative to the top of the window in pixels.

Download .zip, extract, and load it after jQuery 1.x or 2.x as you would anything...

```
<script src="distanceFromTop.js"></script>
```

Here is an example of how you would use it to keep track of a div's location everytime the user scrolled:

```
$(function() {
  
  $(window).scroll(function() {
    distanceFT = distanceFromTop('#something');
    
    console.log(distanceFT);
  });
});
```

That's about it. Have fun.
