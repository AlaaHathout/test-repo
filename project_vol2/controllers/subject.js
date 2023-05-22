import subject from '../models/subject.js';
import department from '../models/department.js';

export const index = async(req, res) => {
   // const subjects = await subject.find().lean(); // to retrieve all columns (name, code)
    const subjects = await subject.find({}, {name: 1}).lean(); // to retrieve only the name column
    res.render('./subjects/index', { subjects });
};


export const create = async(req, res) => {
    const departments = await department.find().lean();
    res.render('./subjects/create', { departments });
};


export const store = (req, res) => {
    console.log(req.body); // body contain the data in the form
   /* const name = req.body.name;
    const code = req.body.code;
    console.log(name);*/

    const {name, code, department, prerequisite} = req.body;
    subject.create({
        name: name, // = name,
        code,
        department,
        prerequisite
    });
    // res.send('Added');
    res.redirect('/subjects');
    //console.log(name);
};


export const show = async (req, res) => {
    // 1- grap id of the selected subjects:
    const {_id} = req.params;  // =  const _id = req.params._id;
    //console.log(_id);

    // 2- show info about the subject with this id:
    const singleSubject = await subject.findById(_id).populate('department').lean();
    console.log(singleSubject);

    // 3- render "show" template:
    res.render('subjects/show', {singleSubject});
}