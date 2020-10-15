import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";
import Users from "./components/Users"

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false
}
const initialDisabled = true;
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  tos:""
  
};
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled); 
  const [users, setUsers] = useState([])

  const postNewUser = (newUser) => {

      axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        // console.log(res)
        // setUsers([res.data, ...users]);
        setUsers([...users, res.data ]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    const formSubmit = () =>{
        let newUser = {
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        password: formValues.password,
        tos: formValues.tos
      }
      
      // setUsers([ ...users, newUser ])
      // console.log(users)
      // console.log(newUser)
      // schema.isValid(formValues).then((valid) => {
      // setDisabled(!valid);
      // })
      postNewUser(newUser)
    }

    

 const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      }) 
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <div className="App">
      <h1>from app</h1>
      <Form values={formValues} change={inputChange} disabled={disabled} errors={formErrors} submit={formSubmit} />

      {users.map((item)=>{
        {console.log(users)}
        return  <Users  data={item}/>
      })}
      
    </div>
  );
}

export default App;
