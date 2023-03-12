import crypto from 'crypto';

function hash256bits(password : String) {
  return crypto.createHash('sha256').update(Buffer.from(password)).digest('hex');
}

export default hash256bits;