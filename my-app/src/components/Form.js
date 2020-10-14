import React from 'react'

export default function Form(props) {
    const { values, submit, change, disabled, errors} = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
     
    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <div>
            <h1>from form component</h1>
            <form  onSubmit={onSubmit} >
                <label> Name:
                    <input name="username" type="text" onChange={onChange} value={values.username}></input>
                </label>
                <label> E-mail:
                    <input name="email" type="text" onChange={onChange} value={values.email} ></input>
                </label>
                <label> Password:
                    <input name="password" type="password" onChange={onChange} value={values.password} checked={values.password} ></input>
                </label>
                <label> Terms of Service
                    <input name="tos" type="checkbox" onChange={onChange} value={values.tos} ></input>
                </label>
               <button disabled={disabled}>submit</button>
            </form>
            <div>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
        </div>
    )
}
