'use client';
import dynamic from "next/dynamic";

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
    async () => (await import("@/components/excalidraw-wrapper")).default,
    {
        ssr: false,
    },
);

export default function Page() {
    console.log(ExcalidrawWrapper,'ExcalidrawWrapper')
    return (
        <div style={{height:'90vh',width:'100%'}}>
            <ExcalidrawWrapper />
        </div>
    );
}