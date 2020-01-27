const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector("body"),
  pageInput: document.querySelector(".js-switch-input")
};

const contextTheme = localStorage.getItem("theme");

if (contextTheme === Theme.DARK) {
  refs.pageInput.checked=true;
  refs.body.classList.add(Theme.DARK)
};
if (contextTheme !== Theme.DARK) {
  refs.pageInput.checked=false;
  refs.body.classList.add(Theme.LIGHT)
};

function changeTheme () {
  if(event.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  }
  if (!event.target.checked) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT)
  }
}
refs.pageInput.addEventListener("change", changeTheme);