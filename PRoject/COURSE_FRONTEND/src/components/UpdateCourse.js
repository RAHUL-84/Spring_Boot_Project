import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap';

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    id: '',
    title: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8081/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        toast.error("Course not found", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored"
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8081/courses', course)
      .then(() => {
        toast.success("Course updated successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored"
        });
        navigate("/courses");
      })
      .catch(() => {
        toast.error("Error updating course.", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored"
        });
      });
  };

  return (
    <div>
      <h2 className="text-center my-3">Update Course</h2>
      <Container>
        <Card>
          <CardHeader><h4>Update Existing Course</h4></CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Course Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter course title"
                  value={course.title}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="description">Course Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Enter course description"
                  value={course.description}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <Container className="text-center">
                <Button type="submit" color="success">Update Course</Button> {/* ✅ Green Button */}
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default UpdateCourse;
