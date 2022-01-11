import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../actions/userActions';
import Loading from '../components/Loading';
import Message from '../components/Message';


export default function Signup(props) {

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password confirmation does not match!');
        } else {
            dispatch(signup(name, email, password));
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const userSignup = useSelector((state) => state.userSignup);
    const { userInfo, loading, error } = userSignup;
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
                    <h1>Sign up</h1>
                </div>
                <div>
                    {loading && <Loading></Loading>}
                    {error && <Message variant="danger">{error}</Message>}
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' required onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' required onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Comfirm password</label>
                    <input type='password' id='confirmPassword' required onChange={e => setConfirmPassword(e.target.value)}></input>
                </div>
                <button type='submit' id='signup_button'>Sign up</button>
            </form>
        </div>
    )
}