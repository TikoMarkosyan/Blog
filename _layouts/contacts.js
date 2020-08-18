import {useState} from "react";
import styles from '../styles/contact.module.css'
import axios from 'axios';

export default function ContactLayout(){
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setemail] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        console.log( e.preventDefault())
        let data = {
            name:name,
            lastname:lastname,
            email:email,
        }


        axios.post('/api/forma',data)
            .then(res=>{
                console.log("message send")
                this.setState({
                    sent:true,
                },resetForm())
            })
            .catch(()=>{
                console.log('message not send');

            })

    }
    const resetForm = ()=> {
        setemail("");
        setLastname("");
        setName("")
    }
    const handleEmail = (e) => {
        console.log(e.target.value);
        setemail(e.target.value);
    }
    const handleName = (e) =>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleLastname = (e) => {
        console.log(e)
        setLastname(e.target.value);
    }
    return (
        <>
            <form className={styles.loginForm} onSubmit={formSubmit}>

                <input type="email" className={styles.login} required="true" placeholder="Email"
                        onChange={handleEmail}/>
                <input type="text" className={styles.login} required="true" placeholder="Name"
                   onChange={handleName}/>
                <input type="text" className={styles.login} required="true" placeholder="Surname"
                       onChange={handleLastname}/>
                <br/>
                <input type="submit" className={styles.loginSubmit} name="Login" value="Sumbmit"/>
            </form>
        </>
    )
}