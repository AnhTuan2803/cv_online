import { useEffect, useState } from "@/lib";
import axios from "axios";

const ProjectItem = ({ project }) => {
  const [cate, setCate] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/categories/${project.categoryId}`)
      .then(({ data }) => setCate(data));
  }, [project]);

  return /*html*/ `
  <figure class="gallery-grid__item">
  <div class="gallery-grid__image-wrap">
  <a href="#/project/${project.id}" data-navigo>
    <img
      class="gallery-grid__image"
      src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
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
