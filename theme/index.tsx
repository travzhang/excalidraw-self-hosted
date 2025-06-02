"use client";

import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node: JSX.Element) => (
    <>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#6965db',
                },
            }}
        >
            <ConfigProvider
            >
                {node}
            </ConfigProvider>
        </ConfigProvider>
    </>
)

export default withTheme;