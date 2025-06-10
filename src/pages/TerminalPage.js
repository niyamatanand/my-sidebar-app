import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import './TerminalPage.css'; // Make sure this file exists

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

    // Setup WebSocket connection
    socketRef.current = new WebSocket('ws://localhost:8080');

    socketRef.current.onopen = () => {
      term.writeln('< Connected to WebSocket server ✅');
      term.prompt();
    };

    socketRef.current.onmessage = (event) => {
      term.writeln('< ' + event.data);
      term.prompt();
    };

    let inputBuffer = '';

    term.onData((data) => {
      if (data === '\r') {
        socketRef.current.send(inputBuffer);
        inputBuffer = '';
        term.write('\r\n');
      } else if (data === '\u007F') {
        // Handle backspace
        if (inputBuffer.length > 0) {
          inputBuffer = inputBuffer.slice(0, -1);
          term.write('\b \b');
        }
      } else {
        inputBuffer += data;
        term.write(data);
      }
    });
  }, []);

  return (
    <div className="terminal-wrapper">
      <div ref={terminalRef}></div>
    </div>
  );
}

export default TerminalPage;
