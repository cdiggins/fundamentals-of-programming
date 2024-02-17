'use client'
import Image from "next/image";
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { historyField } from '@codemirror/commands';
import { Splitter, SplitterPanel } from 'primereact/splitter';

// When custom fields should be serialized, you can pass them in as an object mapping property names to fields.
// See [toJSON](https://codemirror.net/docs/ref/#state.EditorState.toJSON) documentation for more details
const stateFields = { history: historyField };

export function EditorWithInitialState() {
  const serializedState = localStorage.getItem('myEditorState');
  const value = localStorage.getItem('myValue') || '';

  return (
    <CodeMirror
      value={value}
      initialState={
        serializedState
          ? {
              json: JSON.parse(serializedState || ''),
              fields: stateFields,
            }
          : undefined
      }
      onChange={(value, viewUpdate) => {
        localStorage.setItem('myValue', value);

        const state = viewUpdate.state.toJSON(stateFields);
        localStorage.setItem('myEditorState', JSON.stringify(state));
      }}
    />
  );
}

export default function Home() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  return (
    <main>
      <h1 className="center p-8">Fundamentals of Programming</h1>   
      <div className="flex flex-row">
      <CodeMirror value={value} className="flex-1 p-4" height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />     
      <CodeMirror value={value} className="flex-1 p-4" height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />     
      </div>
    </main>
  
  );
}
