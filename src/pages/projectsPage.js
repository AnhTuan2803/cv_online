import { getCategories } from "@/api/category";
import { getProjects } from "@/api/project";
import urlApi from "@/api/urlApi";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import ProjectList from "@/components/ProjectList";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "@/lib";
import axios from "axios";

const ProjectsPage = () => {
  document.title = "MyCV - Projects";
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProjects();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onHandleClick = async (id) => {
    if (id == 0) {
      const { data } = await getProjects();
      setProjects(data);
    } else {
      axios
        .get(`${urlApi()}/categories/${id}?_embed=projects`)
        .then(({ data }) => setProjects(data.projects));
    }
  };

  return /*html*/ `
  <main>
  <div class="container tw-pt-[6rem]">
    <div class="row">
      <!-- Sidebar -->
     ${Sidebar()}
        
    <!-- Content -->
        <div class="col-xl-9">
        <div class="shadow box tw-bg-[#302C40] tw-rounded-[20px]">
          <!-- Menu -->
        
        ${Menus()}
        
        
         <!-- About -->
         <div class="tw-pb-2">
          <h1 class="tw-relative title__separate tw-text-[#F1F2F4] tw-mb-[2rem] tw-text-[2rem] tw-font-bold tw-leading-[1.2]">
            Projects
          </h1>
        </div>

        <!-- Gallery -->
        <div>
          <!-- Filter -->
          <div class="select">
       
            <ul class="filter">
              
             ${Category({ categories, onClick: onHandleClick })}

            </ul>
            <!-- <input type="hidden" name="changemetoo" /> -->
          </div>

          <!-- Content -->
          <div class="tw-grid tw-grid-cols-3 tw-gap-4">
         
            <!-- Item -->
            ${ProjectList({ projects })}

          </div>
        </div>
      
      </div>
      
      <!-- Footer -->
      ${Footer()}
        </div>
  </div>
</div>	
</main>

<div class="back-to-top"></div>
  `;
};
export default ProjectsPage;
