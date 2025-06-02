import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

// Get all notes
export async function GET(request: NextRequest) {
    try {
        const notes = await prisma.note.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json(notes);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch notes" },
            { status: 500 }
        );
    }
}

// Create a new note
export async function POST(request: NextRequest) {
    try {
        const { name, content } = await request.json();

        if (!name || !content) {
            return NextResponse.json(
                { error: "Name and content are required" },
                { status: 400 }
            );
        }

        const newNote = await prisma.note.create({
            data: {
                name,
                content,
            },
        });

        return NextResponse.json(newNote, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create note" },
            { status: 500 }
        );
    }
}

// Update a note
export async function PUT(request: NextRequest) {
    try {
        const { id, name, content } = await request.json();

        if (!id || !name || !content) {
            return NextResponse.json(
                { error: "ID, name and content are required" },
                { status: 400 }
            );
        }

        const updatedNote = await prisma.note.update({
            where: { id },
            data: {
                name,
                content,
                updatedAt: new Date(),
            },
        });

        return NextResponse.json(updatedNote);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update note" },
            { status: 500 }
        );
    }
}

// Delete a note
export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                { error: "Note ID is required" },
                { status: 400 }
            );
        }

        await prisma.note.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: "Note deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete note" },
            { status: 500 }
        );
    }
}