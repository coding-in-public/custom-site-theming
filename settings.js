// selectors
const toggles = document.querySelectorAll(".settings [type='checkbox']");
const radios = document.querySelectorAll(".settings [type='radio']");
const doc = document.documentElement;

// functions
function updateSiteUi({ name, value }) {
  return (doc.dataset[name] = value);
}

// event listeners
toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    const { name, checked } = e.target;
    updateSiteUi({ name, value: checked });
    localStorage.setItem(name, checked);
  });
});

radios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const { name, id } = e.target;
    updateSiteUi({ name, value: id });
    localStorage.setItem(name, id);
  });
});
