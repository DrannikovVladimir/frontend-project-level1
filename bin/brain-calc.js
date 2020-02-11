#!/usr/bin/env node

import gameFlow from '../index.js';
import { QUESTION, countExpression } from '../games/brain-calc.js';

gameFlow(QUESTION, countExpression);
