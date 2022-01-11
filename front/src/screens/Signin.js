import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../actions/userActions';
import Loading from '../components/Loading';
import Message from '../components/Message';

export default function Signin(props) {

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    const dispatch = useDispatch();

    return (
        <div>
            <form className='signin_form' onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    {loading && <Loading></Loading>}
                    {error && <Message variant="danger">{error}</Message>}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' required onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button type='submit'>Sign In</button>
                <div>
                    <Link to={`/signup?redirect=${redirect}`}>Create account</Link>
                </div>
            </form>
        </div>
    )
}