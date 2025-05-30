import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const getLevelColor = (level) => {
    switch(level) {
      case 'เริ่มต้น': return 'bg-green-100 text-green-800';
      case 'กลาง': return 'bg-yellow-100 text-yellow-800';
      case 'สูง': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">
            {course.title}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
            {course.level}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">
          {course.description}
        </p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>📚 {course.lessons} บทเรียน</span>
          <span>⏱️ {course.duration}</span>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        
        <Link 
          to={`/courses/${course.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
        >
          เริ่มเรียน
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;