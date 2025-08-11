
import {useState} from 'react';
import axios from 'axios';

export default function Dashboard(){
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState(null);
  const runResearch = async () => {
    setResult('working...');
    try{
      const r = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/agent`, {agent: 'research', payload: {topic}});
      setResult(r.data);
    }catch(e){
      setResult('error: ' + (e.response?.data?.error || e.message));
    }
  }
  return (
    <div style={{fontFamily:'sans-serif',padding:40}}>
      <h2>Dashboard</h2>
      <input placeholder="Topic to research" value={topic} onChange={e=>setTopic(e.target.value)} style={{width:400}}/>
      <button onClick={runResearch} style={{marginLeft:10}}>Run Research Agent</button>
      <pre style={{whiteSpace:'pre-wrap',marginTop:20}}>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}
