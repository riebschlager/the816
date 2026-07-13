---
title: "Creating a Playable 12-Foot-Tall Electric Guitar"
description: "My team at Dimensional Innovations was asked to create something amazing for Boulevardia, a two day festival of music, food and of course…"
pubDate: "2017-06-20T21:52:18.523Z"
heroImage: "./heroes/creating-a-playable-12-foot-tall-electric-guitar.jpeg"
---

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/01.jpeg)

My team at [Dimensional Innovations](http://dimin.com) was asked to create something amazing for [Boulevardia](http://boulevardia.com), a two day festival of music, food and of course, beer. The space we had to work with was the area immediately after the main entrance of the festival. We wanted to create something iconic, interactive and engaging. It had to be something that welcomed visitors and let them know that they had left Kansas City and had entered a whole other nation. The nation of Boulevardia!

After a few false starts (including a concept that involved Solo cups and chain link fence that I don’t want to talk about), I landed on a concept I knew we could hit out of the park. A huge electric guitar you could actually play. Honestly, I didn’t know if we would be able to make this happen. (Spoiler alert: We did.) But I was smitten with the idea, so I pitched it to the team.

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/02.jpeg)

The first task was to prototype the electronics that would make the guitar playable. Without that, we’d just have a huge guitar sculpture (lame). I had been looking for an excuse to use a [Bare Conductive](https://www.bareconductive.com/) board and it was the perfect fit for this job. The Bare Conductive touch board extends a capacitive touch surface through any conductive material you connect to it, in this case 16-gauge galvanized wire.

The touch board can be programmed just like an Arduino. I created [a really simple script](https://gist.github.com/riebschlager/01b96e8856499a8605d3fe864e315e60) to send serial messages when a string was touched or released. The touch board is connected to a Raspberry Pi that responds to those messages and plays WAV files based on which string was touched. My goal was to have the strings respond just like they would on an actual guitar. Touching and releasing a string makes it ring out. Touching and holding a string silences it.

I tried recording isolated notes with one of my guitars, but it just ended up sounding inconsistent and weird. So instead, I exported guitar notes from Garage Band. That way I got perfect notes that were all an identical duration and volume.

<div class="video-embed"><iframe src="https://www.youtube.com/embed/C5Yxru3rIM8?feature=oembed" title="Embedded video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

This was a very promising start, but I knew we had to make playing the guitar more expressive than just playing random chords. I wired several arcade buttons to the GPIO pins on the Raspberry Pi so that players could pick a chord to play, A through G, both major and minor. Players could also put the guitar in either Clean or Dirty mode, depending on how hard they wanted to rock. The Pi is running a [Python script](https://gist.github.com/riebschlager/4d329324f6520e41a9994d8b5696f460) that plays or stops sounds based on string touch events, chord selection and mode selection.

I ran into issues with the 3.5mm audio jack on the Pi. Namely, it’s noisy as hell. I ended up using the HDMI as an audio out with the help of an HDMI to VGA/audio adapter. That gave me super clean audio which I ran to a powered stage monitor for amplification. It was plenty loud. Just ask all my office mates who I no doubt irritated the hell out of.

<div class="video-embed"><iframe src="https://www.youtube.com/embed/xAMeLUiwPnk?feature=oembed" title="Embedded video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

To tie the guitar back to the festival, we wanted the design of the guitar to be a nod to the breweries and bands that take part in Boulevardia. Over a dozen designers at DI created “stickers” for each band that played the festival, taking design cues from Boulevardia’s own branding and design elements. We also produced stickers for each brewery using their logos. We printed them in-house on 3M Controltac.

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/03.png)

The next step was engineering and fabrication. This is completely out of my wheelhouse. Thankfully, DI has amazing engineering talent. Our engineer designed a solution for creating and mounting what would end up being a 500 pound guitar made of MDF and steel.

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/04.png)

All of the parts for the body and neck of the guitar were milled on one of our CNC machines. The body of the guitar is actually several layers of 3/4" MDF that are laminated together to create the final form. We also added cavities inside to house the wiring and electronics.

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/05.png)

Once the parts were cut, we were off to the races with fabrication, paint and finishes. And finally, installation! This video takes you through the whole process. I’m constantly blown away by the insane talent of our fabricators and artists. They made the guitar look ten times better than I could have hoped.

<div class="video-embed"><iframe src="https://www.youtube.com/embed/iElgK3UEwE4?feature=oembed" title="Embedded video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

The reaction we got at the event was overwhelming. It was being played and being photographed for the entire duration of the festival. The looks on people’s faces when they strummed the strings was absolutely awesome. That’s why I love working in interactive installation. You get to see how your work affects people.

![Creating a Playable 12-Foot-Tall Electric Guitar](./heroes/creating-a-playable-12-foot-tall-electric-guitar.jpeg)

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/07.jpeg)

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/08.jpeg)

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/09.jpeg)

![The guitar was also a hit on social media, it was a regular feature in people’s posts from the event. Brody Buster even snapped a photo featuring his sticker. I’m a big fan of Brody, so this made me *really* happy to see.](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/10.png)

_The guitar was also a hit on social media, it was a regular feature in people’s posts from the event. Brody Buster even snapped a photo featuring his sticker. I’m a big fan of Brody, so this made me *really* happy to see._

This project was without a doubt one of the most exciting, challenging and rewarding projects I’ve been a part of. From concept to execution, the entire project took only five weeks. The fact that we pulled this off in so little time really speaks to the talent and dedication of the people I get to work with.

If you’d like to see it in person, [come visit us](http://www.dimin.com/contact/). We’re going to have it set up in the shop so we can show off how bad ass we are at making insanely cool things like this.

![Creating a Playable 12-Foot-Tall Electric Guitar](/images/blog/creating-a-playable-12-foot-tall-electric-guitar/11.jpeg)
