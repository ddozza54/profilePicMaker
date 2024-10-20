import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      알 수 없는 오류가 발생했습니다.
      <Link to="/">👉 처음으로 돌아가기</Link>
    </div>
  );
}
