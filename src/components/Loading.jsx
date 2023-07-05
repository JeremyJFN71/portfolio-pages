import { BarLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <BarLoader color='#89e0d1' width='40%' />
        </div>
    )
}