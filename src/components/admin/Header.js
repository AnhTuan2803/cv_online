const Header = () => {
  return /*html*/ `<!-- WRAP HEADER -->
  <header class="site-header" id="site-header">
    <div class="container-full">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a
            class="navbar-brand tw-font-bold"
            style="color: #fd4312"
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
                  Projects
                </a>
                <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" data-navigo href="/admin/projects">Lists Project</a>
                </li>
                  <li>
                    <a class="dropdown-item" data-navigo href="/admin/project-add">Add Project</a>
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
                  <a class="dropdown-item" href="#">List Blog</a>
                </li>
                  <li><a class="dropdown-item" href="#">Add Blog</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown tw-mx-2">
                <a
                  class="nav-link"
                  href="/admin/profile"
                  style="color: #999"
                  data-navigo
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ProFile
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