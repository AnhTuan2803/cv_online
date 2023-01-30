const menus = [
  { id: 1, name: "Trang chủ", link: "/" },
  { id: 2, name: "Dự án", link: "/projects" },
  { id: 3, name: "Bài viết", link: "/posts" },
  { id: 4, name: "Liên hệ", link: "/contact" },
];

const projectsFake = [
  {
    id: 1,
    name: "Dự án 1",
    teams: [
      { id: 1, name: "Đạt" },
      { id: 2, name: "Tuấn" },
      { id: 3, name: "Tĩnh" },
    ],
  },
  { id: 2, name: "Dự án mẫu", author: "Tuấn" },
  { id: 3, name: "Dự án Tốt nghiệp", author: "Tuấn" },
];
export { projectsFake, menus };
