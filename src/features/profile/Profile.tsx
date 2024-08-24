// import './Profile.scss'
// import { useState, useEffect } from 'react'

// import Sidebar from '../../components/Sidebar/Sidebar'
// import Dashboard from './Dashboard'
// import Table from './Table'

// import postsService from '../../services/postsService'

// const Profile = () => {
  // const [tags, setTags] = useState()
  // useEffect(() => {
  //   const handleGetAllTag = async () => {
  //     try {
  //       const res = await postsService.getAllTag()
  //       console.log(res.data)
  //       setTags(res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   handleGetAllTag()
  //   console.log("render nhieu lan")
  // },[])
//   return (
//     <div className="profile">
//       Profile
//     </div>
//   )
// }

// export default Profile

import { useState, useEffect } from 'react'

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from './Table';
import postsService from '../../services/postsService'
import './Profile.scss';

const Profile = () => {
  const [tags, setTags] = useState()
  useEffect(() => {
    const handleGetAllTag = async () => {
      try {
        const res = await postsService.getAllTag()
        console.log(res.data)
        setTags(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    handleGetAllTag()
    console.log("render nhieu lan")
  },[])
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <header>
          <button className="btn-add">Add new</button>
          <div className="filters">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Tags" />
          </div>
        </header>
        <Table />
        <div className="pagination">
          <button>Phân phân trang</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
