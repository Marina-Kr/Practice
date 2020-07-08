'use scrict';

const modalAdd = document.querySelector(".modal__add");
AddAd = document.querySelector(".add__ad");
modalBtnSubmit = document.querySelector(".modal__btn-submit");
modalSubmit = document.querySelector(".modal__submit");
modalItem = document.querySelector(".modal__item");
catalog = document.querySelector(".catalog");

AddAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide');
	modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', (event) => {
	const target = event.target;

	if (target.closest(".modal__close") ||
		target === modalAdd) {
		modalAdd.classList.add('hide');
		modalSubmit.reset();	
	}
	});
	
catalog.addEventListener('click', () => {
	modalItem.classList.remove('hide');
});	

modalItem.addEventListener('click', (event) => {
	const target = event.target;

	if (target.closest(".modal__close") ||
		target === modalItem) {
		modalItem.classList.add('hide');
		modalSubmit.reset();	
	}
	});
	
window.addEventListener('keydown', function(e) {
  if ((e.key)==="Escape") {
	modalItem.classList.add('hide')
	modalAdd.classList.add('hide');};
  });
  