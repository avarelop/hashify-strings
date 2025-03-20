
import crypto from 'crypto-js';

export type HashFunction = 'md5' | 'sha1' | 'sha256' | 'sha512' | 'sha3' | 'ripemd160';

export interface HashAlgorithm {
  name: string;
  id: HashFunction;
  description: string;
}

export const HASH_ALGORITHMS: HashAlgorithm[] = [
  {
    name: 'MD5',
    id: 'md5',
    description: 'Fast but less secure 128-bit hash function'
  },
  {
    name: 'SHA-1',
    id: 'sha1',
    description: '160-bit hash function, legacy algorithm'
  },
  {
    name: 'SHA-256',
    id: 'sha256',
    description: 'Strong 256-bit cryptographic hash function'
  },
  {
    name: 'SHA-512',
    id: 'sha512',
    description: 'High security 512-bit hash function'
  },
  {
    name: 'SHA-3',
    id: 'sha3',
    description: 'Latest member of the SHA family'
  },
  {
    name: 'RIPEMD-160',
    id: 'ripemd160',
    description: '160-bit cryptographic hash function'
  }
];

export const hashString = (text: string, algorithm: HashFunction): string => {
  if (!text) return '';
  
  switch (algorithm) {
    case 'md5':
      return crypto.MD5(text).toString();
    case 'sha1':
      return crypto.SHA1(text).toString();
    case 'sha256':
      return crypto.SHA256(text).toString();
    case 'sha512':
      return crypto.SHA512(text).toString();
    case 'sha3':
      return crypto.SHA3(text).toString();
    case 'ripemd160':
      return crypto.RIPEMD160(text).toString();
    default:
      return '';
  }
};
