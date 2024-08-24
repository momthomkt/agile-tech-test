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
import { Pagination, Select, Spin } from 'antd';
import { DownOutlined } from '@ant-design/icons'

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from './Table';
import { ReactComponent as ArrowDropdown } from "../../resources/images/arrowDropdown.svg"

import postsService, {getPostParam} from '../../services/postsService';
import { postType, dataPagingType } from './index';

import './Profile.scss';

const { Option } = Select;

const Profile = () => {
  const [tags, setTags] = useState<string[]>([])
  const [posts, setPost] = useState<postType[]>([])
  const [dataPaging, setDataPaging] = useState<dataPagingType>({
    current_page: 0,
    total_page: 0,
    page_size: 0,
    total: 0
  })
  const [currTitle, setCurrTitle] = useState<string>('')
  const [currTag, setCurrTag] = useState<string>('')
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
  }, [])
  
  useEffect(() => {
    handleGetPost()
  }, [])
  
  useEffect(() => {
    if (dataPaging.current_page > 0) {
      handleGetPost()
    }
  },[dataPaging])

  const handleGetPost = async () => {
    let param: getPostParam = {}
    if(currTag) param.tag = currTag
    if(currTitle) param.title = currTitle
    if(dataPaging.current_page) param.page = dataPaging.current_page
    postsService.getPost(param)
      .then((res) => {
        setPost(res.data?.posts)
        setDataPaging(prevDataPaging => {
          const newPaging = {
            current_page: res.data?.current_page,
            total_page: res.data?.total_page,
            page_size: res.data?.page_size,
            total: res.data?.total,
          };
          if (JSON.stringify(dataPaging) !== JSON.stringify(newPaging)) {
            return newPaging;
          }
          return prevDataPaging;
        });
      })
      .catch((err) => {
        console.log(err)
    })
  }

  const handleChangePage = (pageNumber: number) => {
    setDataPaging((prevDataPaging) => ({
      ...prevDataPaging,
      current_page: pageNumber
    }));
  };

  const handleChangeTag = (value: string) => {
    setCurrTag(value);
  };
  return (
    <div className="profile">
      <Sidebar />
      <div className="content">
        <header>
          <button className="btn-add">Add new</button>
          <div className="filters">
            <input type="text" placeholder="Title" />
            {/* <input type="text" placeholder="Tags" /> */}
            <Select
              placeholder={"Tag"}
              value={!currTag ? null : currTag}
              onChange={handleChangeTag}
              style={{ width: 200 }} // Điều chỉnh kích thước nếu cần
              className="custom-dropdown"
              dropdownStyle={{ borderRadius: '4px' }} // Custom dropdown style
              suffixIcon={<ArrowDropdown />} // Sử dụng icon mũi tên xuống
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
              {/* <Option value="tag1">Tag 1</Option>
              <Option value="tag2">Tag 2</Option>
              <Option value="tag3">Tag 3</Option> */}
              {/* Thêm các tùy chọn khác nếu cần */}
            {/* </Select> */}
          </div>
        </header>
        <Table posts={posts} />
        <div className="pagination">
          {Math.ceil(dataPaging.total / dataPaging.page_size) > 1 && <Pagination
            defaultCurrent={1}
            total={dataPaging.total}
            pageSize={dataPaging.page_size}
            showSizeChanger={false}
            onChange={handleChangePage}
          />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
