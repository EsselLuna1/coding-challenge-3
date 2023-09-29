const accordionTitles = document.querySelectorAll(".accordionQuestion");

accordionTitles.forEach((accordionQuestion) => {
	accordionQuestion.addEventListener("click", () => {
		if (accordionQuestion.classList.contains("is-open")) {
			accordionQuestion.classList.remove("is-open");
		} else {
			const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
			accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
				accordionTitleWithIsOpen.classList.remove("is-open");
			});
			accordionQuestion.classList.add("is-open");
		}
	});
});
