import urlApi from "@/api/urlApi";
import { useEffect, useState } from "@/lib";
import axios from "axios";

const ProjectItem = ({ project }) => {
  const [cate, setCate] = useState({});

  useEffect(() => {
    axios
      .get(
        `${urlApi()}/categories/${project.categoryId}`
      )
      .then(({ data }) => setCate(data));
  }, [project]);

  return /*html*/ `
  <figure class="gallery-grid__item">
  <div class="tw-overflow-hidden tw-rounded-[10px] gallery-grid__image-wrap">
  <a href="#/project/${project.id}" data-navigo>
    <img
      class="gallery-grid__image hover:tw-scale-[1.1] tw-duration-[0.3s]"
      src="${project.avatar}"
      alt=""
    />
    </a>
  </div>
  <figcaption class="tw-inline-block">
  <a class="tw-no-underline" href="#/project/${project.id}" data-navigo><h4 class="gallery-grid__title tw-text-[#F1F2F4]">${project.name}</h4></a>
    <span class="gallery-grid__category tw-mt-[3px] tw-font-medium">${cate.name}</span>
  </figcaption>
</figure>`;
};

export default ProjectItem;
