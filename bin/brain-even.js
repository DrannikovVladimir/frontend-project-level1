#!/usr/bin/env node

import gameFlow from '../index.js';
import { QUESTION, getEven } from '../games/brain-even.js';

gameFlow(QUESTION, getEven);
