// app/api/users/route.js
import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";


// GET /api/users
export async function GET(request:NextRequest) {
    // 处理查询参数
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;

    const users2 = await prisma.user.findMany({
        where: {
            // email: { endsWith: "prisma.io" }
        },
    })

    console.log(users2,'users2')

    // 这里可以连接数据库或调用其他服务
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
    ];

    return NextResponse.json({
        page,
        data: users,
    });
}