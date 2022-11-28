import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Courses = ({ context }) => {
  const [courses, setCourses] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    context.data
      .getCourses()
      .then((data) => setCourses(data))
      .catch((err) => {
        console.log(err);
        navigate('/error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    {/**
    *   Create Course module 
    *
     */}
      <div className="wrap main--grid">
        <NavLink
          className="course--module course--add--module"
          to="/courses/create"
        >
          <span className="course--add--title">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 13 13"
              className="add"
            >
              <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
            </svg>
            new course
          </span>
        </NavLink>

        {/**
        * Courses mapped out and displayed on page dependent on id.
         */}
        {courses?.map((course) => {
          return (
            <NavLink
              className="course--module course--link"
              to={`/courses/${course.id}`}
              key={course.id}
            >
              <h2 className="course--label">course</h2>
              <h3 className="course--title">{course.title}</h3>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
