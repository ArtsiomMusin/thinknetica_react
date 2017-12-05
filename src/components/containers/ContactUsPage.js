import React from 'react';
import { set, assign } from 'lodash/object';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ContactUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  clearErrors(param) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', param],
      false
    ));
  }

  handleChange(param) {
    return (e) => {
      const value = e.target.value;
      switch (param) {
        case 'fullName':
          this.clearErrors('fullName');
          if (value.length < 1) {
            this.setState(set(
              assign({}, this.state),
              'form.errors.fullName',
              true
            ));
          }
          break;
        case 'email':
          this.clearErrors('email');
          if (!/([-_\w.]+)@(([\w]+\.)+)([a-zA-Z]{2,4})/.test(value)) {
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              true
            ));
          }
          break;
        case 'message':
          this.clearErrors('message');
          if (value.length < 1) {
            this.setState(set(
              assign({}, this.state),
              'form.errors.message',
              true
            ));
          }
          break;
      }

      this.setState(set(
        assign({}, this.state),
        ['form', 'values', param],
        value
      ));
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <h1>Contact us</h1>
        <form onSubmit={this.onSubmit}>
          <Text
            name="fullName"
            value={fullName}
            label="Full Name"
            onChange={this.handleChange('fullName')}
            error={this.state.form.errors.fullName}
          />
          <Text
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange('email')}
            error={this.state.form.errors.email}
          />
          <TextArea
            name="message"
            value={message}
            label="Message"
            onChange={this.handleChange('message')}
            error={this.state.form.errors.message}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}


export default ContactUsPage;

const Text = ({ name, value, onChange, label, error}) => (
  <FormGroup validationState={error ? 'error' : 'success'}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      name={name}
      id={name}
      type="text"
      value={value}
      onChange={onChange}
    />
  </FormGroup>
);

Text.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.boolean
};

const TextArea = ({ name, value, onChange, label, error}) => (
  <FormGroup validationState={error ? 'error' : 'success'}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      name={name}
      id={name}
      componentClass="textarea"
      placeholder="Type your message here"
      value={value}
      onChange={onChange}
    />
  </FormGroup>
);

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.boolean
};
