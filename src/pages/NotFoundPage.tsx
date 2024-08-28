import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import URL_CONST from '../constants/URL_const'

const NotFoundPage = () => {
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
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={() => navigate(URL_CONST.HOME)}>
            Back Home
          </Button>
        }
      />
    </div>
  )
}

export default NotFoundPage
