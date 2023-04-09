<script>
	import { email, phone } from '../info'
</script>

<footer class="flex flex-col items-center">
	<div
		class="flex w-3/4 max-w-[1080px] mt-20 border-b border-gray-400 border-b-1"
	/>
	<div
		class="flex flex-col items-center justify-center mt-10 mb-10 space-y-2 font-thin text-center md:space-y-0 md:flex-row md:space-x-6"
	>
		<p class="">{email}</p>
		<p class="hidden md:block">•</p>
		<p>{phone}</p>
	</div>
</footer>
