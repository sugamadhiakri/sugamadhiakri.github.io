<script>
	import SocialLinks from './../lib/components/SocialLinks.svelte'
	import { name, bio } from '$lib/info'
</script>

<div
	class="flex flex-col items-center min-h-screen bg-black relative overflow-hidden"
	id="Home"
>
	<!-- Background Glow -->
	<div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
	<div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px]"></div>

	<div
		class="flex flex-col w-full md:w-9/12 max-w-[1080px] z-10"
	>
		<nav
			class="flex items-center justify-center w-full p-6 mt-10 font-thin text-gray-400 md:justify-between"
		>
			<p class="hidden text-2xl font-serif text-white tracking-tighter md:block">SA<span class="text-blue-500">.</span></p>
			<div class="flex space-x-8 text-sm tracking-widest uppercase">
				<a
					href="#Experience"
					class="hover:text-white transition-colors duration-300"
					>Experience</a
				>
				<a
					href="#Research"
					class="hover:text-white transition-colors duration-300"
					>Research</a
				>
				<a
					href="#Skills"
					class="hover:text-white transition-colors duration-300"
					>Skills</a
				>
			</div>
		</nav>
		
		<div
			class="flex flex-col p-6 mt-40 md:mt-56 text-center md:text-left"
		>
			<h3 class="text-blue-400 text-sm font-thin tracking-[0.3em] uppercase mb-4">Software Engineer & Platform Architect</h3>
			<h1 class="font-serif text-7xl md:text-9xl text-white leading-tight tracking-tighter">
				{name}
			</h1>
			<p class="mt-8 text-xl md:text-2xl text-gray-400 font-thin max-w-2xl leading-relaxed">
				{bio}
			</p>
			<div class="mt-12 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-6">
				<a href="#Experience" class="px-8 py-3 bg-white text-black text-xs font-normal rounded-full hover:bg-zinc-200 transition-all h-fit whitespace-nowrap">View My Work</a>
				<SocialLinks />
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center" id="Experience">
	<div class="flex flex-col w-full md:w-9/12 max-w-[1080px] p-6">
		<h1 class="mt-10 font-sans text-xl font-thin tracking-widest text-center md:text-left md:mt-20 text-gray-400">
			EXPERIENCE & IMPACT
		</h1>
		<p class="mt-4 text-gray-500 max-w-2xl text-center md:text-left font-thin italic">
			Engineering software engineering.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
			<!-- Smart Data Solutions Card -->
			<div class="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
				<div class="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
				
				<div class="flex justify-between items-start mb-6">
					<div>
						<h2 class="text-2xl font-serif text-white group-hover:text-blue-400 transition-colors">Platform Architect</h2>
						<a href="https://sdata.us/" target="_blank" class="text-blue-400/80 hover:underline text-sm font-thin">@ Smart Data Solutions</a>
					</div>
					<span class="text-xs font-thin text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full uppercase tracking-tighter">Present</span>
				</div>

				<div class="space-y-4 text-zinc-400 font-thin leading-relaxed">
					<p>
						I am <span class="text-white font-normal underline decoration-blue-500/50">spearheading the modernization</span> of a 35,000-class legacy ecosystem. My standout achievement has been slashing build times from <span class="text-white font-normal underline decoration-blue-500/50">30 minutes down to just 5</span> through Gradle re-engineering.
					</p>
					<p>
						Having successfully led our migration to <span class="text-white font-normal">Java 21</span>, I am now focused on the <span class="text-white font-normal underline decoration-blue-500/50">modularization of the monolith</span> to drive future scalability and developer velocity.
					</p>
				</div>

				<div class="flex flex-wrap gap-2 mt-8">
					{#each ['Java', 'Gradle', 'MySQL', 'Gitlab'] as tech}
						<span class="text-[10px] px-2 py-1 border border-zinc-800 rounded text-zinc-500 group-hover:border-zinc-700 transition-colors">{tech}</span>
					{/each}
				</div>
			</div>

			<!-- Verisk Card -->
			<div class="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all duration-500 overflow-hidden">
				<div class="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
				
				<div class="flex justify-between items-start mb-6">
					<div>
						<h2 class="text-2xl font-serif text-white group-hover:text-emerald-400 transition-colors">Software Engineer</h2>
						<a href="https://www.verisk.com" target="_blank" class="text-emerald-400/80 hover:underline text-sm font-thin">@ Verisk</a>
					</div>
					<span class="text-xs font-thin text-zinc-500">2022 - 2024</span>
				</div>

				<div class="space-y-4 text-zinc-400 font-thin leading-relaxed">
					<p>
						I was tasked with <span class="text-white font-normal underline decoration-emerald-500/50">re-architecting a decade-old ETL platform</span> from the ground up, moving from a legacy monolith to a high-performance modern stack.
					</p>
					<p>
						By studying read/write frequencies and orchestrating complex SQL optimizations, I ensured our data processing layer remained resilient and performant under the scale of modern data demands.
					</p>
				</div>

				<div class="flex flex-wrap gap-2 mt-8">
					{#each ['.NET Core', 'Angular', 'PostgreSQL', 'AWS'] as tech}
						<span class="text-[10px] px-2 py-1 border border-zinc-800 rounded text-zinc-500 group-hover:border-zinc-700 transition-colors">{tech}</span>
					{/each}
				</div>
			</div>

			<!-- Naamche Card -->
			<div class="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-all duration-500 overflow-hidden md:col-span-2">
				<div class="absolute -right-4 -top-4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500"></div>
				
				<div class="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
					<div>
						<h2 class="text-2xl font-serif text-white group-hover:text-purple-400 transition-colors">The Foundation</h2>
						<a href="https://www.naamche.com" target="_blank" class="text-purple-400/80 hover:underline text-sm font-thin">Internship @ Naamche — 2021</a>
					</div>
				</div>

				<p class="text-zinc-400 font-thin leading-relaxed max-w-3xl">
					Starting as a full-time intern at the startup Naamche was where I learned the weight of responsibility. I built the initial notification systems for a US-based gig economy product, implementing custom error handling and GraphQL APIs.
				</p>

				<div class="flex flex-wrap gap-2 mt-6">
					{#each ['NodeJs', 'GraphQL', 'TypeScript', 'PostgreSQL'] as tech}
						<span class="text-[10px] px-2 py-1 border border-zinc-800 rounded text-zinc-500">{tech}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center py-20 bg-zinc-950/20" id="Research">
	<div class="flex flex-col w-full md:w-9/12 max-w-[1080px] p-6 border-l border-zinc-800 md:ml-20">
		<h1 class="font-sans text-xs font-thin tracking-[0.3em] text-zinc-500 uppercase mb-8">
			Academic Pursuits
		</h1>
		
		<div class="space-y-12">
			<!-- Research -->
			<div class="group">
				<h2 class="text-3xl font-serif text-white mb-2 group-hover:translate-x-1 transition-transform inline-block">Research Internship</h2>
				<p class="text-blue-400 font-thin text-sm mb-4">University of Illinois Urbana-Champaign | 2023 - 2025</p>
				<div class="p-6 border-l-2 border-zinc-800 group-hover:border-blue-500/50 transition-colors">
					<p class="text-zinc-400 font-thin italic mb-2 text-sm">IEEE ICSME:</p>
					<a href="https://ieeexplore.ieee.org/document/10794998" target="_blank" class="block">
						<h3 class="text-white text-lg font-normal tracking-tight hover:text-blue-400 transition-colors cursor-pointer">
							"GlueTest: Testing Code Translation via Language Interoperability"
							<span class="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
						</h3>
					</a>
				</div>
			</div>

			<!-- Education -->
			<div class="group pt-10 border-t border-zinc-900" id="Education">
				<h2 class="text-3xl font-serif text-white mb-2 group-hover:translate-x-1 transition-transform inline-block">B.Sc. (Hons) Computing</h2>
				<p class="text-emerald-400 font-thin text-sm mb-4">London Metropolitan University | 2019 - 2022</p>
				<p class="text-zinc-500 font-thin">Graduated as Upper Second Class Honours</p>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center pb-40" id="Skills">
	<div class="flex flex-col w-full md:w-9/12 max-w-[1080px] p-6">
		<h1 class="font-sans text-xs font-thin tracking-[0.3em] text-zinc-500 uppercase mb-10 text-center">
			Skills
		</h1>
		<div class="flex flex-wrap justify-center gap-6">
			{#each ['Java', 'C#', 'Python', 'SQL', 'TypeScript', 'AWS'] as skill}
				<div class="px-6 py-3 bg-zinc-900/30 border border-zinc-800 rounded-xl text-zinc-300 font-thin hover:border-white/20 hover:text-white transition-all cursor-default hover:-translate-y-1">
					{skill}
				</div>
			{/each}
		</div>
	</div>
</div>
