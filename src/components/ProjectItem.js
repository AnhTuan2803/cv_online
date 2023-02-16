const ProjectItem = ({ project }) => {
  return /*html*/ `
  <figure class="gallery-grid__item">
  <div class="gallery-grid__image-wrap">
  <a href="/project/${project.id}">
    <img
      class="gallery-grid__image"
      src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
      alt=""
    />
    </a>
  </div>
  <figcaption class="tw-inline-block">
  <a class="tw-no-underline hover:tw-text-red-500" href="/project/${project.id}"><h4 class="gallery-grid__title tw-text-[#F1F2F4]">${project.name}</h4></a>
    <span class="gallery-grid__category">Concept</span>
  </figcaption>
</figure>`;
};

export default ProjectItem;
