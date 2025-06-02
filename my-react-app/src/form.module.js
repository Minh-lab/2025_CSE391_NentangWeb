import React, { useState} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from '../src/style.module.css';   


export const FormTest = ()=>{
        const [inform,setInform] = useState("");
        const schema = yup.object({
            email: yup.string().required("Email is required").matches(/^\S+@\S+\.\S+$/, "Invalid Email"),
            password: yup.string().required("Password is required").matches(/^[A-Za-z\d]{6,}$/, "Invalid Password"),
            rePassword: yup.string().required("Re-Password is required").oneOf([yup.ref('password')], "Passwords do not match")
        })
       const {register, handleSubmit, formState:{  errors } , reset } = useForm({resolver: yupResolver(schema)})

       const onSubmit = (data)=>{
        let arrayUser = JSON.parse(localStorage.getItem("user")) || []; 
        const newEmail = data.email;
        if(arrayUser.some(value=>{return value.email === newEmail;}))
        {
            setInform("❌ Email already exists!");
            return;
        }
        else{
        const currentData = data;
        arrayUser.push(currentData);
        localStorage.setItem("user",JSON.stringify(arrayUser));
        setInform("✔️ Registered successfully");
       reset(); 
        setTimeout(()=>{
            window.location.href = "https://www.google.com.vn/?hl=vi";

        }, 700);
        }
        
       }

    return(
    <div className={styles.rightForm}>
        <div className={styles.titleForm}>
            <h1>Create an account</h1>
            <p>Let’s get started with your 30 days free trial</p>
        </div>
        <div className={styles.formInput}>
            <div className={styles.inputRight}>
                <form id="input" onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.formControl}>
                            <div>
                                <label htmlFor="email">Email</label><br></br>
                                <input id="email" type="text" {...register("email")} />
                            </div>
                            {errors.email && <span style={{fontStyle : "italic", color:"red"}}>{errors.email.message}</span>}
                            <div>           
                                <label htmlFor="password">Password</label><br></br>
                                <input type="text" id="password" {...register("password")} />
                            </div>

                                {errors.password && <span style={{fontStyle : "italic", color:"red"}}>{errors.password.message}</span>}
    
                            <div>
                                <label htmlFor="re_password">Re-Password</label><br></br>
                                <input type="text" id="re_password" {...register('rePassword')} />
                            </div>
                                {errors.rePassword && <span style={{fontStyle : "italic", color:"red"}}>{errors.rePassword.message}</span>}
                                {inform && (<span className={inform.includes("❌") ? styles.error : styles.success}>{inform}</span>
)}

                                <div className= {styles.btnSubmit}>
                                    <input type="submit" value="Create Account"  />
                                </div>
                                <div className={styles.signWithGoogle}>
                                    <div>
                                        <img src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000" alt="" className={styles.iconGoogle} />
                                    </div>
                                    <div className={styles.spanTitle}>
                                        <span >Sign up with Google</span>
                                    </div>
                                </div>
                                    <div className={styles.footer}>
                                        <div><span> Already have an account?</span></div>
                                        <div>
                                            <a href="http://facebook.com">Sign in</a>
                                        </div>
                                    </div>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    )
}
export default FormTest



