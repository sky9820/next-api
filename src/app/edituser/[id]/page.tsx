"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({ params }) {
    const router = useRouter();
    const { id } = params;  // Get id from URL params
    console.log("User ID:", id);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const editUser = async () => {
        if (!id) {
            alert("User ID is missing!");
            return;
        }

        console.log("Updating User:", name, age, email);
        try {
            let response = await fetch(`/api/users/${id}`, {  // Use relative API path
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, age, email })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data.success) {
                alert("User Updated Successfully!");
            } else {
                alert("Error updating user data, please try again.");
            }

            console.log("Response Data:", data);
        } catch (error) {
            console.error("Error updating user:", error);
            alert("An error occurred. Please check the console.");
        }
    };

    return (
        <div className="userlists align-center">
            <h1>Edit User:</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <button onClick={editUser} className="link">Edit User</button>
        </div>
    );
}
