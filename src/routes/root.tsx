import { Link } from 'react-router-dom'

export const Root = () => {
  return (
    <div>
      <h1>TOPページ</h1>

      <Link to="signin" style={{ marginRight: 10 }}>
        ログイン
      </Link>
      <Link to="signup">登録</Link>
    </div>
  )
}
