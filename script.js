const items = document.querySelectorAll('.accordion .accordion-item');

function toggleAccordion() {
	this.classList.toggle('active');
	this.querySelector('.content').classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
