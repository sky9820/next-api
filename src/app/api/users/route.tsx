import { user } from "../../../util/db";
import { NextResponse } from "next/server";

export function GET() {
    const data = user;
    return NextResponse.json(data, { status: 200 });
}

export async function POST( request ) {
    const payload = await request.json();
    
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({ result: "Required field not found", success: false}, {status: 400});
    }
    return NextResponse.json({ result: "Data Inserted", success: true },{status:201});
}

// export async function POST(request: Request) {
//     try {
//         const payload = await request.json(); // Ensure the request body is valid JSON
//         console.log(payload);

//         return NextResponse.json({ result: "hello ji" });
//     } catch (error) {
//         return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
//     }
// }