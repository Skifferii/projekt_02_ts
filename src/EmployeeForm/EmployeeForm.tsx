import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../components/Input/Input";
import { EmployeeFormContainer } from "./styles";
import Button from "../components/Button/Button";
import { EMPLOYEE_FORM_FIELDS, EmployeeFormValue } from "./types";

function EmployeeForm() {
  const shema = Yup.object().shape({
    [EMPLOYEE_FORM_FIELDS.NAME]: Yup.string()
      .required("Filed NAME required")
      .min(2, "min 2 simbol")
      .max(20, "max simbol 20"),
    [EMPLOYEE_FORM_FIELDS.SURNAME]: Yup.string()
      .required("Filed SURNAME required")
      .min(2, "min 2 simbol")
      .max(130, "max simbol 130"),
      [EMPLOYEE_FORM_FIELDS.JOB_TITLE]: Yup.string()
      .required("Filed JOB_TITLE required")
      .max(30, "max simbol 30").min(0,"minimum 0"),
      [EMPLOYEE_FORM_FIELDS.SALARY]: Yup.number()
      .required("Filed SALARY required")
      .max(99999, "max simbol 5"),
  });
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_FIELDS.NAME]: "",
      [EMPLOYEE_FORM_FIELDS.SURNAME]: "",
      [EMPLOYEE_FORM_FIELDS.JOB_TITLE]: "",
      [EMPLOYEE_FORM_FIELDS.SALARY]: "",
    } as unknown as EmployeeFormValue, validationSchema: shema,
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
        error={formik.errors[EMPLOYEE_FORM_FIELDS.NAME]}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.SURNAME}
        label="Surname"
        placeholder="Enter employee surname"
        id="employee_surname_id"
        value={formik.values [EMPLOYEE_FORM_FIELDS.SURNAME] }
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.SURNAME]}
      />
       <Input
        name={EMPLOYEE_FORM_FIELDS.JOB_TITLE}
        label="Job title"
        placeholder="Enter employee job title"
        id="employee_job_id"
        value={formik.values [EMPLOYEE_FORM_FIELDS.JOB_TITLE] }
        onChange={formik.handleChange}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.SALARY}
        label="Salary"
        placeholder="Enter employee salary"
        id="employee_salary"
        value={formik.values [EMPLOYEE_FORM_FIELDS.SALARY] }
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.SALARY]}
      />
      
     
      <Button name="Create" type="submit"  />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
