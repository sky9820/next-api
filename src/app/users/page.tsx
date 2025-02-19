import Link from "next/link";

async function getUsers() {
    let data = await fetch("http://192.168.7.16:3000/api/users");
    data = await data.json();
    return data;
}

export default async function Page() {
    const users = await getUsers();
    console.log(users);
    return (
        <div className="userlists">
            <h1>User Lists:</h1>
            {
                users.map((item)=>(
                    <div key={item.id}>
                        <Link href={`users/${item.id}`}>{item.name}</Link>
                        <Link href={`edituser/${item.id}`}>  -  Edit</Link>
                    </div>
                ))
            }
        </div>
    )
}