import item from "../menu.json";
import menuItems from "../templates/menu_item.hbs";

const refs = {
    menuList: document.querySelector(".js-menu")
};

function madeMenuItem (item) {
const newItems = item.map(item => menuItems(item))
.join(" ");
refs.menuList.insertAdjacentHTML('afterbegin', newItems)
};

madeMenuItem(item);

