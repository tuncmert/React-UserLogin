import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../requests/login';

export default function Product() {
    let navigate = useNavigate();
    useEffect(() => {
        let token: string | null = localStorage.getItem('token');
        if (token == null) {
            navigate('/login');
        } else {
            //token check
            checkToken(token).then((data: boolean) => {
                console.log(token)
                if (data) {
                    
                } else {
                    navigate('/login');
                }
            }).catch(err => console.log(err));
        }
    }, [])
    return (
        <div>Product</div>
    )
}
