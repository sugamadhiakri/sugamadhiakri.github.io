<script>
	import SocialLinks from './../lib/components/SocialLinks.svelte'
	import { name, bio } from '$lib/info'
</script>

<div
	class="flex flex-col items-center min-h-screen bg-mattBlack"
	id="Home"
>
	<div
		class="flex flex-col w-full md:w-9/12 max-w-[1080px]"
	>
		<nav
			class="flex items-center justify-center w-full p-6 mt-10 font-thin text-gray-300 md:justify-between"
		>
			<p class="hidden text-2xl md:block">SA.</p>
			<div class="flex text-gray-100 space-x-7">
				<a
					href="#Experience"
					class="hover:text-white hover:-translate-y-0.5"
					>Resume</a
				>
			</div>
		</nav>
		<div
			class="flex flex-col p-6 mt-32 text-center md:text-left"
		>
			<h3 class="text-gray-300 text-md">Hey, I'm</h3>
			<h1 class="mt-6 font-serif text-7xl md:text-8xl">
				{name}
			</h1>
			<h3 class="mt-10 text-gray-300">
				{bio}
				<span class="font-bold duration-150 animate-ping" />
			</h3>
		</div>
		<SocialLinks />
	</div>
</div>
<div class="flex flex-col items-center" id="Experience">
	<div
		class="flex flex-col w-full md:w-9/12 max-w-[1080px]"
	>
		<h1
			class="p-6 mt-10 font-sans text-xl font-thin text-center md:text-left md:mt-20"
		>
			EXPERIENCE
		</h1>
		<div class="p-6">
			<h1 class="md:ml-0">.NET Developer</h1>
			<div
				class="flex flex-col justify-between space-y-2 md:ml-0 md:flex-row md:space-y-0"
			>
				<a
					href="https://www.verisk.com"
					target="_blank"
					class="font-thin text-blue-400 hover:underline hover:underline-white"
					>Verisk</a
				>
				<div class="flex space-x-2 font-thin">
					<p>C#</p>
					<p>•</p>
					<p>.NET</p>
					<p>•</p>
					<p>AWS</p>
					<p>•</p>
					<p>Angular</p>
				</div>
				<h2 class="text-sm font-thin text-gray-400">
					2022 Jun - Present
				</h2>
			</div>
			<p class="mt-5 text-left text-gray-400">
				Here at Verisk, I'm rewriting decades old ETL
				platform from ground-up using latest technologies.
			</p>
		</div>
		<div class="p-6">
			<h1 class="md:ml-0">Software Engineering Intern</h1>
			<div
				class="flex flex-col justify-between space-y-2 md:ml-0 md:flex-row md:space-y-0"
			>
				<a
					href="https://www.naamche.com"
					target="_blank"
					class="font-thin text-blue-400 hover:underline hover:underline-white"
					>Naamche</a
				>
				<div class="flex space-x-2 font-thin">
					<p>TypeScript</p>
					<p>•</p>
					<p>NodeJs</p>
					<p>•</p>
					<p>GraphQL</p>
				</div>
				<h2 class="text-sm font-thin text-gray-400">
					2021 Aug - 2022 Dec
				</h2>
			</div>

			<p class="mt-5 text-left text-gray-400">
				While Naamche was a startup, it helped me learn
				"responsibility" and to google things properly.
			</p>
		</div>
	</div>
</div>
