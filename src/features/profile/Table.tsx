import { Modal } from 'antd';
import { toast } from 'react-toastify'
import { Tooltip } from 'react-tooltip';
import { postType } from './profileTypes';
import postsService from '../../services/postsService';
import { Dispatch, SetStateAction } from 'react';
import './Table.scss';

interface TableProps {
  posts: postType[];
  fetchPost: (current_page?: number) => Promise<void>
  isModalEditOpen: boolean
  setIsModalEditOpen: Dispatch<SetStateAction<boolean>>
  setcurrPostEdit: Dispatch<SetStateAction<postType>>
}

const { confirm } = Modal

const Table = ({ posts, fetchPost, isModalEditOpen, setIsModalEditOpen, setcurrPostEdit }: TableProps) => {

  const displayString = (value: any): string => {
    let result: string;
    if (Array.isArray(value)) {
      result = value.join(', ');
    } else if (typeof value === 'object' && value !== null) {
      result = Object.values(value).join(', ');
    } else {
      result = String(value);
    }

    return result;
  }

  const handleDeltePost = (id: string) => {
    postsService.delete(id)
      .then(res => {
        fetchPost()
        toast.info('Deleted', { theme: "colored" });
      })
      .catch(err => {
        toast.error('System error', { theme: "colored" });
    })
  }

  const OpenModalConfirm = (id: string) => {
    confirm({
      title: 'Confirm',
      content: `Do you want to delete this post?`,
      onOk: () => {
        handleDeltePost(id)
      },
    })
  }

  const OpenModalEdit = (post: postType) => {
    setIsModalEditOpen(true);
    setcurrPostEdit(post);
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
            {/* <td>{idx + 1}</td> */}
            <td>{post.id}</td>
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
              <button onClick={()=>OpenModalEdit(post)} className="btn-edit">✏️</button>
              <button onClick={()=>OpenModalConfirm(post.id)} className="btn-delete">🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

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
