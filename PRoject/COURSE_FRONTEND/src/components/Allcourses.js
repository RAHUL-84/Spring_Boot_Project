import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../API/bootApi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";  // ✅ added for edit navigation

const Allcourses = () => {

  const navigate = useNavigate(); // ✅ hook for programmatic navigation

  useEffect(() => {
    document.title = "All Courses || RAHUL";
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        toast.success("Courses have been loaded..", {
          position: "bottom-right", autoClose: 5000,
          theme: "colored",
        });
        setCourses(response.data);
      },
      (error) => {
        toast.error("Something went wrong..", {
          position: "bottom-right", autoClose: 5000,
          theme: "colored",
        });
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/update-course/${id}`);  // ✅ navigate to UpdateCourse
  };

  return (
    <div className="text-center">
      <h1>All Courses</h1>
      <p>List of courses are as follows:</p>
      {
        courses.length > 0 ? courses.map((item) =>
          <Course
            key={item.id}
            course={item}
            update={updateCourses}
            onEdit={() => handleEdit(item.id)}  // ✅ pass edit function
          />
        ) : "No Courses Found"
      }
    </div>
  );
};

export default Allcourses;
