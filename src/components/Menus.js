// import { getMenus } from "@/api/menus";
// import { useEffect, useState } from "@/lib";
import MenuItem from "./MenuItem";
import menus from "@/data";

const Menus = () => {
  // const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await getMenus();
  //       setMenus(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  return /*html*/ `${menus?.map((menu) => MenuItem({ menu })).join("")}`;
};
export default Menus;
