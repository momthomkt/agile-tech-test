import { useState, useCallback, useEffect } from 'react';
import { Button, Modal, Form, Row, Col, Input, Select } from 'antd';
import type { FormProps } from 'antd';
import { postCreateEditType, PropCreateEditType } from './index';
import postsService, {postCreateType} from '../../services/postsService';
import { toast } from 'react-toastify';

const ModalCreateEdit = (
  {
    post,
    tags,
    isModalOpen,
    setIsModalOpen,
    fetchPost
  } : PropCreateEditType
) => {
  const [form] = Form.useForm();
  const [currTags, setCurrTags] = useState<string[]>([]);

  useEffect(() => {
    if (post) {
      form.setFieldsValue({
        title: post.title,
        description: post.description,
        tags: post.tags
      })
    }
  },[post])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const trimFieldValue = useCallback((nameField: string) => {
    form.setFieldValue(nameField, form.getFieldValue(nameField)?.trim())
  }, [form]);

  const handleChangeTag = (value: string[]) => {
    setCurrTags(value)
  }

  function resetData (): void {
    form.setFieldsValue({
      title: "",
      desciption: "",
      tags: []
    })
    setCurrTags([])
  }

  const handleSave: FormProps<postCreateEditType>['onFinish'] = (values) => {
    if (post) {
      if (!post.id) {
        toast.error("This post has no id field!");
        return
      }
      postsService.update(post.id, {
        title: values.title,
        description: values.description,
        tags: values.tags
      })
        .then((res) => {
          fetchPost(1)
          resetData()
          setIsModalOpen(false)
          toast.success("Update successfully!", { theme: "colored" });
        })
        .catch((err) => {
          toast.error("System error!", { theme: "colored" });
        })
    }
    else {
      let newPost = {
        title: values.title,
        description: values.description,
        tags: values.tags
      }
      postsService.create(newPost)
        .then((res) => {
          fetchPost(1)
          resetData()
          setIsModalOpen(false)
          toast.success("Create successfully!", { theme: "colored" });
        })
        .catch((err) => {
          toast.error("System error!", { theme: "colored" });
        })
    }
  };

  const onFinishFailed: FormProps<postCreateEditType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Modal forceRender title={post ? "Update Post" : "Create Post"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          size="large"
          // name="createPlant"
          // className="modal-create-content"
          form={form}
          onFinish={handleSave}
          colon={false}
          layout="vertical"
        >
          <Row gutter={[20, 0]} >
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="title"
                label={<span>Title:</span>}
                // initialValue={plantData?.name ?? ""}
                rules={[
                  {
                    max: 30,
                    message: 'The maximum length for a string is 30 characters'
                  },
                  {
                    required: true,
                    pattern: /\S/,
                    message: "Bạn cần nhập thông tin này",
                  },
                ]}
              >
                <Input size="middle" placeholder="" name="" onBlur={()=>{trimFieldValue('title')}}/>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="tags"
                label={<span>Title:</span>}
                
                // initialValue={plantData?.name ?? ""}
                initialValue={currTags}
                rules={[
                  {
                    required: true,
                    pattern: /\S/,
                    message: "Bạn cần nhập thông tin này",
                  },
                ]}
              >
                <Select
                  mode="tags"
                  value={currTags}
                  maxCount={tags.length}
                  style={{ width: "100%" }}
                  onChange={handleChangeTag}
                  options={tags.map((tag, index) => ({
                    key: index,
                    value: tag,
                    label: tag,
                  }))}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item
                name="description"
                label={<span>Description:</span>}
                // initialValue={plantData?.name ?? ""}
                rules={[
                  {
                    max: 100,
                    message: 'The maximum length for a string is 100 characters'
                  },
                  {
                    required: true,
                    pattern: /\S/,
                    message: "Bạn cần nhập thông tin này",
                  },
                ]}
              >
                <Input.TextArea autoSize={{ minRows: 5, maxRows: 6 }} onBlur={()=>{trimFieldValue('description')}}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCreateEdit;