import { connect } from '@/dbConfig/dbConfig'
import { getDataFromToken } from '@/helpers/getDataFromToken'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
    try {  
       // extract data from token

       const userId = await getDataFromToken(request)

        const user = await User.findOne({_id: userId}).select("-password")

        if (!user) {
        return NextResponse.json({ error: "user not found"}, { status: 500 })
            
        }
        console.log("geting the user")
        // console.log(user)
        return NextResponse.json({
            message: "User found",
            data: user
        })



    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

