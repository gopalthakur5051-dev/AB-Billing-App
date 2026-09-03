import test from 'node:test'; import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
const p=spawn('node',['--import','tsx','src/server.ts'],{cwd:process.cwd()});
const wait=ms=>new Promise(r=>setTimeout(r,ms));
test('health endpoint',async()=>{await wait(1500); const r=await fetch('http://localhost:4000/api/health'); assert.equal(r.status,200); assert.deepEqual(await r.json(),{ok:true})});
test.after(()=>p.kill());
