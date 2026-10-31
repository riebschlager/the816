---
title: "Cyprus Avenue, Preserved"
description: "An algorithm wants to play you something you want to hear. Bill Shapiro wanted to play you something he wanted you to hear."
pubDate: "2026-10-31T12:00:00.000Z"
heroImage: "./heroes/cyprus-avenue-preserved.jpg"
heroImageAlt: "A record spinning on a turntable with an orange Cyprus Avenue, KCUR-FM 89.3 label."
---

If you live in Kansas City and love music, then you know who Bill Shapiro was. Bill hosted [Cyprus Avenue on KCUR](https://www.kcur.org/show/cyprus-avenue) from October 1978 until the show ended its 40-year run in 2018. He was a brilliant musicologist, and I'd been listening since I moved to KC in 2000.

Bill estimated he produced nearly 2,000 episodes. That's somewhere north of 20,000 carefully chosen tracks. When the show was winding down, I wrote [a post on Medium](https://riebschlager.medium.com/the-cyprus-avenue-preservation-project-5fa0a3894c3a) about how much I'd hate to see all that work evaporate into the ether. So I started a project.

Bill passed away in early 2020. Today, I'm happy to say that project finally has a home: **[cyprus-avenue.the816.com](https://cyprus-avenue.the816.com/)**.

#### What Does a Mixtape Have That an Algorithm Doesn't?

Here's the argument I made back in 2018, and I think it holds up even better now.

Musical discovery algorithms are pretty great. They've made it incredibly easy to find new music based on what you already want to hear. But they're still no substitute for personal taste.

If you're old like me, you might remember making mixtapes and laboring over which tracks to include and how to sequence them. So what does a mixtape have that an algorithm doesn't? **An opinion.** An algorithm just wants to make you happy. It'll try its hardest to play you something you want to hear. A mixtape creator is going to play you something _they_ want you to hear.

Bill didn't just play songs. He described the world in which they were created, the backgrounds of the people involved and why he felt each track was important. Bill had opinions.

#### Only 1,997 to Go

My original plan was charmingly naive. I was going to rebuild Bill's shows as Spotify playlists by hand. All of them. I made three, posted them, and wrote "only 1,997 to go."

Reader, I did not make 1,997 more.

What I _did_ do was copy and paste every playlist I could find from the KCUR website into a pile of text files before they disappeared, and then toss them in [a GitHub repo](https://github.com/riebschlager/cyprus-avenue). And there they sat for years. Preserved, technically. But nobody was going to sit down and browse a folder of inconsistently formatted `.txt` files.

#### Enter the Robots (The Helpful Kind)

Earlier this year, I picked the project back up. With the help of some modern AI coding tools, what had been an intimidating, someday-maybe project took just a few days.

That pile of text files came in at least half a dozen different formats. "Artist - Song." "Artist - 'Song.'" Just the song, for single-artist shows. Numbered lists. Bulleted lists. A parser now chews through all of it and spits out clean, structured data. A scraper went back through KCUR's site looking for shows I'd missed, and turned up a handful more. (Funny enough, the archive turned out to be much more complete than what's still visible on KCUR's site.)

Here's where things landed:

- **125 shows** spanning December 2009 to July 2017
- **1,448 tracks** from **304 artists**
- Biographies for **277** of those artists
- Links to listen on Spotify, plus the ability to build a Spotify playlist from any show, any artist, any genre or the entire archive in one click
- The whole thing is downloadable as JSON, CSV or plain text

That last part matters to me. Streaming platforms come and go. A spreadsheet is forever.

#### Swimming Against the Tide

The thing I love most about poking around the archive is that you can _see_ Bill's opinions in the data.

[Bob Dylan](https://cyprus-avenue.the816.com/artist/bob-dylan) is the most-played artist, which surprises nobody. [Van Morrison](https://cyprus-avenue.the816.com/artist/van-morrison) is right behind him, which makes sense for a show named after a Van Morrison song. But then you get to number six and find [Sam Baker](https://cyprus-avenue.the816.com/artist/sam-baker), a Texas songwriter that I'd bet most people have never heard of. He shows up more than The Beatles. More than The Rolling Stones. More than Springsteen. Kansas City's own [Kelley Hunt](https://cyprus-avenue.the816.com/artist/kelley-hunt) is in the top 15, too.

No recommendation engine on earth is going to serve you that list. That list comes from a person who listened to a lot of music and decided what mattered.

And remember those three Spotify playlists I made back in 2018? They're the last three shows in the archive: [Jimi Hendrix: People, Hell & Angels](https://cyprus-avenue.the816.com/playlist/jimi-hendrix-people-hell-angels-june-20-2017), [Sturgill Simpson Is Back](https://cyprus-avenue.the816.com/playlist/sturgill-simpson-is-back-july-7-2017) and [Big City Music From A Small Town Studio](https://cyprus-avenue.the816.com/playlist/big-city-music-from-a-small-town-studio-july-14-2017). Feels like a nice bookend.

#### Still Looking

125 shows out of nearly 2,000 is a small slice. Everything before December 2009 is missing, and there are gaps after that, too.

So, same ask as eight years ago: if you have any connection with KCUR or Bill and have access to playlists that aren't in the archive, I'd love to hear from you. The project is [open source](https://github.com/riebschlager/cyprus-avenue), and I welcome edits, corrections and additions. You can reach me at [chris@the816.com](mailto:chris@the816.com).

In the meantime, go [browse the archive](https://cyprus-avenue.the816.com/). Let Bill play you something he wanted you to hear.
