import { connect } from '@/dbConfig/dbConfig'
import { getDataFromToken } from '@/helpers/getDataFromToken'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function GET(request: NextRequest) {
    try {
       // extract data from token

       const userId = await getDataFromToken(request)

        const user = User.findOne({_id: userId}).select("-password")

        if (!user) {
        return NextResponse.json({ error: "user not found"}, { status: 500 })
            
        }

        return NextResponse.json({
            message: "User found",
            data: user
        })



    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}