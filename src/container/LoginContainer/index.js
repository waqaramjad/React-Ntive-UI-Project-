// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export interface Props {
  navigation: any;
}
export interface State {}
class LoginForm extends React.Component<Props, State> {
  textInput: any;

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item error={error && touched}>
        {/* <Icon active name={input.name === "email" ? "person" : "unlock"} /> */}
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === "email" ? "Email" : "Password"}
          secureTextEntry={input.name === "password" ? true : false}
          {...input}
        />
      </Item>
    );
  }

  login() {
    if (this.props.valid) {
      this.props.navigation.navigate("Drawer");
    } else {
      Toast.show({
        text: "Enter Valid email !",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const form = (
      <Form  style={{ width:250 , marginTop: 10 , backgroundColor : 'white', 
      borderRadius:10,
      borderWidth: 1,}}>
        <Field
          name="email"
          component={this.renderInput}
          validate={[email, required]}

          style={{borderWidth: 2,
 
         
            borderRadius: 20 ,}}
          
        />
        
      </Form>
    );
    return (
      <Login
        navigation={this.props.navigation}
        loginForm={form}
        onLogin={() => this.login()}
      />
    );
  }
}
const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);
export default LoginContainer;
