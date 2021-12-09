const tabs = document.querySelector('.features__tabs');
const tabsContent = document.querySelector('.features__tabs-wrapper');

const handleTab = (e) => {
	const clicked = e.target;
	const arr = Array.from(tabs.children);
	arr.forEach(item => item.classList.remove('active'));
	clicked.classList.add('active');
};

tabs.addEventListener('click', handleTab);