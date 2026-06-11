import { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('connected');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cloudParam = params.get('cloud');

    if (cloudParam === 'disconnected') {
      setStatus('disconnected');
    } else {
      setStatus('connected');
    }
  }, []); // <--- 这里的括号一定要成对出现

  return (
    <div style={{ padding: '20px' }}>
      <h1>服务器状态监控</h1>

      {status === 'connected' ? (
        <p style={{ color: 'green', fontSize: '20px' }}>✅ 系统运行正常</p>
      ) : (
        <p style={{ color: 'red', fontSize: '20px' }}>❌ 系统连接断开</p>
      )}
    </div>
  );
} // <--- 这一行非常重要！它是整个函数的结束标志，千万别漏了！
