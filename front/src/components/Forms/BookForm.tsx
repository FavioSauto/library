import React from 'react';

import { countries } from '../../utils/countries';

// Types
import type { IFormProps, IDefaultData } from '../../utils/types/forms';
import type { IAuthor } from '../../utils/types/models/authors';

// Redux
import { useDispatch } from 'react-redux';
import { toggleReloadAll } from '../../actions/bookActions';

// Styles
import '../../styles/Form.css';

function BookForm(props: IFormProps) {
  const { formData, setFormData, authors = [] } = props;
  const dispatch = useDispatch();

  const defaultData: IDefaultData = {
    title: '',
    description: '',
    edition: 0,
    publishedDate: '',
    publishedCountry: '',
    author: '',
  };

  // Functions
  // Handlings
  function handleSubmit(event: any) {
    event.preventDefault();

    fetch(`http://localhost:3000/api/books`, {
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
  function authorOptions(author: IAuthor, index: number) {
    return (
      <option key={String(index)} value={author.id}>
        {`${author.firstName} ${author.lastName}`}
      </option>
    );
  }

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
          <label className="FormSection__Label" htmlFor="title">
            Title <span className="FormSection__Required">*</span>
          </label>
          <input
            className="FormSection__Input"
            onChange={handleChange}
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
          />
        </div>
      </div>

      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="description">
            Description
          </label>
          <textarea
            className="FormSection__Textarea"
            onChange={handleChange}
            placeholder="Description"
            name="description"
            value={formData.description}
          />
        </div>
      </div>

      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="edition">
            Edition
          </label>
          <input
            className="FormSection__Input"
            onChange={handleChange}
            type="number"
            name="edition"
            value={formData.edition}
          />
        </div>
      </div>

      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="publishedDate">
            Published date <span className="FormSection__Required">*</span>
          </label>
          <input
            className="FormSection__Input"
            onChange={handleChange}
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
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

      <div className="FormSection__Wrapper">
        <div className="FormSection">
          <label className="FormSection__Label" htmlFor="author">
            Select Author <span className="FormSection__Required">*</span>
          </label>
          <select
            className="FormSection__Select"
            onChange={handleChange}
            name="author"
            value={formData.author}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            {authors.map(authorOptions)}
          </select>
        </div>
      </div>

      <button
        className="FormSection__SubmitButton"
        type="submit"
        onClick={handleSubmit}
      >
        Add new Book
      </button>
    </form>
  );
}

export default BookForm;
