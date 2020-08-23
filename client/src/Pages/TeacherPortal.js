import React, { useEffect, useState } from "react";
import StuCard from "../components/Card/Card";
import axios from "axios";

const TeacherPortal = (props) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("/api/child").then((response) => {
      console.log(response);
      setStudents(response.data);
    });
  }, []);
  return (
    <div>
      {students.map((student) => {
        return (
          <StuCard
            firstName={student.firstName}
            lastName={student.lastName}
            parentOne={student.parent1}
            parentTwo={student.parent2}
            notes={student.notes}
          />
        );
      })}
    </div>
  );
};

export default TeacherPortal;
