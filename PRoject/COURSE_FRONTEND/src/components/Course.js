import React from "react";
import base_url from "../API/bootApi";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import { useNavigate } from "react-router-dom"; // 🔸 Import navigate

const Course = ({ course, update }) => {
  const navigate = useNavigate(); // 🔸 Initialize navigate

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course Deleted Successfully..", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        update(id);
      },
      (error) => {
        toast.error("Course not deleted !! Server Problem..", {
          position: "bottom-right",
        });
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle tag={"h5"}>{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <CardText>(course id: {course.id})</CardText>
        <Container>
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>{" "}
          <Button
            color="warning"
            onClick={() => {
              navigate(`/update-course/${course.id}`); // 🔸 Navigate to update page
            }}
          >
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
