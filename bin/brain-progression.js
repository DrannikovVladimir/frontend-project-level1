#!/usr/bin/env node

import gameFlow from '../index.js';
import { QUESTION, getProgression } from '../games/brain-progression.js';

gameFlow(QUESTION, getProgression);
