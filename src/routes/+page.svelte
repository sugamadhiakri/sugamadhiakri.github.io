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
					>Experience</a
				>
				<a
					href="#Education"
					class="hover:text-white hover:-translate-y-0.5"
					>Education</a
				>
				<a
					href="#Research"
					class="hover:text-white hover:-translate-y-0.5"
					>Research</a
				>
				<a
					href="#Skills"
					class="hover:text-white hover:-translate-y-0.5"
					>Skills</a
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
			<h1 class="md:ml-0">Platform Architect</h1>
			<div
				class="flex flex-col justify-between space-y-2 md:ml-0 md:flex-row md:space-y-0"
			>
				<a
					href="https://sdata.us/"
					target="_blank"
					class="font-thin text-blue-400 hover:underline hover:underline-white"
					>Smart Data Solutions</a
				>
				<div class="flex space-x-2 font-thin">
					<p>Java</p>
					<p>•</p>
					<p>MySQL</p>
					<p>•</p>
					<p>Gradle</p>
					<p>•</p>
					<p>Gitlab</p>
				</div>
				<h2 class="text-sm font-thin text-gray-400">
					2024 Jun - Present
				</h2>
			</div>
			<div class="mt-5 text-left text-gray-400 space-y-2">
				<p>
					Leading the upgrade of a large-scale legacy Java codebase (~35,000 classes) from Java 8 to 21 and transitioned the build system from Ant to Gradle, improving build consistency and developer experience.
				</p>
				<p>
					Set up an internal build artifact caching server that cut local build times from ~30 minutes to ~5 minutes, saving hours of engineering time each week.
				</p>
				<p>
					Improved dependency hygiene by applying static analysis to identify and remove unused libraries; replaced flatDir dependencies with a maintainable setup within Gitlab Package registry.
				</p>
			</div>
		</div>

		<div class="p-6">
			<h1 class="md:ml-0">Software Engineer</h1>
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
					<p>.NET</p>
					<p>•</p>
					<p>Angular</p>
					<p>•</p>
					<p>SQL</p>
					<p>•</p>
					<p>AWS</p>
				</div>
				<h2 class="text-sm font-thin text-gray-400">
					2022 Jun - 2024 May
				</h2>
			</div>
			<div class="mt-5 text-left text-gray-400 space-y-2">
				<p>
					Involvement in legacy ETL dashboard re-write from .NET Framework, AngularJs and SQL Server to .NET Core 6, Angular 13, and Aurora PostgreSQL.
				</p>
				<p>
					Architected the backend from the ground up with layered architecture, set up unit testing, integrated HashiCorp Vault for auth, and implemented structured logging.
				</p>
				<p>
					Created interactive charts using Chart.js and ng2-charts to monitor processing speed.
				</p>
				<p>
					SQL query optimization focused on flexibility and reusability, study of read/write frequencies, and introduction of strategic indexing.
				</p>
			</div>
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
					<p>•</p>
					<p>PostgreSQL</p>
				</div>
				<h2 class="text-sm font-thin text-gray-400">
					2021 Aug - 2021 Dec
				</h2>
			</div>

			<p class="mt-5 text-left text-gray-400">
				Built the initial stage of the notification system and implemented error handling with custom error types across the backend for a US-based gig economy product.
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col items-center" id="Education">
	<div
		class="flex flex-col w-full md:w-9/12 max-w-[1080px]"
	>
		<h1
			class="p-6 mt-10 font-sans text-xl font-thin text-center md:text-left md:mt-20"
		>
			EDUCATION
		</h1>
		<div class="p-6">
			<h1 class="md:ml-0">B.Sc. (Hons) Computing</h1>
			<div
				class="flex flex-col justify-between space-y-2 md:ml-0 md:flex-row md:space-y-0"
			>
				<p class="font-thin text-blue-400">London Metropolitan University</p>
				<h2 class="text-sm font-thin text-gray-400">
					2019 Sep - 2022 Jun
				</h2>
			</div>
			<p class="mt-5 text-left text-gray-400">
				Graduated as Upper Second Class Honours
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col items-center" id="Research">
	<div
		class="flex flex-col w-full md:w-9/12 max-w-[1080px]"
	>
		<h1
			class="p-6 mt-10 font-sans text-xl font-thin text-center md:text-left md:mt-20"
		>
			RESEARCH
		</h1>
		<div class="p-6">
			<h1 class="md:ml-0">Research Internship</h1>
			<div
				class="flex flex-col justify-between space-y-2 md:ml-0 md:flex-row md:space-y-0"
			>
				<p class="font-thin text-blue-400">University of Illinois Urbana-Champaign</p>
				<h2 class="text-sm font-thin text-gray-400">
					2023 Mar - Present
				</h2>
			</div>
			<p class="mt-5 text-left text-gray-400">
				Published a paper in IEEE ICSME: <br>
				<span class="font-bold italic">GlueTest: Testing Code Translation via Language Interoperability</span>
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col items-center mb-20" id="Skills">
	<div
		class="flex flex-col w-full md:w-9/12 max-w-[1080px]"
	>
		<h1
			class="p-6 mt-10 font-sans text-xl font-thin text-center md:text-left md:mt-20"
		>
			SKILLS
		</h1>
		<div class="flex flex-wrap p-6 gap-4">
			{#each ['Java', 'C#', 'Python', 'SQL', 'TypeScript'] as skill}
				<div class="px-5 py-2 border border-gray-600 rounded-full font-thin text-gray-300 hover:border-white hover:text-white transition-colors cursor-default">
					{skill}
				</div>
			{/each}
		</div>
	</div>
</div>
