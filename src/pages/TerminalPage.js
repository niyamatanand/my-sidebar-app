// src/pages/TerminalPage.js

import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

function TerminalPage() {
  const terminalRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const term = new Terminal();
    term.open(terminalRef.current);
    term.writeln('Welcome to the WebSocket Terminal');
    term.prompt = () => {
      term.write('\r\n$ ');
    };
    term.prompt();

    socketRef.current = new WebSocket('ws://localhost:8080');

    socketRef.current.onopen = () => {
      term.writeln('< Connected to WebSocket server ✅');
    };

    socketRef.current.onmessage = (event) => {
      term.writeln('< ' + event.data);
      term.prompt();
    };

    let inputBuffer = '';

    term.onData(data => {
      if (data === '\r') {
        socketRef.current.send(inputBuffer);
        inputBuffer = '';
      } else if (data === '\u007F') {
        if (inputBuffer.length > 0) {
          inputBuffer = inputBuffer.slice(0, -1);
          term.write('\b \b');
        }
      } else {
        inputBuffer += data;
        term.write(data);
      }
    });

    return () => {
      socketRef.current.close();
    };
  }, []);

  return (
    <div style={{ height: '100vh', background: 'black' }} ref={terminalRef}></div>
  );
}

export default TerminalPage;
