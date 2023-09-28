// $(window).on('load', function () {
//     $('.accordionList .accordionQuestion').click(function() {
//         var $accordionHead = $(this);
//         // Open and Close accordion
//         $accordionHead.next('.accordionPanel').slideToggle();

//         // After a sec, arrow icon will change
//         setTimeout(function() {
//             $accordionHead.toggleClass('open');
//         }, 100); // 1000 is 1 second
//     });
// });

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

// const questions = document.querySelectorAll(".question");

// questions.forEach((question) => {
//   const button = question.querySelector(".question__button");
//   const questionText = question.querySelector(".question__title__text");
//   button.addEventListener("click", () => {
//     questions.forEach((item) => {
//       if(item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });

//   questionText.addEventListener("click", () => {
//     questions.forEach((item) => {
//       if(item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });