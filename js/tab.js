document.addEventListener('DOMContentLoaded', () => {
  const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
  const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

  for (const tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
      tabsHandlerElems.forEach((item) => {
        tab === item
          ? item.classList.add('button-item-active')
          : item.classList.remove('button-item-active');
      });

      tabsFieldElems.forEach((item) => {
        item.dataset.tabsField === tab.dataset.tabsHandler
          ? item.classList.remove('hidden')
          : item.classList.add('hidden');
      });
    });
  }
});
