import { useState } from "react"
import Button from "../../components/Button"
import TextField from "../../components/TextFeild"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../../redux/features/userSlice"
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
    })

    const handleAdd = () => {
        setValues({ name: " ", email: "" })
        dispatch(addUser({
            id :uuidv4(),
            name : values.name,
            email : values.email
        }))
        console.log(values)
        navigate("/")
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
                label="Name" inputProps={{ type: "text", placeholder: "John Doe" }} />
            <TextField value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
                label="Email" inputProps={{ type: "email", placeholder: "example@gmail.com" }} />
            <Button onClick={handleAdd}>Submit</Button>
        </div>
    )
}

export default AddUser