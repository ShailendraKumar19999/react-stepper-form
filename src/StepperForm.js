import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
  FormHelperText,
  Radio,
  RadioGroup,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  
  Paper
} from '@mui/material';
import './index.css';
//import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from 'react-hook-form';

// create function for get steps
function getSteps() {
  return ['Personal Info', 'Additional Info', 'Summary'];
}
const PersonalInfo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Box
       
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100ch' },
        }}
        
        style={{ display: 'flex' }}
      >
        <Box
          
          sx={{
            '& .MuiTextField-root': { mt: 2, width: '50ch' },
          }}
        >
          <Controller
            control={control}
            name="firstName"
            rules={{ required: 'First name is required' }}
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                error={errors.firstName}
                {...field}
                helperText={errors.firstName?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{ required: 'last name is required' }}
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                {...field}
                error={errors.lastName}
                helperText={errors.lastName?.message}
              />
            )}
          />

          <div>
            <Controller
              control={control}
              rules={{ required: 'email is required' }}
              name="email"
              render={({ field }) => (
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter Your Email"
                  {...field}
                  error={errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </div>
          <Controller
            control={control}
            name="country"
            rules={{ required: 'country is required' }}
            render={({ field }) => (
              <FormControl sx={{ ml: 1, width: '50ch', mt: 2 }}>
                <InputLabel id="Country">Select Country</InputLabel>
                <Select
                  id="country"
                  label="Select Country"
                  variant="outlined"
                  placeholder="Enter Your Email"
                  {...field}
                  error={errors.country}
                  helperText={errors.country?.message}
                >
                  <MenuItem>Select Country...</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Russia">Russia</MenuItem>
                  <MenuItem value="Japan">Japan</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="address"
            rules={{ required: 'address is required' }}
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Address"
                {...field}
                error={errors.address}
                helperText={errors.address?.message}
              />
            )}
          />
          <div className="last">
            <Controller
              control={control}
              rules={{ required: 'city is required' }}
              name="city"
              render={({ field }) => (
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  placeholder="Enter City"
                  {...field}
                  error={errors.city}
                  helperText={errors.city?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="state"
              rules={{ required: 'state is required' }}
              render={({ field }) => (
                <TextField
                  id="state"
                  label="State / Province"
                  variant="outlined"
                  placeholder="Enter State"
                  {...field}
                  error={errors.state}
                  helperText={errors.state?.message}
                />
              )}
            />
            <Controller
              control={control}
              rules={{ required: 'zip code is required' }}
              name="zip"
              render={({ field }) => (
                <TextField
                  id="zip"
                  label="Zip / Postal"
                  variant="outlined"
                  placeholder="Enter Zip Code"
                  {...field}
                  error={errors.zip}
                  helperText={errors.state?.message}
                />
              )}
            />
          </div>
        </Box>
        
      </Box>
    </>
  );
};
const AdditionalInfo = () => {
  const {
    control,
    
  } = useFormContext();
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
      >
        <div style={{ margin: 'auto' }}>
          <FormLabel>By Email</FormLabel>
          <Controller
            control={control}
            name="comments"
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="comments" />}
                  label="Comments"
                  {...field}
                />
                <FormHelperText>
                  Get notified when someones posts a comment on a posting
                </FormHelperText>
              </FormGroup>
            )}
          />
          <Controller
            control={control}
            name="candidates"
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="candidates" />}
                  label="Candidates"
                  {...field}
                />
                <FormHelperText>
                  Get notified when someones posts a comment on a posting
                </FormHelperText>
              </FormGroup>
            )}
          />
          <Controller
            control={control}
            name="offers"
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="offers" />}
                  label="Offers"
                  {...field}
                  er
                />
                <FormHelperText>
                  Get notified when someones posts a comment on a posting
                </FormHelperText>
              </FormGroup>
            )}
          />

          <FormLabel component="form" className="push-notification">
            Push Notifications
          </FormLabel>
          <FormHelperText className="second">
            Get notified when someones posts a comment on a posting
          </FormHelperText>

          <Controller
            control={control}
            name="notification"
            render={({ field }) => (
              <FormGroup>
                <RadioGroup
                  defaultValue=""
                  aria-labelledby="demo-customized-radios"
                  
                  // name="customized-radios"
                >
                  <FormControlLabel
                    control={
                      <Radio value="everything" defaultValue="everything" />
                    }
                    label="Everything"
                    {...field}
                  />
                  
                  <FormControlLabel
                    control={
                      <Radio value="sameAsEmail" defaultValue="sameAsEmail" />
                    }
                    label="Same as email"
                    {...field}
                  />
                  
                  <FormControlLabel
                    control={
                      <Radio
                        value="noPushNotification"
                        defaultValue="noPushNotification"
                      />
                    }
                    label="No push notification"
                    {...field}
                  />
                  
                </RadioGroup>
              </FormGroup>
            )}
          />
        </div>
      </Box>
    </>
  );
};
const Summary = () => {
  // const { control } = useFormContext();
 const onSubmit = (data) => {
   console.log(data);
 };
  return (
    <>
      <div style={{marginTop:'3rem'}}>
        <h3>Applicants Information</h3>
        <small>Get notified when someones posts a comment on a posting</small><br />
        
        <table class="table table-striped" style={{marginTop:'20px'}}>
          <tbody>
            <tr>
              <td className="first-col">Full Name</td>
              <td>Mahesh Kumar</td>
            </tr>
            <tr>
              <td className="first-col">Application for</td>
              <td>Backend Developer</td>
            </tr>
            <tr>
              <td className="first-col">Email address</td>
              <td>mahesh@gmail.com</td>
            </tr>
            <tr>
              <td className="first-col">Salary expectation</td>
              <td>$120,000</td>
            </tr>
            <tr>
              <td className="first-col">About</td>
              <td>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  accusamus doloribus ipsa minima, quaerat accusantium quae
                  ipsam a eius! Veniam.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
// get all content according to step

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <AdditionalInfo />;
    case 2:
      return <Summary />;
    default:
      return 'unknown steps';
  }
}

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  // get all steps
  const steps = getSteps();
  // hook form
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      state: '',
      address: '',
      city: '',
      zip: '',
      comments: false,
      candidates: false,
      offers: false,
    },
  });
 
  // for Next step
  const handleNext = (data) => {
    console.log(data);
    setActiveStep(activeStep + 1);
  };
  // for Back step
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  // const onSubmit = (data) => {
  //   console.log(data)
  // }
  return (
    <div>
      {activeStep === 3 ? (
        <Typography
          variant="h2"
          align="center"
          height={'100vh'}
          style={{ marginTop: '4rem' }}
        >
          <div
            style={{ textAlign: '', fontWeight: '700 !important' }}
            className="success"
          >
            Success !
          </div>
          <div style={{ textAlign: '', color: '#1876D1' }} className="success">
            You have Signed up
          </div>
        </Typography>
      ) : (
        <>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {/* for display content form */}

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <div className="backNext-btn">
                <Button
                  color="primary"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  // onClick={handleNext}
                  type="submit"
                  style={{ marginLeft: '40px' }}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default StepperForm;
