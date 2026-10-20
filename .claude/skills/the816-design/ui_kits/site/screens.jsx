/* the816.com UI kit screens. Components come from the compiled design-system bundle. */
const DS = () => {
  for (const k of Object.keys(window)) {
    try {
      const v = window[k];
      if (v && typeof v === "object" && v.Button && v.SiteHeader) return v;
    } catch (e) {}
  }
  return {};
};

const IMG = {
  chris: "../../assets/images/chris-at-thundergong.jpg",
  projection: "../../assets/images/chris-projection.jpg",
  milhouse: "../../assets/images/blog/make-milhouse-gorgeous.png",
  crowd: "../../assets/images/thundergong-crowd.jpg",
  hatrick: "../../assets/images/thundergong-hatrick-control.jpg",
  team: "../../assets/images/thundergong-backstage-team.jpg",
  tg24: "../../assets/images/blog/thundergong-2024.png",
  tg22: "../../assets/images/blog/thundergong-2022.jpeg",
  gooey: "../../assets/images/blog/super-gooey-plastic.jpeg",
  collage: "../../assets/images/blog/collage-o-tron-5000.jpeg",
  guitar: "../../assets/images/blog/electric-guitar.jpeg",
  atlas: "../../assets/images/projects/atlas9-01.jpg",
};

const PROJECTS = [
  { slug: "atlas9", title: "Atlas9" },
  { slug: "thundergong", title: "Thundergong" },
  { slug: "terra-luna", title: "Terra Luna" },
  { slug: "spectacle-society", title: "Spectacle Society" },
];

const POSTS = [
  {
    slug: "milhouse",
    title: "Make Milhouse Gorgeous in TouchDesigner",
    date: "Aug 8, 2026",
    image: IMG.milhouse,
    alt: "Milhouse rendered with a shiny PBR material in TouchDesigner",
  },
  {
    slug: "audio",
    title: "Interactive Audio in TouchDesigner",
    date: "Mar 30, 2025",
    alt: "A TouchDesigner network for an interactive audio project",
  },
  {
    slug: "tg24",
    title: "Thundergong 2024!",
    date: "Nov 17, 2024",
    image: IMG.tg24,
    alt: "ThunderGong 2024 performers and audience under bright stage lighting",
  },
  {
    slug: "gooey",
    title: "Super-Gooey Plastic in TouchDesigner",
    date: "Mar 27, 2024",
    image: IMG.gooey,
    alt: "A glossy pink and blue abstract form created in TouchDesigner",
  },
  {
    slug: "tg22",
    title: "ThunderGong 2022 and Hatrick Swayze",
    date: "Dec 4, 2022",
    image: IMG.tg22,
    alt: "Performers onstage at ThunderGong 2022 beneath colorful concert lighting",
  },
  {
    slug: "collage",
    title: "Collage-o-tron 5000",
    date: "Dec 28, 2020",
    image: IMG.collage,
    alt: "A musician performing inside a colorful, layered digital collage",
  },
  {
    slug: "guitar",
    title: "Creating a Playable 12-Foot-Tall Electric Guitar",
    date: "Jun 20, 2017",
    image: IMG.guitar,
    alt: "A festival attendee playing a giant illuminated electric guitar",
  },
];

const TONES = ["pink", "cyan", "lime", "orange"];

const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--gutter)",
};
const prose = {
  maxWidth: "var(--container-prose)",
  margin: "0 auto",
  padding: "0 var(--gutter)",
};
const eyebrow = (color = "var(--neon-pink)") => ({
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "var(--tracking-eyebrow)",
  textTransform: "uppercase",
  color,
});
const display = (size) => ({
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: size,
  lineHeight: 0.95,
  letterSpacing: "var(--tracking-tight)",
  color: "var(--text-primary)",
  margin: 0,
});
const body = {
  fontSize: "var(--text-body)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--text-secondary)",
};
const rule = {
  border: 0,
  height: 1,
  background: "var(--border-default)",
  margin: "var(--space-6) 0",
};

function HomeScreen({ go }) {
  const { Button } = DS();
  return (
    <main style={{ ...wrap, paddingTop: "var(--space-9)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "var(--space-8)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
          }}
        >
          <span style={eyebrow()}>Creative technologist · Kansas City</span>
          <h1 style={display("var(--text-display-xl)")}>Hello, I'm Chris.</h1>
          <p
            style={{
              fontSize: "var(--text-lead)",
              lineHeight: 1.5,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            I lead Creative Technology at{" "}
            <a href="https://dimin.com">Dimensional Innovations</a>, where my
            teams build interactive installations and immersive experiences for
            stadiums, museums, and entertainment venues.
          </p>
        </div>
        <div
          style={{
            aspectRatio: "4 / 5",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border-default)",
            background: "var(--surface-raised)",
          }}
        >
          <img
            src={IMG.chris}
            alt="Chris at Thundergong"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
      <div
        style={{
          maxWidth: "var(--measure)",
          marginTop: "var(--space-8)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
        }}
      >
        <p style={{ ...body, margin: 0 }}>
          Twenty-plus years in, my work has run the gamut from web applications
          to venue-scale projects like{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go("Projects");
            }}
          >
            Atlas9
          </a>
          . The through-line has always been the same: knowing what an
          experience should feel like, and building until it does.
        </p>
        <p style={{ ...body, margin: 0 }}>
          I came up through creative coding (TouchDesigner, Processing,
          openFrameworks) and taught interactive installation and interaction
          design at the collegiate level. These days most of my energy goes into
          building teams of artists and technologists, and making sure the
          people doing the work have what they need to do it well.{" "}
          <strong>I learned from generous mentors. I try to be one.</strong>
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            marginTop: "var(--space-4)",
          }}
        >
          <Button iconRight="arrow-up-right" onClick={() => go("Projects")}>
            See the projects
          </Button>
          <Button variant="secondary" tone="cyan" onClick={() => go("Blog")}>
            Read the blog
          </Button>
        </div>
      </div>
    </main>
  );
}

function ProjectsScreen({ go }) {
  const { ProjectRow } = DS();
  return (
    <main style={{ ...wrap, paddingTop: "var(--space-9)" }}>
      <span style={eyebrow()}>Selected work</span>
      <h1
        style={{
          ...display("var(--text-display-lg)"),
          marginTop: "var(--space-4)",
        }}
      >
        Projects
      </h1>
      <p
        style={{
          ...body,
          fontSize: "var(--text-lead)",
          marginTop: "var(--space-4)",
        }}
      >
        A few things taking shape. More to come.
      </p>
      <div
        style={{
          marginTop: "var(--space-7)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectRow
            key={p.slug}
            index={i + 1}
            title={p.title}
            tone={TONES[i % 4]}
            href={"#" + p.slug}
            onClick={(e) => {
              e.preventDefault();
              if (p.slug === "thundergong") go("Thundergong");
            }}
          />
        ))}
      </div>
    </main>
  );
}

function ProjectDetailScreen({ go }) {
  const { Button, Tag } = DS();
  const fig = (src, alt) => (
    <figure
      style={{
        margin: "var(--space-6) 0",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        border: "1px solid var(--border-default)",
      }}
    >
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </figure>
  );
  return (
    <main style={{ paddingTop: "var(--space-7)" }}>
      <div style={prose}>
        <Button
          variant="ghost"
          size="sm"
          icon="arrow-left"
          onClick={() => go("Projects")}
        >
          All projects
        </Button>
        <div
          style={{
            ...eyebrow("var(--neon-cyan)"),
            marginTop: "var(--space-6)",
          }}
        >
          Project 02
        </div>
        <h1
          style={{
            ...display("var(--text-display-lg)"),
            marginTop: "var(--space-3)",
          }}
        >
          Thundergong
        </h1>
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginTop: "var(--space-5)",
          }}
        >
          <Tag tone="cyan">Live visuals</Tag>
          <Tag>Music-reactive</Tag>
          <Tag>TouchDesigner</Tag>
        </div>
      </div>
      <div style={{ ...wrap, marginTop: "var(--space-7)" }}>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border-default)",
            aspectRatio: "16 / 8",
          }}
        >
          <img
            src={IMG.crowd}
            alt="The crowd at Thundergong"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
      <article style={{ ...prose, ...body, marginTop: "var(--space-7)" }}>
        <p>
          Thundergong! is an annual star-studded rock-and-roll variety and
          comedy benefit show. Hosted by actor and Kansas City native Jason
          Sudeikis, the event raises money for the{" "}
          <a href="https://www.stepsoffaithfoundation.org/">
            Steps of Faith Foundation
          </a>{" "}
          to provide prosthetic limbs and care for uninsured and underinsured
          amputees.
        </p>
        <p>
          For the last several years, I’ve had the opportunity to develop
          music-reactive visuals, interactive characters and other fun stuff for
          the show.
        </p>
        {fig(
          IMG.hatrick,
          "The Hatrick Swayze control panel running side-stage",
        )}
        <p>
          The very first Thundergong that I was a part of, we developed a
          character named Hatrick Swayze. He was voiced by an actor back stage
          and his movements were controlled by a MIDI control surface.
        </p>
        {fig(IMG.team, "The team working backstage")}
        <p>
          One of the most fun things I get to do is create and perform the
          music-reactive visuals for the LED walls on stage. I do all this work
          in TouchDesigner and create previsualization tools so that the show
          team can get an idea of how everything will look on the night.
        </p>
      </article>
    </main>
  );
}

function BlogScreen({ go }) {
  const { PostCard } = DS();
  return (
    <main style={{ ...wrap, paddingTop: "var(--space-9)" }}>
      <span style={eyebrow("var(--neon-cyan)")}>Writing</span>
      <h1
        style={{
          ...display("var(--text-display-lg)"),
          marginTop: "var(--space-4)",
        }}
      >
        Blog
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "var(--space-7) var(--space-6)",
          marginTop: "var(--space-7)",
        }}
      >
        {POSTS.map((p, i) => (
          <PostCard
            key={p.slug}
            {...p}
            tone={i % 2 ? "pink" : "cyan"}
            href={"#" + p.slug}
            onClick={(e) => {
              e.preventDefault();
              if (p.slug === "milhouse") go("Post");
            }}
          />
        ))}
      </div>
    </main>
  );
}

function PostScreen({ go }) {
  const { Button } = DS();
  const h2 = {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "var(--text-h2)",
    letterSpacing: "-0.02em",
    color: "var(--text-primary)",
    margin: "var(--space-7) 0 var(--space-4)",
  };
  return (
    <main style={{ paddingTop: "var(--space-7)" }}>
      <div style={{ ...wrap }}>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border-default)",
            aspectRatio: "16 / 8",
            background: "var(--surface-raised)",
          }}
        >
          <img
            src={IMG.milhouse}
            alt="Milhouse rendered with a shiny PBR material in TouchDesigner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
      <article style={{ ...prose, ...body, marginTop: "var(--space-7)" }}>
        <Button
          variant="ghost"
          size="sm"
          icon="arrow-left"
          onClick={() => go("Blog")}
        >
          All posts
        </Button>
        <div
          style={{
            ...eyebrow("var(--text-muted)"),
            marginTop: "var(--space-5)",
          }}
        >
          Aug 8, 2026
        </div>
        <h1
          style={{
            ...display("var(--text-display-md)"),
            lineHeight: 1.02,
            marginTop: "var(--space-3)",
          }}
        >
          Make Milhouse Gorgeous in TouchDesigner
        </h1>
        <hr style={rule} />
        <p>
          If you found your way here from the video, welcome! This is the
          companion post with all the detail that doesn’t fit in a two minute
          video, plus every link you need to go do this yourself.
        </p>
        <h2 style={h2}>The big idea</h2>
        <p>
          Here’s the thing:{" "}
          <strong>your FBX file doesn’t have PBR materials in it.</strong> The
          FBX format’s entire material vocabulary is Lambert and Phong. So when
          you drag an FBX into TouchDesigner and it comes in looking flat and
          sad, nothing is broken. The importer built you a{" "}
          <a href="https://docs.derivative.ca/Phong_MAT">Phong MAT</a> because
          that’s all the file could describe.
        </p>
        <p>
          <strong>Phong is a recipe for an appearance.</strong> It tells the
          renderer what the light should <em>look like</em>: make a specular
          dot, make it this tight, tint it this color, etc.
        </p>
        <p>
          <strong>PBR is an ingredient list.</strong> Physically Based Rendering
          tells the renderer what the surface <em>is</em>: this material is 60%
          rough, it’s not a metal, here’s its base color.
        </p>
        <h2 style={h2}>The recipe (the short version)</h2>
        <ol
          style={{
            paddingLeft: 22,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <li>
            <strong>Dive into your FBX node</strong> and find the Geometry node
            inside. Don’t freak out about all the other stuff in there.
          </li>
          <li>
            <strong>
              Replace the phong with a{" "}
              <a href="https://docs.derivative.ca/PBR_MAT">PBR MAT</a>
            </strong>{" "}
            and make sure the new material is actually assigned to the geometry.
          </li>
          <li>
            <strong>
              Add a{" "}
              <a href="https://docs.derivative.ca/Substance_TOP">
                Substance TOP
              </a>
            </strong>{" "}
            and point it at a <code>.sbsar</code> material file.
          </li>
          <li>
            <strong>Rotate the environment map</strong> until he’s looking supa
            hot. (This hotness is subjective)
          </li>
        </ol>
      </article>
    </main>
  );
}

function AboutScreen({ go }) {
  const { ExperienceItem } = DS();
  const jobs = [
    [
      "River City Studio",
      "2000",
      "My first job out of college was at River City Studio, where I worked as a web developer. I learned to code before LLMs were a thing. Even before Stack Overflow was a thing. Yes, I am old.",
    ],
    [
      "Bernstein-Rein",
      "2006",
      "I'm still in touch with many of the ridiculously talented people I worked with at BR. Being on this team was like playing for the Chicago Bulls in 1995.",
    ],
    [
      "RKO Workshop",
      "2011",
      "My friends John and Tim and I started RKO Workshop to create interactive installations for clients like the Nelson-Atkins Museum of Art. This is when I fell in love with applying technology to the built space.",
    ],
    [
      "Barkley",
      "2012",
      'I worked at Moonshot, the innovation lab at Barkley and my actual job title was "Inventor".',
    ],
    [
      "Dimensional Innovations",
      "2015",
      "I joined DI as the first on-staff software developer. Over the last decade (plus), I've helped build this team into what I now lead as the Director of Creative Technology.",
    ],
  ];
  return (
    <main style={{ paddingTop: "var(--space-7)" }}>
      <div style={wrap}>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border-default)",
            aspectRatio: "16 / 7",
            background: "var(--surface-raised)",
          }}
        >
          <img
            src={IMG.projection}
            alt="Chris Riebschlager performing in front of a colorful projected backdrop"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
      <div style={{ ...prose, marginTop: "var(--space-8)" }}>
        <h1 style={display("var(--text-display-lg)")}>About Me</h1>
        <p
          style={{
            ...body,
            fontSize: "var(--text-lead)",
            color: "var(--text-primary)",
            marginTop: "var(--space-5)",
          }}
        >
          I never know what to say when people ask me what I do. Maybe we could
          start with what I've done so far.
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-h2)",
            color: "var(--text-primary)",
            margin: "var(--space-8) 0 var(--space-4)",
          }}
        >
          The Work Experiences that Shaped Me
        </h2>
        {jobs.map(([org, year, text]) => (
          <ExperienceItem key={org} org={org} year={year}>
            {text}
          </ExperienceItem>
        ))}
        <hr style={rule} />
        <p style={{ ...body }}>
          <strong>
            Want to see what we've built? Check out my{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go("Projects");
              }}
            >
              projects
            </a>
            .
          </strong>
        </p>
      </div>
    </main>
  );
}

Object.assign(window, {
  HomeScreen,
  ProjectsScreen,
  ProjectDetailScreen,
  BlogScreen,
  PostScreen,
  AboutScreen,
});
