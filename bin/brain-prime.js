#!/usr/bin/env node

import gameFlow from '../index.js';
import { QUESTION, getPrime } from '../games/brain-prime.js';

gameFlow(QUESTION, getPrime);
