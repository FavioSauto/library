import type { IBook } from '../utils/types/models/books';
import { RELOAD_ALL, SET_ALL } from '../utils/types/actions/book';

export function toggleReloadAll(payload: boolean) {
  return {
    type: RELOAD_ALL,
    payload,
  };
}

export function setAllBooks(payload: IBook[]) {
  return {
    type: SET_ALL,
    payload,
  };
}

export function getAllBooks() {
  return async function (dispatch: (action: any) => {}) {
    const response = await fetch('http://localhost:3000/api/books');
    const books = await response.json();

    dispatch(setAllBooks(books));
  };
}
