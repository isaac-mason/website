type EntryBase = {
    title: string;
    image: string;
    url: string;
    tags?: string[];
};

type ProjectEntry = EntryBase & { type: 'project' };
type PostEntry = EntryBase & { type: 'post' };
type SketchEntry = EntryBase & { type: 'sketch' };
type RepoEntry = EntryBase & { type: 'repo' };
type Entry = ProjectEntry | PostEntry | SketchEntry | RepoEntry;

const entries: Entry[] = [
    {
        type: 'repo',
        title: 'crashcat',
        image: 'crashcat.webp',
        url: 'https://github.com/isaac-mason/crashcat',
    },
    {
        type: 'repo',
        title: 'navcat',
        image: 'navcat.webp',
        url: 'https://github.com/isaac-mason/navcat',
    },
    {
        type: 'repo',
        title: 'gatho',
        image: 'gatho.webp',
        url: 'https://github.com/isaac-mason/gatho',
    },
    {
        type: 'repo',
        title: 'gpucat',
        image: 'gpucat.webp',
        url: 'https://github.com/isaac-mason/gpucat',
    },
    {
        type: 'repo',
        title: 'compilecat',
        image: 'compilecat.webp',
        url: 'https://github.com/isaac-mason/compilecat',
    },
    {
        type: 'repo',
        title: 'packcat',
        image: 'packcat.webp',
        url: 'https://github.com/isaac-mason/packcat',
    },
    {
        type: 'repo',
        title: 'mathcat',
        image: 'mathcat.webp',
        url: 'https://github.com/isaac-mason/mathcat',
    },
    {
        type: 'repo',
        title: 'recast-navigation-js',
        image: 'recast-navigation-js.webp',
        url: 'https://github.com/isaac-mason/recast-navigation-js',
    },
    {
        type: 'repo',
        title: 'js-physics-benchmarks',
        image: 'js-physics-benchmarks.webp',
        url: 'https://github.com/isaac-mason/js-physics-benchmarks',
    },
    {
        type: 'post',
        title: 'crashcat custom voxel shape',
        image: 'crashcat-custom-voxel-shape.webp',
        url: 'https://x.com/isaac_mason_/status/2019211802815639562',
        tags: ['physics', 'collision'],
    },
    {
        type: 'post',
        title: 'compilecat release',
        image: 'compilecat-post.webp',
        url: 'https://x.com/isaac_mason_/status/2065245578704085040',
        tags: ['compiler', 'optimization'],
    },
    {
        type: 'post',
        title: 'navcat custom areas',
        image: 'navcat-custom-areas.webp',
        url: 'https://x.com/isaac_mason_/status/1967448730036220187',
        tags: ['pathfinding'],
    },
    {
        type: 'post',
        title: 'navcat doors and keys',
        image: 'navcat-doors-and-keys.webp',
        url: 'https://x.com/isaac_mason_/status/1975527640825274431',
        tags: ['pathfinding'],
    },
    {
        type: 'post',
        title: 'introducing crashcat',
        image: 'post-crashcat.webp',
        url: 'https://x.com/isaac_mason_/status/2021906714686280052',
        tags: ['launch'],
    },
    {
        type: 'post',
        title: 'navcat, meet world',
        image: 'post-navcat.webp',
        url: 'https://x.com/isaac_mason_/status/1983893147605463154',
        tags: ['launch'],
    },
    {
        type: 'post',
        title: "import { crowd } from 'navcat/blocks'",
        image: 'import-crowd.webp',
        url: 'https://x.com/isaac_mason_/status/1988012661884555729',
        tags: ['crowd', 'pathfinding'],
    },
    {
        type: 'post',
        title: 'crawlers',
        image: 'crawlers.webp',
        url: 'https://x.com/isaac_mason_/status/1916673724452934098',
        tags: ['inverse kinematics'],
    },
    {
        type: 'post',
        title: 'another javascript car',
        image: 'another-javascript-car.webp',
        url: 'https://x.com/isaac_mason_/status/1989289209463701854',
        tags: ['raycast vehicle'],
    },
    {
        type: 'sketch',
        title: 'splatcrashnav',
        image: 'splatcrashnav.webp',
        url: 'https://sketches.isaacmason.com/sketch/splatcrashnav',
        tags: ['splat', 'physics', 'navigation'],
    },
    {
        type: 'sketch',
        title: 'marching cubes',
        image: 'marching-cubes.webp',
        url: 'https://sketches.isaacmason.com/sketch/marching-cubes',
        tags: ['c++', 'webassembly'],
    },
    {
        type: 'sketch',
        title: 'snek',
        image: 'snek.webp',
        url: 'https://sketches.isaacmason.com/sketch/snek',
        tags: ['fabrik', 'inverse kinematics'],
    },
    {
        type: 'post',
        title: 'navmesh generator website',
        image: 'navmesh-website.webp',
        url: 'https://x.com/isaac_mason_/status/1705134257130402287',
        tags: ['navmesh', 'webapp'],
    },
];

function Link({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 transition-colors duration-300 hover:text-accent-hover"
        >
            {children}
        </a>
    );
}

function EntryCard({ type, title, image: coverImage, url, tags }: Entry) {
    const contentTags = tags ?? [];
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col no-underline border border-white/20 overflow-hidden transition-colors duration-300 hover:border-white/60"
        >
            <div className="relative">
                <img src={coverImage} alt={title} className="w-full aspect-[4/3] object-cover block" />
                <span className="absolute top-1.5 left-1.5 text-xs bg-black/70 text-white/70 px-1.5 py-0.5 leading-none">
                    {type}
                </span>
            </div>
            <div className="flex flex-col gap-2 p-2 sm:p-3 flex-1">
                <span className="text-xs sm:text-sm tracking-wider leading-tight">{title}</span>
                {contentTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        {contentTags.map((tag) => (
                            <span key={tag} className="text-xs text-white/70 border border-white/25 px-1.5 py-0.5 leading-none">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
}

export function Homepage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <div className="flex flex-col items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-12 px-4">
                <h1 className="text-white text-5xl md:text-8xl">Hey, I'm Isaac</h1>

                <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl text-center">
                    I'm a software engineer in Australia building open source technology for games and complex web applications.
                </p>

                <div className="mt-4 flex gap-6 justify-center items-center text-md">
                    <Link href="https://github.com/isaac-mason">GitHub</Link>
                    <Link href="https://x.com/isaac_mason_">X</Link>
                    <Link href="https://www.linkedin.com/in/isaac-charles-grant-mason/">LinkedIn</Link>
                </div>
            </div>

            {/* Feed */}
            <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {entries.map((entry) => (
                        <EntryCard key={entry.url} {...entry} />
                    ))}
                </div>
            </main>

            {/* Experience */}
            <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 pb-16">
                <h2 className="text-white text-lg md:text-2xl mb-6">Experience</h2>
                <div className="flex flex-col gap-8 text-base md:text-lg">
                    <div>
                        <h3 className="text-white text-base md:text-lg">Consulting - 2026 ~ Present</h3>
                        <p className="mt-2 text-white/80">
                            Working for various clients in the areas of web game development and open source software.
                        </p>
                        <p className="mt-2 text-white/80">
                            Currently open to new consulting opportunities. Reach out on <Link href="https://linkedin.com/in/isaac-charles-grant-mason/">LinkedIn</Link> or <Link href="https://x.com/isaac_mason_">X</Link>!
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-base md:text-lg">
                            unreleased! - 2026 ~ Present
                        </h3>
                        <p className="mt-2 text-white/80">
                            Building a web game engine and platform for casual multiplayer games.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-base md:text-lg">Open Source - 2023 ~ Present</h3>
                        <ul className="mt-2 flex flex-col gap-1 text-white/80 list-disc list-inside">
                            <li>
                                Created <Link href="https://navcat.dev">navcat</Link>, a navigation mesh generation and
                                pathfinding library. The software is an iteration on ideas in the open source C++ recast
                                navigation library. It goes beyond recast-navigation library in implementing support for dynamic
                                off-mesh connections, any-tile to any-tile off mesh connections. It provides a more "JavaScript
                                native" API, uses fully JSON-serializable data structrures, and makes as few compromises on
                                performance as possible in JavaScript. People cold-DM me thanking me for creating it, I think I
                                did a good job.
                            </li>
                            <li>
                                Created <Link href="https://crashcat.dev">crashcat</Link>, a 3D rigid body physics engine with
                                support for convex and trimesh shapes, raycasting, shapecasting, continuous collision detection,
                                more. Built in pure JavaScript, with technical inspiration taken from JoltPhysics, Bullet, and
                                Box2D.
                            </li>
                            <li>
                                Created <Link href="https://github.com/isaac-mason/gpucat">gpucat</Link>, a node-based WebGPU
                                renderer that aims to offer a balance of ease-of-use, type-safety working with WebGPU, and
                                lower-level access.
                            </li>
                            <li>
                                Created <Link href="https://github.com/isaac-mason/compilecat">compilecat</Link>, a tool for
                                optimizing TypeScript code using approaches from Google Closure and LLVM.
                            </li>
                            <li>
                                Created <Link href="https://github.com/isaac-mason/packcat">packcat</Link>, a binary ser/des
                                library optimised for multiplayer game datatypes, that feels as natural as working with regular
                                JavaScript objects.
                            </li>
                            <li>
                                Currently building <Link href="https://github.com/isaac-mason/gatho">gatho</Link>, a toolkit for building and hosting JavaScript multiplayer games.
                            </li>
                            <li>
                                Created{' '}
                                <Link href="https://github.com/isaac-mason/recast-navigation-js">recast-navigation-js</Link>, a
                                WebAssembly port of the C++ Recast navigation library. Most new development now goes into navcat,
                                but recast-navigation-js is still actively maintained and widely used including in BabylonJS. It
                                is largely feature complete against it's upstream c++ library.
                            </li>
                            <li>
                                Maintaining <Link href="https://github.com/pmndrs/react-three-rapier">@react-three/rapier</Link>,
                                a @react-three/fiber integration for the Rapier physics engine.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-base md:text-lg">
                            <Link href="https://jamango.io/">Jamango!</Link> - 2024 ~ 2026
                        </h3>
                        <ul className="mt-1 flex flex-col gap-1 text-white/80 list-disc list-inside">
                            <li>
                                Joined part-way into the product's development. Journeyed with the team through several major
                                product iterations, from several versions of a visual based programming language, to later,
                                iterations of a JavaScript game creation API.
                            </li>
                            <li>
                                Development on the Jamango multiplayer browser game engine, built with JavaScript, WebGL,
                                C++/WebAssembly, WebSockets.
                            </li>
                            <li>
                                High agency role in product development - spearheaded development of several major features that
                                are now core to Jamango such as the "props" (game entity) system, the "items" API. Also
                                spearheaded development of several major features that gave us new information, which got put in
                                the bin, such as 2 major iterations on the visual programming language before the pivot to code
                                based APIs, several higher level game creation features that helped us find the level of
                                abstraction the tools should offer.
                            </li>
                            <li>Implemented physics with a custom C++ / WASM interface around Jolt Physics.</li>
                            <li>
                                Product and technical iteration on a visual node-based programming tool for making writing simple
                                multiplayer logic accessible to young audiences.
                            </li>
                            <li>Creation and maintenance of AWS infrastructure for dedicated game servers.</li>
                            <li>
                                Building and reworking of content management infrastructure for managing game assets through
                                several product pivots, from "assets" being high level items in a game-like inventory, to "assets"
                                being node graphs, to "assets" being files in a virtual filesystem.
                            </li>
                            <li>
                                Involved in community management, gathering feedback directly from end-user game creators in the
                                closed-alpha community, considering feedback in planning of next iterations on product features.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-base md:text-lg">Amazon, Grocery Technology - 2021 ~ 2024</h3>
                        <ul className="mt-1 flex flex-col gap-1 text-white/80 list-disc list-inside">
                            <li>
                                Designed and built a grocery warehouse management web application that visualises outbound
                                operations and provides problem solving tools used by grocery fulfilment centres in the US, EU,
                                India, and Japan.
                            </li>
                            <li>
                                Led a team in reworking a real-time data pipeline that calculates grocery fulfilment metrics to
                                support changes in fulfilment processes. Project unblocked a cross-org effort to improve
                                fulfilment productivity for all Amazon 3P grocery partners. Later assisted a team with deprecating
                                the service, acting as SME for the existing solution.
                            </li>
                            <li>Built web applications that facilitate customer pickup and delivery driver pickup.</li>
                            <li>
                                Maintained handheld scanner apps that facilitate warehouse processes for customer pickup and
                                delivery.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-base md:text-lg">Studio None - 2020 ~ 2021</h3>
                        <ul className="mt-1 flex flex-col gap-1 text-white/80 list-disc list-inside">
                            <li>Full stack web development for client websites, AWS infrastructure management with Terraform.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-base md:text-lg">Experimentary - 2019 ~ 2021</h3>
                        <ul className="mt-1 flex flex-col gap-1 text-white/80 list-disc list-inside">
                            <li>Built an online science education platform used in school classrooms and homeschools.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
