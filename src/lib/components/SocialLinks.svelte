<script>
	import { github, linkedin } from './../info'
</script>

<div
	class="flex flex-col items-center p-6 mt-20 space-y-5 md:mt-44 md:flex-row md:flex-start md:space-y-0 md:space-x-5"
>
	{#if linkedin}
		<a
			href={linkedin}
			target="_blank"
			class="flex justify-center w-1/2 px-5 py-3 space-x-2 text-sm font-thin transition duration-500 border border-white flex-end md:w-36 hover:bg-white hover:text-black group"
		>
			<svg
				class="transition duration-500 fill-white group-hover:fill-black"
				width="16"
				height="16"
				viewBox="0 0 20 18"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 2.00002C3.99974 2.53046 3.78877 3.03906 3.41351 3.41394C3.03825 3.78883 2.52943 3.99929 1.999 3.99902C1.46857 3.99876 0.959965 3.78779 0.585079 3.41253C0.210194 3.03727 -0.000264966 2.52846 2.50361e-07 1.99802C0.000265467 1.46759 0.211233 0.958988 0.586494 0.584103C0.961754 0.209218 1.47057 -0.00124153 2.001 -0.000976312C2.53143 -0.000711096 3.04004 0.210257 3.41492 0.585517C3.78981 0.960777 4.00027 1.46959 4 2.00002ZM4.06 5.48002H0.0600002V18H4.06V5.48002ZM10.38 5.48002H6.4V18H10.34V11.43C10.34 7.77002 15.11 7.43002 15.11 11.43V18H19.06V10.07C19.06 3.90002 12 4.13002 10.34 7.16002L10.38 5.48002Z"
				/>
			</svg>
			<span>LinkedIn</span>
		</a>
	{/if}

	{#if github}
		<a
			href={github}
			target="_blank"
			class="flex justify-center w-1/2 px-5 py-3 space-x-2 text-sm font-thin transition duration-500 border border-white flex-end md:w-36 hover:bg-white hover:text-black group"
		>
			<svg
				class="transition duration-500 fill-white group-hover:fill-black"
				width="16"
				height="16"
				viewBox="0 0 20 18"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10 0C4.475 0 1.45954e-06 4.475 1.45954e-06 10C-0.00113276 12.0993 0.658815 14.1456 1.88622 15.8487C3.11362 17.5517 4.84615 18.8251 6.838 19.488C7.338 19.575 7.525 19.275 7.525 19.012C7.525 18.775 7.512 17.988 7.512 17.15C5 17.613 4.35 16.538 4.15 15.975C4.037 15.687 3.55 14.8 3.125 14.562C2.775 14.375 2.275 13.912 3.112 13.9C3.9 13.887 4.462 14.625 4.65 14.925C5.55 16.437 6.988 16.012 7.562 15.75C7.65 15.1 7.912 14.663 8.2 14.413C5.975 14.163 3.65 13.3 3.65 9.475C3.65 8.387 4.037 7.488 4.675 6.787C4.575 6.537 4.225 5.512 4.775 4.137C4.775 4.137 5.612 3.875 7.525 5.163C8.33906 4.93706 9.18017 4.82334 10.025 4.825C10.875 4.825 11.725 4.937 12.525 5.162C14.437 3.862 15.275 4.138 15.275 4.138C15.825 5.513 15.475 6.538 15.375 6.788C16.012 7.488 16.4 8.375 16.4 9.475C16.4 13.313 14.063 14.163 11.838 14.413C12.2 14.725 12.513 15.325 12.513 16.263C12.513 17.6 12.5 18.675 12.5 19.013C12.5 19.275 12.688 19.587 13.188 19.487C15.173 18.8168 16.8979 17.541 18.1199 15.8392C19.3419 14.1373 19.9994 12.0951 20 10C20 4.475 15.525 0 10 0Z"
				/>
			</svg>
			<span>Github</span>
		</a>
	{/if}
</div>
