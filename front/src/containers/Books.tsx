import React, { useState, useEffect } from 'react';

// Types
import type { IBook } from '../utils/types/models/books';

// Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks, toggleReloadAll } from '../actions/bookActions';

// Components
import BookForm from '../components/Forms/BookForm';

// Styles
import '../styles/Books.css';

interface IState {
  authors: any;
  books: any;
}

function Books(): React.ReactElement {
  const dispatch = useDispatch();

  // State
  // Local
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    edition: null,
    publishedDate: '',
    publishedCountry: '',
    author: null,
  });

  // Global
  const allBooks = useSelector((state: IState) => state.books.allBooks);
  const reloadAll = useSelector((state: IState) => state.books.reloadAll);
  const allAuthors = useSelector((state: IState) => state.authors.allAuthors);

  // Effects
  useEffect(
    function reloadBooks() {
      if (reloadAll) {
        dispatch(toggleReloadAll(!reloadAll));
      }
    },
    [reloadAll],
  );

  useEffect(function getBooks() {
    dispatch(getAllBooks());
  }, []);

  return (
    <div className="Books">
      <div className="Books__Breadcrumbs">
        <Link to="/">Go Back</Link>
      </div>

      <div className="Books__Content">
        <div className="Books__Sidebar">
          <h2>Add a Book</h2>
          <BookForm
            formData={bookData}
            authors={allAuthors}
            setFormData={setBookData}
          />
        </div>

        <div className="Books__List">
          <h2>Books in library</h2>
          {allBooks.map((book: IBook) => (
            <p className="Books__List__Item" key={book.id}>
              {book.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
