export const showData = async (req, res) => {
    // 1- grap id of the selected subjects:
    const {_id} = req.params;  // =  const _id = req.params._id;
    //console.log(_id);

    // 2- show info about the subject with this id:
    const singleSubject = await subject.findById(_id).populate('department').lean();
    console.log(singleSubject.name);

    // 3- render "show" template:
    res.render('subjects/show', {singleSubject});
}