import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import URL_CONST from '../constants/URL_const'

const ForbiddenPage = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Result
        status='403'
        title='403'
        subTitle='Sorry, you are not authorized to access this page.'
        extra={
          <Button type='primary' onClick={() => navigate(URL_CONST.HOME)}>
            Back Home
          </Button>
        }
      />
    </div>
  )
}

export default ForbiddenPage
