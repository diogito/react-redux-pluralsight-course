import React from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onChange, onSave, errors, saving}) => {
  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="firstName"
        label="First name"
        value={author.firstName}
        onChange={onChange}
        error={errors.firstName}/>
      <TextInput
        name="lastName"
        label="Last Name"
        value={author.lastName}
        onChange={onChange}
        error={errors.lastName}/>
      <input
        type="submit"
        value={saving ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

AuthorForm.propTypes = {
  author: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
  saving: React.PropTypes.bool
};

export default AuthorForm;
