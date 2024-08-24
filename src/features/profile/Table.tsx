import React from 'react';
import './Table.scss';
import { Tooltip } from 'react-tooltip';
import { postType } from './profileTypes';

interface TableProps {
  posts: postType[];
}

const Table = ({ posts }: TableProps) => {

  const displayString = (value: any): string => {
    let result: string;
    if (Array.isArray(value)) {
      result = value.join(', ');
    } else if (typeof value === 'object' && value !== null) {
      // Nếu là object
      result = Object.values(value).join(', ');
    } else {
      // Các kiểu dữ liệu khác
      result = String(value);
    }

    return result;
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>
              <span data-tooltip-id={`tooltip-title-${idx}`} data-tooltip-content={post.title}>
                {post.title}
              </span>
              <Tooltip id={`tooltip-title-${idx}`} />
            </td>
            <td>
              <span data-tooltip-id={`tooltip-desc-${idx}`} data-tooltip-content={post.description}>
                 {post.description}
              </span>
              <Tooltip id={`tooltip-desc-${idx}`} />
            </td>
            <td>
              {/* <span data-tooltip-id={`tooltip-tags-${idx}`} data-tooltip-content={post.tags}> */}
              <span data-tooltip-id={`tooltip-tags-${idx}`} data-tooltip-content={displayString(post.tags)}>
                {displayString(post.tags)}
              </span>
              <Tooltip id={`tooltip-tags-${idx}`} />
            </td>
            <td className='action'>
              <button className="btn-edit">✏️</button>
              <button className="btn-delete">🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;



// import React from 'react';
// import './Table.scss';

// const Table: React.FC = () => {
//   return (
//     <table className="data-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Tags</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Array.from({ length: 10 }).map((_, idx) => (
//           <tr key={idx}>
//             <td data-fulltext={`${idx + 1}`}>{idx + 1}</td>
//             <td data-fulltext="ABC">ABC</td>
//             <td data-fulltext="Description">Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</td>
//             <td data-fulltext="HTML, CSS">HTML, CSS</td>
//             <td>
//               <button className="btn-edit">✏️</button>
//               <button className="btn-delete">🗑️</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
