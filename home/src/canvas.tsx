import { Canvas, type CanvasProps } from '@react-three/fiber';
import type * as React from 'react';
import { WebGPURenderer } from 'three/webgpu';

export type WebGPUCanvasProps = Omit<CanvasProps, 'gl'>;

export const WebGPUCanvas = ({
    children,
    ...props
}: React.PropsWithChildren<WebGPUCanvasProps>) => {
    return (
        <Canvas
            {...props}
            id="gl"
            gl={async ({ canvas }) => {
                const renderer = new WebGPURenderer({
                    canvas: canvas as HTMLCanvasElement,
                });
                await renderer.init();
                return renderer;
            }}
        >
            {children}
        </Canvas>
    );
};
