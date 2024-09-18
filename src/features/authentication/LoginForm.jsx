import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useAuth } from './AuthContext';
//import { navigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();
  

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);

    // Redirect based on user role
    if (user) {
      switch (user.role) {
        case 'admin':
          navigate('/adimin');
          break;
        case 'supervisor':
          navigate('/supervisor');
          break;
        case 'recoder':
          navigate('/recoder');
          break;
        default:
          navigate('/dashboard');
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large">Login</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
