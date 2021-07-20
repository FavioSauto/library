import React, { useState, useEffect } from 'react';

// Types
import type { IAuthor } from '../utils/types/models/authors';

// Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleReloadAll } from '../actions/authorActions';

// Components
import AuthorForm from '../components/Forms/AuthorForm';

// Styles
import '../styles/Authors.css';

interface IState {
  authors: any;
}

function Authors() {
  const dispatch = useDispatch();

  // State
  // Local
  const [authorData, setAuthorData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    nationality: '',
  });

  // Global
  const allAuthors = useSelector((state: IState) => state.authors.allAuthors);
  const reloadAll = useSelector((state: IState) => state.authors.reloadAll);

  // Effects
  useEffect(() => {
    if (reloadAll) {
      dispatch(toggleReloadAll(!reloadAll));
    }
  }, [reloadAll]);

  return (
    <div className="Authors">
      <div className="Authors__Breadcrumbs">
        <Link to="/">Go Back</Link>
      </div>

      <div className="Authors__Content">
        <div className="Authors__Sidebar">
          <h2>Add an Author</h2>
          <AuthorForm formData={authorData} setFormData={setAuthorData} />
        </div>

        <div className="Authors__List">
          <h2>Authors in your Library</h2>
          {allAuthors.map((author: IAuthor) => {
            return (
              <p className="Authors__List__item" key={author.id}>
                {author.firstName} {author.lastName}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Authors;
