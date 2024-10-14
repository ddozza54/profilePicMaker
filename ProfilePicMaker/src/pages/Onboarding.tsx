import { Link } from 'react-router-dom';

export default function Onboarding() {
    return (
        <div>
            OnBoarding!

            <Link to='/page/canvas'>아바타 만들기</Link>
            <Link to='/page/gallery'>아바타 구경하기</Link>
        </div>
    );
}

