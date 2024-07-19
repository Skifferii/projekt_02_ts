import { useFormik } from "formik";

import Input from "../components/Input/Input";
import { EmployeeFormContainer } from "./styles";
import Button from "../components/Button/Button";
import { EMPLOYEE_FORM_FIELDS, EmployeeFormValue } from "./types";

function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_FIELDS.NAME]: "",
      [EMPLOYEE_FORM_FIELDS.SURNAME]: "",
      [EMPLOYEE_FORM_FIELDS.JOB_TITLE]: "",
    } as EmployeeFormValue,
    onSubmit: (values: EmployeeFormValue) => {
      console.table(values);
    },
  });
  console.log(formik);

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name={EMPLOYEE_FORM_FIELDS.NAME}
        label="Name"
        placeholder="Enter employee name"
        id="employee_name_id"
        value={formik.values [EMPLOYEE_FORM_FIELDS.NAME] }
        onChange={formik.handleChange}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.SURNAME}
        label="Surname"
        placeholder="Enter employee surname"
        id="employee_surname_id"
        value={formik.values [EMPLOYEE_FORM_FIELDS.SURNAME] }
        onChange={formik.handleChange}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.JOB_TITLE}
        label="Job title"
        placeholder="Enter employee job title"
        id="employee_job_id"
        value={formik.values [EMPLOYEE_FORM_FIELDS.JOB_TITLE] }
        onChange={formik.handleChange}
      />
      <Button name="Create" type="submit"  />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
