<script>
	import { name } from '$lib/info'
	import SocialLinks from './../lib/components/SocialLinks.svelte'
	import { sketch } from '$lib/drawable'
	import {
		drawablyButton,
		drawablyCard,
		drawablyBadge,
		drawablyUnderline,
		drawablyDivider,
		drawablyHighlight,
		drawablyCircle,
	} from 'drawably'

	const outlineButton = sketch(drawablyButton, { variant: 'outline' })
	const solidButton = sketch(drawablyButton, { variant: 'solid' })
	const card = sketch(drawablyCard)
	const badge = sketch(drawablyBadge, { variant: 'outline' })
	const scribbleBadge = sketch(drawablyBadge, { variant: 'scribble' })
	const underline = sketch(drawablyUnderline)
	const highlight = sketch(drawablyHighlight)
	const circle = sketch(drawablyCircle)
	const divider = sketch(drawablyDivider)
</script>

<!-- HERO: editorial, left-anchored, content vertically centred in the viewport -->
<main>
<div class="flex flex-1 flex-col min-h-[100dvh] relative overflow-hidden" id="Home">
	<div class="flex flex-1 flex-col w-full mx-auto max-w-6xl px-6">
		<nav class="flex items-center justify-center w-full py-3 mt-6 font-light text-zinc-600 md:justify-between md:py-4">
			<p use:circle class="hidden text-2xl font-pen text-ink tracking-tighter md:block">SA<span class="text-ink">.</span></p>
			<div class="flex space-x-4 text-xs tracking-widest uppercase md:space-x-8 md:text-sm">
				<a href="#Experience" use:outlineButton class="px-3 py-1.5 md:px-4">Experience</a>
				<a href="#Research" use:outlineButton class="px-3 py-1.5 md:px-4">Research</a>
				<a href="#Skills" use:outlineButton class="px-3 py-1.5 md:px-4">Skills</a>
			</div>
		</nav>

		<div class="hero-reveal flex flex-1 flex-col justify-center py-20 text-left">
			<h3 class="text-zinc-600 text-sm font-light tracking-[0.3em] uppercase mb-5">Software Engineer & Platform Architect</h3>
			<h1 class="font-pen text-ink leading-tight tracking-tighter">
				<span use:underline class="text-6xl sm:text-7xl md:text-8xl">{name}</span>
			</h1>
			<p class="mt-8 text-xl md:text-2xl text-zinc-600 font-light max-w-2xl leading-relaxed">Architecting scalable systems and modernizing legacy infrastructures with a focus on <span use:highlight class="text-ink">developer experience</span>.</p>
			<div class="mt-12 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
				<a href="#Experience" use:solidButton class="px-8 py-3 text-xs h-fit whitespace-nowrap">View My Work</a>
				<SocialLinks />
			</div>
		</div>
	</div>
</div>


<!-- EXPERIENCE: asymmetric card grid (7/5 split + full-width origin) -->
<section class="flex flex-col items-center py-28 md:py-32" id="Experience">
	<div class="flex flex-col w-full max-w-6xl px-6">
		<h2 class="text-3xl md:text-4xl font-serif font-medium tracking-tight text-zinc-900 mb-4">Experience</h2>
		<p class="text-zinc-600 max-w-2xl font-light italic mb-12">
			Engineering software engineering.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
			<!-- Smart Data Solutions Card -->
			<div use:card class="md:col-span-7 group relative p-8">
				<div class="flex justify-between items-start mb-6">
					<div>
						<h3 class="text-2xl font-pen text-ink">Platform Architect</h3>
						<a href="https://sdata.us/" target="_blank" use:underline class="text-ink text-sm font-light">@ Smart Data Solutions</a>
					</div>
					<span use:scribbleBadge class="text-xs text-ink" style="--drawably-stroke:#188a42; --drawably-fill:#188a42">Present</span>
				</div>

				<div class="space-y-4 text-zinc-600 font-light leading-relaxed">
					<p>
						I am <span class="text-ink font-medium" use:underline>spearheading the modernization</span> of a 35,000-class legacy ecosystem. My standout achievement has been slashing build times from <span class="text-ink font-medium" use:underline>30 minutes down to just 5</span> through Gradle re-engineering.
					</p>
					<p>
						Having successfully led our migration to <span class="text-ink font-medium" use:underline>Java 21</span>, I am now focused on the <span class="text-ink font-medium" use:underline>modularization of the monolith</span> to drive future scalability and developer velocity.
					</p>
				</div>

				<div class="flex flex-wrap gap-2 mt-8">
					{#each ['Java', 'Gradle', 'MySQL', 'Gitlab'] as tech}
						<span use:badge class="text-[10px] text-ink">{tech}</span>
					{/each}
				</div>
			</div>

			<!-- Verisk Card -->
			<div use:card class="md:col-span-5 group relative p-8">
				<div class="flex justify-between items-start mb-6">
					<div>
						<h3 class="text-2xl font-pen text-ink">Software Engineer</h3>
						<a href="https://www.verisk.com" target="_blank" use:underline class="text-ink text-sm font-light">@ Verisk</a>
					</div>
					<span class="text-xs font-light text-zinc-600">2022 - 2024</span>
				</div>

				<div class="space-y-4 text-zinc-600 font-light leading-relaxed">
					<p>
						I was tasked with <span class="text-ink font-medium" use:underline>re-architecting a decade-old ETL platform</span> from the ground up, moving from a legacy monolith to a high-performance modern stack.
					</p>
					<p>
						By studying read/write frequencies and orchestrating complex SQL optimizations, I ensured our data processing layer remained resilient and performant under the scale of modern data demands.
					</p>
				</div>

				<div class="flex flex-wrap gap-2 mt-8">
					{#each ['.NET Core', 'Angular', 'PostgreSQL', 'AWS'] as tech}
						<span use:badge class="text-[10px] text-ink">{tech}</span>
					{/each}
				</div>
			</div>

			<!-- Naamche Card: full-width origin entry -->
			<div use:card class="md:col-span-12 group relative p-8">
				<div class="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
					<div>
						<h3 class="text-2xl font-pen text-ink">The Foundation</h3>
						<a href="https://www.naamche.com" target="_blank" use:underline class="text-ink text-sm font-light">Internship @ Naamche · 2021</a>
					</div>
				</div>

				<p class="text-zinc-600 font-light leading-relaxed max-w-3xl">
					Starting as a full-time intern at the startup Naamche was where I learned the weight of responsibility. I built the initial notification systems for a US-based gig economy product, implementing custom error handling and GraphQL APIs.
				</p>

				<div class="flex flex-wrap gap-2 mt-6">
					{#each ['NodeJs', 'GraphQL', 'TypeScript', 'PostgreSQL'] as tech}
						<span use:badge class="text-[10px] text-ink">{tech}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- RESEARCH: featured card + editorial education entry, separated by a pen divider -->
<section class="flex flex-col items-center py-28 md:py-32" id="Research">
	<div class="flex flex-col w-full max-w-6xl px-6">
		<h2 class="text-3xl md:text-4xl font-serif font-medium tracking-tight text-zinc-900 mb-12">Research</h2>

		<div use:card class="group relative p-8 mb-12">
			<div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
				<div>
					<h3 class="text-3xl font-pen text-ink mb-2 group-hover:translate-x-1 transition-transform inline-block">Research Internship</h3>
					<p class="text-ink font-light text-sm">University of Illinois Urbana-Champaign | 2023 - 2025</p>
				</div>
			</div>
			<p class="text-zinc-600 font-light italic mb-2 text-sm">IEEE ICSME:</p>
			<a href="https://ieeexplore.ieee.org/document/10794998" target="_blank" class="block">
				<h4 class="text-ink text-lg font-normal tracking-tight cursor-pointer" use:underline>
					"GlueTest: Testing Code Translation via Language Interoperability"
					<span class="inline-block ml-1 opacity-100">↗</span>
				</h4>
			</a>
		</div>

		<div use:divider class="w-full" />

		<div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline mt-12" id="Education">
			<div class="md:col-span-7">
				<h3 class="text-2xl font-pen text-ink">B.Sc. (Hons) Computing</h3>
			</div>
			<div class="md:col-span-5 md:text-right">
				<p class="text-zinc-600 font-light text-sm">London Metropolitan University | 2019 - 2022</p>
				<p class="text-zinc-600 font-light text-sm mt-1">Graduated as Upper Second Class Honours</p>
			</div>
		</div>
	</div>
</section>

<!-- SKILLS: left-aligned badge cluster, no cards -->
<section class="flex flex-col items-center pt-28 pb-40" id="Skills">
	<div class="flex flex-col w-full max-w-6xl px-6">
		<h2 class="text-3xl md:text-4xl font-serif font-medium tracking-tight text-zinc-900 mb-10">Skills</h2>
		<div class="flex flex-wrap gap-6">
			{#each ['Java', 'C#', 'Python', 'SQL', 'TypeScript', 'AWS'] as skill}
				<span use:badge class="px-6 py-3 text-zinc-700 hover:text-ink hover:scale-105 transition-transform cursor-default">{skill}</span>
			{/each}
		</div>
	</div>
</section>
</main>
