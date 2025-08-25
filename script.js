// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

const projects = {
    "rag-agent": {
        title: "RAG Agent Tool",
        description: `
        <h3>Problem Statement</h3>
        <p>Student-led clubs often lose valuable context and documentation as members graduate.</p>

        <h3>Key Findings</h3>
        <p>A Retrieval-Augmented Generation (RAG) system can help retain and serve historical knowledge through natural language queries.</p>

        <h3>Challenges</h3>
        <p>Integrating various data types (PDFs, images, structured files), ensuring embedding quality, and maintaining scoped, relevant responses.</p>

        <h3>Real-World Applications</h3>
        <p>This tool could help future club officers quickly retrieve past decisions, plans, and best practices from stored documents, preserving institutional memory.</p>
        `,
        github: "https://github.com/cpet2301/AgendaLLM",
    },
    "Drone-sim": {
        title: "Encrypted Drone Delivery Simulation",
        description: `
        <strong>Overview:</strong><br>
        A package delivery simulation set on the UMN campus. Users can schedule deliveries, triggering autonomous drones to transport packages to their destinations. Features include encrypted packages, real-time data collection, and an adversary entity ("Sky Reaper") that attempts to intercept classified deliveries.<br><br>

        <strong>Key Features:</strong><br>
        • <em>Data Collection Manager</em>: Centralized tracking of simulation events and entity metrics with real-time reporting and CSV export.<br>
        • <em>Encrypted Deliveries</em>: Packages are assigned one of four encryption levels, influencing the Sky Reaper's ability to hack them.<br>
        • <em>Sky Reaper AI</em>: An autonomous adversary that pursues drones and attempts to steal packages.<br><br>

        <strong>Design Patterns Used:</strong><br>
        • <em>Singleton</em> for global data tracking<br>
        • <em>Decorator</em> for flexible encryption logic<br>
        • <em>Observer</em> for decoupled event listening and drone-Reaper interactions<br><br>

        <strong>Challenges:</strong><br>
        • Integrating real-time stats with minimal simulation slowdown<br>
        • Implementing a believable AI adversary with balanced gameplay logic<br><br>

        <strong>Real-World Applications:</strong><br>
        • Simulating autonomous logistics systems<br>
        • Studying adversarial behavior in drone-based infrastructure<br>
        • Logging architectures for simulation analytics<br><br>

        <strong>Retrospective:</strong><br>
        We developed a robust extension under tight deadlines. Iterative testing and refactoring improved feature cohesion. Future improvements include better time budgeting and deeper modularity.
        `,
        docker: "https://hub.docker.com/r/elftmann1/drone_sim_final"
    },
    "Ice-Melts": {
        title: "Ice Melts",
        description: `
        <strong>Overview:</strong><br>
        Ice Melts is a 2D puzzle-platformer developed in Unity as part of the Video Game Development Club. You play as a sentient ice cube with the ability to transform between three physical states—ice, water, and steam—to solve environmental puzzles and traverse platforming challenges.<br><br>

        <strong>Gameplay Mechanics:</strong><br>
        • <em>Ice</em>: Solid and heavy, can slide across surfaces and press switches.<br>
        • <em>Water</em>: Fluid and versatile, able to pass through tight spaces like chains.<br>
        • <em>Steam</em>: Light and buoyant, rises through vertical spaces but difficult to control.<br><br>

        Players must strategically shift between forms to progress through each level, using the strengths and limitations of each state to navigate hazards and unlock paths.<br><br>

        <strong>Controls:</strong><br>
        • Move: W, A, S, D<br>
        • Transform: J (Water), K (Steam), L (Ice)<br>
        • Zoom Out: C<br>
        • Pause: Escape<br><br>

        <strong>Development:</strong><br>
        • Built in Unity using C#<br>
        • Developed by a student team during Spring 2025<br><br>

        <strong>Retrospective:</strong><br>
        Ice Melts was a creative challenge in balancing player transformation mechanics with platforming flow. The project helped us explore elemental gameplay design and modular character behavior in Unity.
        `,
        github: "https://github.com/Darianlime/IceMelts",
        live: "https://elftmann1.itch.io/ice-melts"
    },
    "Who-Said-It": {
        title: "Who Said It?",
        "description": `
        <strong>Overview:</strong><br>
        A Discord bot + web game built from over 100,000 real messages collected from a personal server with friends.<br><br>

        <strong>How It Works:</strong><br>
        • Every message from the server is stored in JSON files, organized by user.<br>
        • The web app randomly selects a past message and presents it to the player.<br>
        • Players must choose from 4 multiple-choice options to guess who sent the message.<br><br>

        <strong>Challenges:</strong><br>
        • Handling and storing a dataset of 100k+ chat messages.<br>
        • Protecting potentially sensitive personal content. I implemented a basic username/password system to restrict access.<br>
        • Randomizing answer sets to balance difficulty.<br>
        • Designing a lightweight UI for quick, replayable gameplay.<br><br>

        <strong>Takeaways:</strong><br>
        This project combined data processing, bot development, and frontend interactivity. It also strengthened my deployment experience: I hosted the game on <em>Render</em>, making it accessible online for free while managing security considerations. It showcased how large personal datasets can be repurposed into an engaging, accessible social game.<br><br>
        
        <img src="assets/images/Whosaid.png" alt="Who Said It? Screenshot" style="max-width:100%; border-radius:8px; margin-bottom:1rem;" />

        `,

    },
    "Hole": {
        title: "Hole In Ground Game",
        description: "A realistic physics simulation featuring collision detection and gravity, inspired by games like *Donut County*. Objects interact dynamically as they're absorbed into a growing hole.",
        live: "https://csci-4611-spring-2025.github.io/assignment-2-hole-in-the-ground-elftmann1/"
    },
    "ants-dance": {
        title: "So You Think Ants Can Dance",
        description: "A character animation project that applies real motion capture data to a custom-modeled ant character. Demonstrates skeletal animation, rigging, and the use of motion retargeting techniques in a real-time graphics environment.",
        live: "https://csci-4611-spring-2025.github.io/assignment-4-so-you-think-ants-can-dance-elftmann1/"
    },
    "Purple Crayon": {
        title: "Purple Crayon",
        description: "A sketch-based 3D modeling app inspired by Harold and the Purple Crayon. Users can draw directly in the scene to deform terrain, add sky strokes, and place floating billboards. Built using real-time mesh editing and 2D-to-3D projection techniques.",
        live: "https://csci-4611-spring-2025.github.io/assignment-6-a-world-made-of-drawings-elftmann1/"
    }
};



function loadProject(key) {
    const project = projects[key];
    const container = document.getElementById('project-detail');

    let linkSection = '';
    if (project.github) {
        linkSection += `<a href="${project.github}" target="_blank">View on GitHub</a><br>`;
    } else if (project.docker) {
        linkSection += `<a href="${project.docker}" target="_blank">View Docker</a><br>`;
    }

    if (project.live) {
        linkSection += `<a href="${project.live}" target="_blank">Live Demo</a>`;
    }

    container.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p>${linkSection}</p>
        ${project.live ? `<iframe src="${project.live}" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>` : ''}
    `;
}
