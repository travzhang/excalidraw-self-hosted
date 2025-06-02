'use client';
import dynamic from "next/dynamic";
import "@excalidraw/excalidraw/index.css";
import {useEffect, useState} from "react";
import {Button, Spin} from "antd";

const Excalidraw = dynamic(
    async () => (await import("@excalidraw/excalidraw")).Excalidraw,
    {
        ssr: false,
    },
);
export default function ExcalidrawWrapper() {
    const [elements, setElements] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [noteName, setNoteName] = useState("Untitled");
    const noteId = 'cmbf7oqqa0000i40vpqt856at'; // Replace with actual note ID or prop

    function onChange(el:any) {
        console.log(el,'??el')
        setElements(el)
    }

    const fetchNote = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/note?id=${noteId}`);
            if (!response.ok) throw new Error('Failed to fetch note');

            const note = (await response.json())[0];
            console.log(note,JSON.parse(note.content),'???')
            setElements(JSON.parse(note.content) || []);
            setNoteName(note.name);
        } catch (error) {
            console.error('Error loading note:', error);
        } finally {
            setIsLoading(false);
        }
    };
    const saveNote = async () => {
        try {
            setIsLoading(true);
            const method = noteId ? 'PUT' : 'POST';
            const url = noteId ? `/api/note` : '/api/note';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: noteId,
                    name: noteName,
                    content: JSON.stringify(elements),
                }),
            });

            if (!response.ok) throw new Error('Failed to save note');

            const savedNote = await response.json();
            if (!noteId) {
                // If this was a new note, redirect to the edit page for the new ID
                // window.history.pushState({}, '', `/notes/${savedNote.id}`);
            }
            setIsLoading(false);
            alert('保存成功！');
            return savedNote;
        } catch (error) {
            setIsLoading(false);
            console.error('Error saving note:', error);
            alert('保存失败，请重试！');
            throw error;
        }
    };


    useEffect(() => {
        fetchNote()
    },[])
    return <div>
        <Button type={'primary'} onClick={saveNote}>
            保存
        </Button>
        <Spin spinning={isLoading}>
            <div style={{ width: '100%', height: 'calc(100vh - 36px)' }}>
                {
                    elements &&<Excalidraw langCode={'zh-CN'} onChange={onChange} initialData={{
                        elements:elements||[]
                    }} />
                }
            </div>
        </Spin>
    </div>;
}