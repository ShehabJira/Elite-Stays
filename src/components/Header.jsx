function Header() {
	return (
		<header className="bg-secondary ">
			<div className="flex md:w-[62%] m-auto  items-center justify-between gap-5 px-3 pt-2 pb-1 ">
				{/* <img className="block w-16 p-1 rounded-full object-cover ml-3" src="/elite-stays-logo.webp" alt="Elite Stays Logo" /> */}
				<img className="block w-[3.82rem] xl:w-step5 p-1 rounded-full object-cover ml-3" src="/elite-stays-logo.webp" alt="Elite Stays Logo" />
				<p className="font-bold text-main-brand text-medium md:text-large  text-new2 mr-3 italic">Find the right room for your trip.</p>
			</div>
			<hr className="h-px  mx-auto w-1/2 mb-5 border-none bg-gradient-to-r from-transparent via-accent-textBlack dark:via-white to-transparent" />
		</header>
	);
}

export default Header;
