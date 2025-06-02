'use client';
import dynamic from "next/dynamic";
import withTheme from "@/theme";

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
    async () => (await import("@/components/excalidraw-wrapper")).default,
    {
        ssr: false,
    },
);

function Home() {
    console.log(ExcalidrawWrapper,'ExcalidrawWrapper')
    return (
        <div style={{height:'90vh',width:'100%'}}>
            <ExcalidrawWrapper />
        </div>
    );
}

const HomePage = () => {
    return withTheme(<Home />);
}

export default HomePage;