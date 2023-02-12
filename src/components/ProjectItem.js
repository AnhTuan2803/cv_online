const ProjectItem = ({ project }) => {
  return /*html*/ `<figure class="gallery-grid__item category-concept">
  <div class="gallery-grid__image-wrap">
  <a href="/project/${project.id}">
                      <img class="gallery-grid__image cover lazyload" src="../assets/img/image_01.jpg" data-zoom alt="" />
                      </a>
</div>
                  <figcaption class="gallery-grid__caption">
    <h4 class="title gallery-grid__title">${project.name}</h4>
  <span class="gallery-grid__category">Concept</span>
</figcaption>
              </figure>`;
};

export default ProjectItem;
