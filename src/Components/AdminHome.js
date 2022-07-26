import React from "react";
import AdminService from "../Services/AdminService";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";

const AdminHome = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [users,setUsers] = useState("");
    

    useEffect(() => {
        let admin = localStorage.getItem("admin");
        if(admin === null) {
            navigate("/admin/login");
        }
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await AdminService.getCourses();
                setCourses(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();

        const fetchData2=async()=>{
            setLoading(true);
            try{
                const response=await AdminService.getUsers();
                setUsers(response.data);
            }
            catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData2();
    }, []);

    const logout = () => {
        localStorage.removeItem("admin");
        navigate("/admin/login");
    };
    

    return(
        <div>
            <h3>Yes you are logged in</h3>
            <button onClick={logout}>Logout</button>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Contributor</th>
                        <th>Title</th>
                        <th>Estimated Time</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody>
                        {
                            courses.map(
                                (course) => (
                                    <tr key={course.id}>
                                        <td>{course.id}</td>
                                        <td>{course.creator}</td>
                                        <td>{course.title}</td>
                                        <td>{course.estimatedTime}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                )}
            </table>
            </div>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Mail ID</th>
                    </tr>
                </thead>
            {!loading && (
                <tbody>
                    {
                        users.map(
                            (user) => (
                                <tr key={user.username}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                
                                </tr>
                            )
                        )
                    }
                </tbody>
            )}
            </table>
            </div>
        </div>
    )
}
export default AdminHome;