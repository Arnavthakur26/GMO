import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Checkbox,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface Department {
  department: string;
  sub_departments: string[];
}

const data: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<number[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (index: number) => {
    setOpen((prevState) =>
      prevState.includes(index)
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };

  const handleSelectDepartment = (dept: Department) => {
    setSelected((prevState) => {
      // If the department is already selected, deselect it along with its sub-departments
      if (prevState.includes(dept.department)) {
        return prevState.filter(
          (item) =>
            item !== dept.department && !dept.sub_departments.includes(item)
        );
      } else {
        // If the department is not selected, select it along with all its sub-departments
        return [
          ...prevState,
          dept.department,
          ...dept.sub_departments.filter(
            (subDept) => !prevState.includes(subDept)
          ),
        ];
      }
    });
  };

  const handleSelectSubDepartment = (subDept: string, dept: Department) => {
    // Check if sub-department is already selected
    const isSubDeptSelected = selected.includes(subDept);

    setSelected((prevState) => {
      let updatedSelected: string[];
      if (isSubDeptSelected) {
        // If sub-department is already selected, deselect it
        updatedSelected = prevState.filter((item) => item !== subDept);
      } else {
        // Otherwise, select it
        updatedSelected = [...prevState, subDept];
      }

      // Check if all sub-departments of the department are selected
      const allSubDeptsSelected = dept.sub_departments.every((sub) =>
        updatedSelected.includes(sub)
      );

      // If all sub-departments are selected, also select the department
      if (allSubDeptsSelected && !updatedSelected.includes(dept.department)) {
        updatedSelected = [...updatedSelected, dept.department];
      } else if (
        !allSubDeptsSelected &&
        updatedSelected.includes(dept.department)
      ) {
        // If not all sub-departments are selected, deselect the department
        updatedSelected = updatedSelected.filter(
          (item) => item !== dept.department
        );
      }

      return updatedSelected;
    });
  };

  return (
    <List component="nav" style={{ maxWidth: 400, margin: "0 auto" }}>
      {data.map((department, index) => (
        <div key={department.department}>
          <ListItem button onClick={() => handleToggle(index)}>
            <Checkbox
              checked={selected.includes(department.department)}
              tabIndex={-1}
              disableRipple
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                handleSelectDepartment(department);
                handleToggle(index);
              }}
            />
            <ListItemText primary={department.department} />
            {open.includes(index) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.includes(index)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map((subDept) => (
                <ListItem
                  key={subDept}
                  button
                  style={{ marginLeft: "14px" }}
                  onClick={() => handleSelectSubDepartment(subDept, department)}
                >
                  <Checkbox
                    checked={selected.includes(subDept)}
                    tabIndex={-1}
                    disableRipple
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectSubDepartment(subDept, department);
                    }}
                  />
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
