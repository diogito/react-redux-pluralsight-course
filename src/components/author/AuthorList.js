import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';
const AuthorList = ({authors}) => {
  return(
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author =>
            <AuthorListRow key={author.id} author={author}/>)}
        </tbody>
      </table>
    </div>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
