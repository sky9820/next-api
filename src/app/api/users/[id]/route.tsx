import { user } from "../../../../util/db";

import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const { id } = await params; 
    const data = await user;  
    const userData = data.filter((item)=>item.id==id)
    return NextResponse.json(
        userData.length==0?{result:"No result found",success:false}:{result:userData,success:true}, 
        {status: 200})  
}    