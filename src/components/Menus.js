import { getMenus } from "@/api/menus";
import { useEffect, useState } from "@/lib";
import MenuItem from "./MenuItem";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMenus();
        setMenus(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return /*html*/ `
  <div id="_menu" style="width: 0%; display: none;" class="inner-menu">
        <ul class="nav">
            ${menus?.map((menu) => MenuItem({ menu })).join("")}
        </ul>
  </div>
  `;
};
export default Menus;
