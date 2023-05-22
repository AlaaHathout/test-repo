import { Router } from "express";
import department from '../models/department.js'
import subject from '../models/subject.js'
import { create, index, show, store } from "../controllers/subject.js";

const router = new Router();

router.get('/', index);

router.get('/createSubject', async(req, res) => {
    await subject.create({
        name: 'C++',
        code: 'C++-CS'
    });
    res.send('All is Done');
    print('kkkkkkkk')
});

router.get('/createDept', async(req, res) => {
    await department.create({
        name: 'Information System',
        code: 'IS'
    });
    res.send('All is Done');
});

router.get('/create', create);

router.post('/', store);

router.get('/:_id', show);

export default router;