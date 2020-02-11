#!/usr/bin/env node

import gameFlow from '../index.js';
import { QUESTION, getGcd } from '../games/brain-gcd.js';

gameFlow(QUESTION, getGcd);
