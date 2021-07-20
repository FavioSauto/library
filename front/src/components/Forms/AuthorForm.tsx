import React from 'react';

import { countries } from '../../utils/countries';

// Types
import type { IAuthor } from '../../utils/types/models/authors';
import type { IFormProps, IDefaultData } from '../../utils/types/forms';

// Redux
import { useDispatch } from 'react-redux';
import { toggleReloadAll } from '../../actions/authorActions';

// Styles
import '../../styles/Form.css';

function AuthorForm(props: IFormProps) {
  const { formData, setFormData, authors = [] } = props;
  const dispatch = useDispatch();

  const defaultData: IDefaultData = {
    firstName: '',
    lastName: '',
    birthDate: '',
    nationality: '',
  };

  // Functions
  // Handlings
  function handleSubmit(event: any) {
    event.preventDefault();

    fetch(`http://localhost:3000/api/authors`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => dispatch(toggleReloadAll(true)));

    setFormData(defaultData);
  }

  function handleChange(event: any) {
    const { name, value } = event.target;

    setFormData(function (prevData: any) {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  // Utils
  function countryOptions(country: string, index: number) {
    return (
      <option key={String(index)} value={country}>
        {country}
      </option>
    );
  }

  return (
    <form className="Form">
      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="firstName">
            Name <span className="FormSection__Required">*</span>
          </label>
          <input
            className="FormSection__Input"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="firstName"
            value={formData.firstName}
          />
        </div>
      </div>

      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="lastName">
            Last name <span className="FormSection__Required">*</span>
          </label>
          <input
            className="FormSection__Input"
            onChange={handleChange}
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
          />
        </div>
      </div>

      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="birthDate">
            Date of birth <span className="FormSection__Required">*</span>
          </label>
          <input
            className="FormSection__Input"
            onChange={handleChange}
            type="date"
            name="birthDate"
            value={formData.birthDate}
          />
        </div>
      </div>

      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="nationality">
            Select country <span className="FormSection__Required">*</span>
          </label>
          <select
            className="FormSection__Select"
            onChange={handleChange}
            name="nationality"
            value={formData.nationality}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            {countries.map(countryOptions)}
          </select>
        </div>
      </div>

      <button
        className="FormSection__SubmitButton"
        type="submit"
        onClick={handleSubmit}
      >
        Add new Author
      </button>
    </form>
  );
}

export default AuthorForm;
