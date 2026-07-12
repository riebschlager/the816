---
title: 'Collage-o-tron 5000'
description: 'One thing I’ve really missed this year is seeing live music, especially jazz. Watching a good jazz band can be absolutely transcendent…'
pubDate: '2020-12-28T01:46:42.677Z'
heroImage: '/images/blog/collage-o-tron-5000/01.jpeg'
---
![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/01.jpeg)

One thing I’ve really missed this year is seeing live music, especially jazz. Watching a good jazz band can be absolutely transcendent. It’s a perfect illustration of the magic that happens when you mix technical mastery with artistic expression.

I’m not going to pretend I know how jazz works, but I do know it has a language. Musicians absorb this language into their bones until their playing is as natural an expression as speaking.

To me, creative coding is the nearest thing we programmers have to an improvisational art form. I’ve spent years practicing my craft and spend nearly every day of my life using those skills to make the things people pay me to make. How **much** skill I’ve managed to eek out is debatable. Feel free to ask my teammates, but on my good days, I’m probably every-so-slightly above average.

But here’s the great thing about improvisation: It doesn’t have to be perfect. In fact, I think you could make a solid argument that improvisation only really works when it’s intentionally imperfect.

> “If you hit the wrong note, it’s the next note that determines if it’s good or bad.”  
>  — Miles Davis

We don’t really get chances to “play” in our day jobs. We have a thing we need to do and it’s usually best to take the quickest path to it being done. But I think playing is absolutely critical to elevating your craft from something you do to pay your mortgage to something you do because you can’t imagine *not* doing it.

Creative coding is playing. It’s experimenting, failing, then adjusting and trying again. Above all, it’s creating the conditions where happy accidents will occur. You hit a wrong note, then pick the *perfect* note to play next and *BOOM! *That’s pure magic and you ain’t gonna get there any other way but by “playing around”.

### So let’s play.

I love collages. A lot of my creative coding projects involve creating large pools of scraps and finding interesting ways of putting them together. The great thing about computers is that I can work with hundreds of scraps if I want. I can tint them, distort them, sort them or do whatever the heck sounds fun. There comes a point when it stops being a collage and it starts being messy texture. But here’s the thing, I love messy texture. I stumbled into a workflow this weekend that I really enjoyed messing around with, so I thought I’d share it. If you’re a just-gimme-the-code type of person, well here ya go: [https://github.com/riebschlager/collage-o-tron-5000](https://github.com/riebschlager/collage-o-tron-5000)

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/02.png)

The first thing we need is a pool of scraps. We’re going to use these to generate Pollack-like layers of paint that we’ll later recombine into a single image. I wrote a utility in [Processing](http://processing.org) that helps me to this. This script automates the scrap-making process. We are going to need two folders of images. One for masks and one for sources. You can think of the sources as pages of a magazine that we want to cut up. The masks folder contains PNGs that represent the shapes we’ll use to cut things out of the sources.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/03.png)

Included in the repo are** slices** and **sources** folders with some sample images. It doesn’t really matter what you use for slices and sources, just know that a lot of the color and texture in your piece will come directly from the output of this script. So if you don’t like the look of the output, you’re probably not going to like the final. Once you run this script, you’ll have a folder of scraps. These scraps are cutouts of your source “pages” in the shape of our slices. In this case I’m using some splatters I got from de-compiling a Photoshop brush into PNG files. Now we can start gluing them together!

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/04.png)

What we’re actually making here is a collage of collages. The first collage we’re going to make (several of them, actually) is just a splatter-shot of these slices on a canvas. Open up layer-maker.toe in the TouchDesigner folder and we’ll get to work. What this file does is load up all these slice PNGs and draws them to a canvas in a controlled-random way.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/05.png)

We start with a grid which we immediately convert to a CHOP. What we’re going to do is place one of our slices at each point in the grid. Since grids are pretty boring, we’re going to mess this one up a bit.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/06.png)

Here’s the whole darn grid portion of the network. Up top, we are using the grid points to generate a random X, Y and Z rotation for each slice. Just below that we are generating random scale values for each slice. In the middle, we are adding noise to the grid to make it a little less grid-like. Below that, we are generating a W value for each slice. This determines which layer in a Texutre3D TOP that each slice will be showing. Then finally, on the bottom we are using the grid to sample colors from an image. This will tint each of the slices using colors in a source image.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/07.png)

This is a base that is responsible for loading all our slice files and cramming them into a Texture3D TOP. To learn more about this fun lil’ trick, check out the operator snippet for Texture3D. (Under the Help Menu, then just click “Operator Snippets”) I had no idea this was a thing until this weekend but it opens up some mind-blowing possibilities. When you can quickly and easily work with dozens of textures at the same time, everything gets a lot more fun.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/08.png)

The result of this process is a three-dimensional texture which is a fantastically performant way of applying many different textures to instanced geometry.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/09.png)

The next part is pretty easy. We use our grid CHOP that now includes extra info about color, rotation and scale as the instance source for our Geometry COMP. We’re simply instancing a small rectangle at each point of our grid, rotating and scaling it, and then applying a texture based on the W property of the instance.

There’s a single button in this network that does two things. First, it re-randomizes all our Noise CHOPs by updating their seed value. This gives us a new random placement for all our scraps. Second, it saves the render output as a file for later use. Hit this button as many times as you want, the more layers you generate the better.

We’re done with this .toe file. You can open collage-maker.toe now. This file is taking advantage again of Texture3D, but in this file we’re using a TimeMachine TOP to get access to the different layers packed into the Texture3D.

Here’s all you need to know about this file.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/10.png)

A TimeMachine TOP uses a black and white image to determine where to draw which layer of a Texture3D. For instance, for each black pixel in the image, draw Layer One. For each 10% grey pixel, draw Layer Two, and so on all the way to white. So if we use a Limit TOP to posterize a black and white image, we essentially have a lookup table. So each shade of grey will be assigned to a single slice that we created in the previous step. Blurring the source image a bit will help soften the edges of these regions.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/11.png)

Depending on your slices and sources, you’ll get something that looks a bit like this. You can see the contours of the face in the original image. Fiddle with the Value Step and Value Offset values of the Limit TOP until you see something you like. This lets you have a little more control over which slice lands in which area. So we have the start of something, but it’s not quite there.

![Collage-o-tron 5000](/images/blog/collage-o-tron-5000/12.png)

Here I’m compositing the original image back into our slice pile. Mess around with the blend modes and the contrast of the incoming original image. You can use the highlights and shadows of the source image to help the legibility of your subject.

You’ve got all the pieces, now run with it! There are so many weird and interesting things you can do with this. I tried to make the obvious levers and dials available in Constant CHOPs. I like to keep all my fun tweakables in one easy-to-find place. Go nuts, have fun and PLAY. If you make something, I’d love to see it.
