const Header = () => {
  return /*html*/ `<!-- WRAP HEADER -->
  <header class="site-header" id="site-header">
    <div class="container-full">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a
            class="navbar-brand tw-font-bold"
            style="color: #fd4312"
            data-navigo
            href="/"
            ><i class="fa-solid fa-code"></i
          ></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown tw-mx-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              style="color: #999"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            Categories
            </a>
            <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" data-navigo href="#/admin/categories">List Category</a>
            </li>
              <li>
                <a class="dropdown-item" data-navigo href="#/admin/category-add">Add Category</a>
              </li>
            </ul>
          </li>
          
              <li class="nav-item dropdown tw-mx-2">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style="color: #999"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" data-navigo href="#/admin/projects">List Project</a>
                </li>
                  <li>
                    <a class="dropdown-item" data-navigo href="#/admin/project-add">Add Project</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown tw-mx-2">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style="color: #999"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" data-navigo href="#/admin/blog">List Blog</a>
                </li>
                  <li><a class="dropdown-item" data-navigo href="#/admin/blog-add">Add Blog</a></li>
                </ul>
              </li>

              <li class="nav-item tw-mx-2">
                <a
                  class="nav-link"
                  href="#/admin/contact"
                  style="color: #999"
                  data-navigo
                >
                  Contact
                </a>
              </li>

              <li class="nav-item tw-mx-2">
                <a
                  class="nav-link"
                  href="#/admin/profile"
                  style="color: #999"
                  data-navigo
                >
                  ProFile
                </a>
              </li>
              <li class="nav-item tw-mx-2">
              <a
                class="nav-link"
                href="#/admin/about"
                style="color: #999"
                data-navigo
              >
                About
              </a>
            </li>
            <li class="nav-item tw-mx-2">
            <a
              class="nav-link"
              href="#/admin/doing"
              style="color: #999"
              data-navigo
            >
              Doing
            </a>
          </li>
            </ul>

            <!-- <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> -->
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!--END WRAP HEADER -->`;
};

export default Header;
