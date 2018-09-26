import React from 'react';

export function Add(props: { x: number; y: number }) {
    const { x, y } = props;
    return <div>{x + y}</div>;
}
