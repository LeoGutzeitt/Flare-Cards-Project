import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWinnerEmail, deliverWinnerEmail } from '../supabase/functions/_shared/winner-email.mjs';
const job = { name:'<Ana>',card:'Carta & rara',amount:2500,code:'ticket-123',email:'ana@example.test',ticketId:'test-id' };
const config = { from:'Flare <teste@example.test>',key:'fake-test-key',instructions:'Retirada no endereço de teste.' };
test('ticket contém valor, código, orientações e texto escapado', () => {
  const email = buildWinnerEmail(job,config.from,config.instructions);
  assert.deepEqual(email.to,['ana@example.test']); assert.match(email.text,/ticket-123/); assert.match(email.text,/25,00/);
  assert.match(email.html,/&lt;Ana&gt;/); assert.doesNotMatch(email.html,/<Ana>/); assert.match(email.text,/não comprova pagamento/);
});
test('envio usa chave idempotente e rejeita falha do provedor', async () => {
  let call;
  await deliverWinnerEmail(job,config,async (url,options) => { call={url,options}; return {ok:true}; });
  assert.equal(call.options.headers['Idempotency-Key'],'auction-ticket-test-id');
  assert.equal(JSON.parse(call.options.body).to[0],job.email);
  await assert.rejects(deliverWinnerEmail(job,config,async () => ({ok:false,status:429})),/HTTP 429/);
  assert.throws(() => buildWinnerEmail(job,config.from,''),/retirada/);
});
