import { useState } from "react"
import Button from "../../components/Button"
import TextField from "../../components/TextFeild"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from "../../redux/features/userSlice"


const EditUser = () => {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params)
    const navigate = useNavigate();
    const exiting = users.filter((user) => user.id === params.id)
    const { name, email } = exiting[0]
    const [values, setValues] = useState({
        name: name,
        email: email,
    })

    const handleEdit = () => {
        setValues({ name: " ", email: "" })
        dispatch(editUser({
            id: params.id,
            name : values.name,
            email : values.email,
        }))
        console.log(values)
        navigate("/")
    }
    return (
        <>
            <div className="mt-10 max-w-xl mx-auto">
                <TextField value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
                    label="Name" inputProps={{ type: "text", placeholder: "John Doe" }} />
                <TextField value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
                    label="Email" inputProps={{ type: "email", placeholder: "example@gmail.com" }} />
                <Button onClick={handleEdit}>Edit Data</Button>
            </div>
        </>
    )
}
export default EditUser;