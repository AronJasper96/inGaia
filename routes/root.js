import express from 'express';
import {calcMeters} from '../rest-api/controller/calc-controller';
import {check} from '../rest-api/controller/health-controller';
const router = express.Router();

router.get('/', check);
router.post('/v1/calc/metro/quadrado', calcMeters);

module.exports = router;