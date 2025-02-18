import Link from "next/link";

async function getUser(id) {
    let data = await fetch(`http://192.168.7.16:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}

export default async function Page({params}: { params: { userid: string } }){
    const param = await params;
    const user = await getUser(param.userid);  
    return(
        <div className="userlists">
            <h1>User Detail:</h1>
            
            <p><strong>User Name:</strong> {user.name}</p>
            <p><strong>User Email:</strong> {user.email}</p>
            <p><strong>User Age:</strong> {user.age}</p>
            
            <br />
            <br />
            <br />
            <Link className="link" href="/users">Back to User List</Link>

        </div>
    )
}