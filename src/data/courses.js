export const courses = [
  {
    id: 1,
    title: "React พื้นฐาน",
    description: "เรียนรู้ React.js จากเริ่มต้น",
    lessons: 12,
    duration: "3 ชั่วโมง",
    level: "เริ่มต้น",
    image: "https://via.placeholder.com/300x200?text=React+Basics",
    topics: ["JSX", "Components", "Props", "State"]
  },
  {
    id: 2,
    title: "React Hooks",
    description: "เรียนรู้การใช้ Hooks ใน React",
    lessons: 8,
    duration: "2 ชั่วโมง",
    level: "กลาง",
    image: "https://via.placeholder.com/300x200?text=React+Hooks",
    topics: ["useState", "useEffect", "useContext", "Custom Hooks"]
  },
  {
    id: 3,
    title: "React Router",
    description: "สร้าง Single Page Application",
    lessons: 6,
    duration: "1.5 ชั่วโมง", 
    level: "กลาง",
    image: "https://via.placeholder.com/300x200?text=React+Router",
    topics: ["Routing", "Navigation", "Dynamic Routes", "Guards"]
  }
];

export const lessons = [
  {
    id: 1,
    courseId: 1,
    title: "แนะนำ React",
    videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
    duration: "15 min",
    description: "เรียนรู้พื้นฐานของ React และทำไมต้องใช้"
  },
  {
    id: 2,
    courseId: 1,
    title: "JSX คืออะไร",
    videoUrl: "https://www.youtube.com/watch?v=7fPXI_MnBOY", 
    duration: "20 min",
    description: "เข้าใจ JSX และวิธีการเขียน"
  }
];