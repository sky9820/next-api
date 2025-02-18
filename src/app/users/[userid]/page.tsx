
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
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
            <p>User Age: {user.age}</p>
        </div>
    )
}