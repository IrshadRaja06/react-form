import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    teams: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formValues.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formValues.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!formValues.birthDate) {
      errors.birthDate = 'Date is required';
    }
    if (!formValues.email) {
      errors.email = 'Email is required';
    }
    if (!formValues.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    }
    if (!formValues.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formValues.startTime) {
      errors.startTime = 'Start Time is required';
    }
    if (!formValues.endTime) {
      errors.endTime = 'End Time is required';
    }
    if (!formValues.jobPosition) {
      errors.jobPosition = 'Job Position is required';
    }
    if (!formValues.teams) {
      errors.teams = 'Required';
    }
    if (!formValues.designation) {
      errors.designation = 'Required';
    }
    if (!formValues.billableHours || isNaN(formValues.billableHours)) {
      errors.billableHours = 'Billable Hours is required and must be a positive number';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <legend className='text-center pt-5 mb-0'>Employee Form</legend>
      <form className='px-5  row' onSubmit={handleSubmit}>
        <div className="col">
          <label className='fw-bold fs-4 pt-5'>First Name</label>
          <input
            className={`form-control ${formErrors.firstName ? 'border-danger' : ''}`}
            placeholder='Enter your First Name'
            name='firstName'
            value={formValues.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && <small className='text-danger'>{formErrors.firstName}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Birth Date</label>
          <input
            className={`form-control ${formErrors.birthDate ? 'border-danger' : ''}`}
            placeholder='Enter your DOB'
            name='birthDate'
            type='date'
            value={formValues.birthDate}
            onChange={handleChange}
          />
          {formErrors.birthDate && <small className='text-danger'>{formErrors.birthDate}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Select Gender</label>
          <select
            className={`form-control ${formErrors.gender ? 'border-danger' : ''}`}
            name='gender'
            value={formValues.gender}
            onChange={handleChange}
          >
            <option value=''>Choose Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Others</option>
          </select>
          {formErrors.gender && <small className='text-danger'>{formErrors.gender}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Job Position</label>
          <input
            className={`form-control ${formErrors.jobPosition ? 'border-danger' : ''}`}
            placeholder='Enter the job position'
            name='jobPosition'
            value={formValues.jobPosition}
            onChange={handleChange}
          />
          {formErrors.jobPosition && <small className='text-danger'>{formErrors.jobPosition}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Billable Hours</label>
          <input
            className={`form-control ${formErrors.billableHours ? 'border-danger' : ''}`}
            placeholder='Enter the billable hours'
            name='billableHours'
            value={formValues.billableHours}
            onChange={handleChange}
          />
          {formErrors.billableHours && <small className='text-danger'>{formErrors.billableHours}</small>}<br></br>
        </div>
        <div className="col">
          <label className='fw-bold fs-4 pt-5'>Middle Name</label>
          <input
            className='form-control'
            placeholder='Enter your Middle Name'
            name='middleName'
            value={formValues.middleName}
            onChange={handleChange}
          /><br></br>
          
          <label className='fw-bold fs-4 pt-5'>Email</label>
          <input
            className={`form-control ${formErrors.email ? 'border-danger' : ''}`}
            placeholder='Enter your Email'
            name='email'
            type='email'
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <small className='text-danger'>{formErrors.email}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Start Time</label>
          <input
            className={`form-control ${formErrors.startTime ? 'border-danger' : ''}`}
            name='startTime'
            type='time'
            value={formValues.startTime}
            onChange={handleChange}
          />
          {formErrors.startTime && <small className='text-danger'>{formErrors.startTime}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Select Teams</label>
          <select
            className={`form-control ${formErrors.teams ? 'border-danger' : ''}`}
            name='teams'
            value={formValues.teams}
            onChange={handleChange}
          >
            <option value=''>Select...</option>
            <option value='A'>Team A</option>
            <option value='B'>Team B</option>
            <option value='C'>Team C</option>
          </select>
          {formErrors.teams && <small className='text-danger'>{formErrors.teams}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>is Billable</label>
          <input
            type='checkbox'
            name='isBillable'
            checked={formValues.isBillable}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label className='fw-bold fs-4 pt-5'>Last Name</label>
          <input
            className={`form-control ${formErrors.lastName ? 'border-danger' : ''}`}
            placeholder='Enter your Last Name'
            name='lastName'
            value={formValues.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && <small className='text-danger'>{formErrors.lastName}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Phone Number</label>
          <input
            className={`form-control ${formErrors.phoneNumber ? 'border-danger' : ''}`}
            placeholder='Enter your Phone number'
            name='phoneNumber'
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
          {formErrors.phoneNumber && <small className='text-danger'>{formErrors.phoneNumber}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>End Time</label>
          <input
            className={`form-control ${formErrors.endTime ? 'border-danger' : ''}`}
            name='endTime'
            type='time'
            value={formValues.endTime}
            onChange={handleChange}
          />
          {formErrors.endTime && <small className='text-danger'>{formErrors.endTime}</small>}<br></br>
          
          <label className='fw-bold fs-4 pt-5'>Select Designation</label>
          <select
            className={`form-control ${formErrors.designation ? 'border-danger' : ''}`}
            name='designation'
            value={formValues.designation}
            onChange={handleChange}
          >
            <option value=''>Select...</option>
            <option value='Tester'>Tester</option>
            <option value='Manager'>Manager</option>
            <option value='Developer'>Developer</option>
          </select>
          {formErrors.designation && <small className='text-danger'>{formErrors.designation}</small>}<br></br>
        </div>
      </form>
      <div className="text-center pt-5">
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
