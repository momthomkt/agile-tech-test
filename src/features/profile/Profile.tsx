import { useState, useEffect } from 'react'
import { Pagination, Select } from 'antd';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from './Table';
import ModalCreateEdit from './ModalCreateEdit';

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
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [currPostEdit, setcurrPostEdit] = useState<postType>({
    id: '',
    title: '',
    description: '',
    tags: []
  });

  useEffect(() => {
    const handleGetAllTag = async () => {
      try {
        const res = await postsService.getAllTag()
        setTags(res.data)
      } catch (error) {
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
  }, [dataPaging])
  
    useEffect(() => {
      handleGetPost(1)
  },[currTag, currTitle])

  const handleGetPost = async (current_page? : number) => {
    let param: getPostParam = {}
    if(currTag) param.tags = currTag
    if (currTitle) param.title = currTitle
    if (current_page) param.page = current_page
    else if(dataPaging.current_page) param.page = dataPaging.current_page
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

  const OpenModalCreate = () => {
    setIsModalCreateOpen(true)
    
  }

  return (
    <div className="profile">
      <Sidebar />
      <div className="content">
        <header>
          <button onClick={OpenModalCreate} className="btn-add">Add new</button>
          <div className="filters">
            <input type="text" placeholder="Title" onChange={(e)=>setCurrTitle(e.target.value)}/>
            <Select
              placeholder={"Tags"}
              value={!currTag ? null : currTag}
              onChange={handleChangeTag}
              style={{ width: 200 }}
              className="custom-dropdown"
              dropdownStyle={{ borderRadius: '4px' }} // Custom dropdown style
              suffixIcon={<ArrowDropdown />} // Sử dụng icon mũi tên xuống
              options={[{
                value: "",
                  label: '',
              }].concat(tags.map((value, index) => {
                return {
                  key: index,
                  value: value,
                  label: value,
                }
              }))}
            />
          </div>
        </header>
        <Table setcurrPostEdit={setcurrPostEdit} isModalEditOpen={isModalEditOpen} setIsModalEditOpen={setIsModalEditOpen} fetchPost={handleGetPost} posts={posts} />
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
      <ModalCreateEdit fetchPost={handleGetPost} tags={tags} isModalOpen={isModalCreateOpen} setIsModalOpen={setIsModalCreateOpen} />
      <ModalCreateEdit post={currPostEdit} fetchPost={handleGetPost} tags={tags} isModalOpen={isModalEditOpen} setIsModalOpen={setIsModalEditOpen}/>
    </div>
  );
};

export default Profile;
